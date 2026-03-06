import type { CoursesResponse, CourseDetail } from "./types";

const BASE_URL = "https://pucithd.github.io/pucitx-data/courses";

export async function fetchCourses(): Promise<CoursesResponse> {
  const res = await fetch(`${BASE_URL}/`);
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}

export async function fetchCourseDetail(slug: string): Promise<CourseDetail> {
  const res = await fetch(`${BASE_URL}/${slug}/outline.json`);
  if (!res.ok) throw new Error(`Failed to fetch course: ${slug}`);
  return res.json();
}

export function getCourseImageUrl(slug: string): string {
  return `${BASE_URL}/${slug}/social_photo.png`;
}
