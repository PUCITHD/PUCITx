const STORAGE_KEY = "pucitx_progress";

export interface CourseProgress {
  /** last watched lecture index */
  lastIndex: number;
  /** set of watched lecture indices */
  watched: number[];
  /** timestamp of last activity */
  updatedAt: number;
}

type ProgressMap = Record<string, CourseProgress>;

function read(): ProgressMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

/** Get progress for a single course */
export function getCourseProgress(slug: string): CourseProgress | null {
  return read()[slug] ?? null;
}

/** Get all courses with progress, sorted by most recent */
export function getAllProgress(): { slug: string; progress: CourseProgress }[] {
  const map = read();
  return Object.entries(map)
    .map(([slug, progress]) => ({ slug, progress }))
    .sort((a, b) => b.progress.updatedAt - a.progress.updatedAt);
}

/** Mark a lecture as watched and update lastIndex */
export function markWatched(slug: string, index: number) {
  const map = read();
  const prev = map[slug] ?? { lastIndex: 0, watched: [], updatedAt: 0 };
  const watchedSet = new Set(prev.watched);
  watchedSet.add(index);
  map[slug] = {
    lastIndex: index,
    watched: [...watchedSet],
    updatedAt: Date.now(),
  };
  write(map);
}

/** Update the lastIndex (navigated to a lecture) */
export function setLastIndex(slug: string, index: number) {
  const map = read();
  const prev = map[slug] ?? { lastIndex: 0, watched: [], updatedAt: 0 };
  map[slug] = { ...prev, lastIndex: index, updatedAt: Date.now() };
  write(map);
}

/** Get the completion percentage (0-100) */
export function getCompletionPercent(slug: string, totalLectures: number): number {
  const p = getCourseProgress(slug);
  if (!p || totalLectures === 0) return 0;
  return Math.round((p.watched.length / totalLectures) * 100);
}
