import { useEffect, useState, useCallback } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { fetchCourseDetail, getCourseImageUrl } from "../api";
import type { CourseDetail } from "../types";
import VideoPlayer from "../components/VideoPlayer";
import LectureList from "../components/LectureList";
import { VideoSkeleton, LectureSidebarSkeleton } from "../components/Skeleton";
import SEO from "../components/SEO";
import KeyboardShortcuts from "../components/KeyboardShortcuts";
import { toast } from "../components/Toast";
import { markWatched, setLastIndex, getCourseProgress } from "../hooks/useProgress";

export default function CourseView() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState("");

  // Restore lecture from URL ?lecture= or saved progress
  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError("");
    fetchCourseDetail(slug)
      .then((data) => {
        setCourse(data);
        const urlLecture = searchParams.get("lecture");
        if (urlLecture) {
          const idx = parseInt(urlLecture, 10) - 1;
          if (idx >= 0 && idx < data.lectures.length) {
            setActiveIndex(idx);
            return;
          }
        }
        // restore from saved progress
        const saved = getCourseProgress(slug);
        if (saved) setActiveIndex(saved.lastIndex);
      })
      .catch(() => setError("Failed to load course. Please try again later."))
      .finally(() => setLoading(false));
  }, [slug, searchParams]);

  // Save progress whenever activeIndex changes
  useEffect(() => {
    if (slug && course) {
      setLastIndex(slug, activeIndex);
      markWatched(slug, activeIndex);
    }
  }, [slug, course, activeIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeIndex]);

  // Share function
  const shareLecture = useCallback(() => {
    const url = `${window.location.origin}/courses/${slug}?lecture=${activeIndex + 1}`;
    navigator.clipboard.writeText(url).then(
      () => toast("Lecture link copied to clipboard!", "🔗"),
      () => toast("Failed to copy link", "❌")
    );
  }, [slug, activeIndex]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't capture if user is typing in an input or palette is open
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;

      if (e.key === "ArrowLeft" && course && activeIndex > 0) {
        e.preventDefault();
        setActiveIndex((p) => p - 1);
      } else if (e.key === "ArrowRight" && course && activeIndex < course.lectures.length - 1) {
        e.preventDefault();
        setActiveIndex((p) => p + 1);
      } else if (e.key.toLowerCase() === "s" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        shareLecture();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [course, activeIndex, shareLecture]);

  if (loading) {
    return (
      <div className="animate-page-enter max-w-[1300px] mx-auto px-4 md:px-6 pt-6 pb-24 md:pb-20">
        <div className="mb-6 h-4 bg-white/10 rounded w-48 animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <VideoSkeleton />
          <div className="space-y-4">
            <div className="h-40 bg-white/[0.05] rounded-xl animate-pulse" />
            <LectureSidebarSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="animate-page-enter text-center py-20 px-6">
        <h2 className="text-3xl text-white mb-2">😕 Oops!</h2>
        <p className="text-white/50 mb-8">{error || "Course not found."}</p>
        <Link to="/courses" className="text-primary-light font-semibold no-underline hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const currentLecture = course.lectures[activeIndex];
  const savedProgress = slug ? getCourseProgress(slug) : null;
  const watchedSet = new Set(savedProgress?.watched ?? []);
  const watchedCount = watchedSet.size;
  const progress = Math.round((watchedCount / course.lectures.length) * 100);
  const imageUrl = slug ? getCourseImageUrl(slug) : "";

  return (
    <div className="animate-page-enter max-w-[1300px] mx-auto px-4 md:px-6 pt-6 pb-24 md:pb-20">
      <SEO
        title={`${course.title} — Lecture ${activeIndex + 1}`}
        description={`${currentLecture.title} — ${course.description}`}
        path={`/courses/${slug}`}
        image={imageUrl}
        type="article"
      />

      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-white/40">
        <Link to="/courses" className="text-primary-light no-underline hover:underline">
          Courses
        </Link>
        <span className="mx-2">/</span>
        <span>{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* Main Content */}
        <div className="flex flex-col gap-6">
          <VideoPlayer
            videoID={currentLecture.videoID}
            title={currentLecture.title}
          />

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block bg-primary/15 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full">
                Lecture {activeIndex + 1} of {course.lectures.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={shareLecture}
                  title="Share lecture link (S)"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/40 text-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/[0.1] hover:text-white/70 active:scale-90"
                >
                  🔗
                </button>
                <KeyboardShortcuts />
              </div>
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {currentLecture.title}
            </h2>
            {currentLecture.description && (
              <p className="text-white/55 text-sm leading-relaxed mb-3">
                {currentLecture.description}
              </p>
            )}
            <div className="flex gap-6 text-sm text-white/40 mb-6">
              <span>⏱ {currentLecture.runtime}</span>
              <span>👨‍🏫 {course.lecturer}</span>
            </div>

            {/* Progress bar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-white/40 whitespace-nowrap">
                {watchedCount}/{course.lectures.length} watched
              </span>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                className="flex-1 py-3 px-5 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 font-semibold text-sm cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-100"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((p) => p - 1)}
              >
                ← Previous
              </button>
              <button
                className="flex-1 py-3 px-5 rounded-xl border-none bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm cursor-pointer transition-all duration-200 hover:shadow-[0_4px_20px_rgba(108,92,231,0.4)] active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-100"
                disabled={activeIndex === course.lectures.length - 1}
                onClick={() => setActiveIndex((p) => p + 1)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 flex flex-col gap-4">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={course.title}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            )}
            <div className="p-5">
              <h2 className="text-lg font-bold text-white mb-2">{course.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-1">{course.description}</p>
              <p className="text-white/65 font-semibold text-sm mt-2">👨‍🏫 {course.lecturer}</p>
            </div>
          </div>
          <LectureList
            lectures={course.lectures}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            watchedSet={watchedSet}
          />
        </aside>
      </div>
    </div>
  );
}
