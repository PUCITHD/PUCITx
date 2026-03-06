import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCourseDetail, getCourseImageUrl } from "../api";
import type { CourseDetail } from "../types";
import VideoPlayer from "../components/VideoPlayer";
import LectureList from "../components/LectureList";
import Loader from "../components/Loader";

export default function CourseView() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError("");
    fetchCourseDetail(slug)
      .then((data) => setCourse(data))
      .catch(() => setError("Failed to load course. Please try again later."))
      .finally(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeIndex]);

  if (loading) return <Loader />;
  if (error || !course) {
    return (
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl text-white mb-2">😕 Oops!</h2>
        <p className="text-white/50 mb-8">{error || "Course not found."}</p>
        <Link to="/courses" className="text-primary-light font-semibold no-underline hover:underline">
          ← Back to Courses
        </Link>
      </div>
    );
  }

  const currentLecture = course.lectures[activeIndex];
  const progress = Math.round(((activeIndex + 1) / course.lectures.length) * 100);
  const imageUrl = slug ? getCourseImageUrl(slug) : "";

  return (
    <div className="max-w-[1300px] mx-auto px-6 pt-6 pb-20">
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
            <span className="inline-block bg-primary/15 text-primary-light text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              Lecture {activeIndex + 1} of {course.lectures.length}
            </span>
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
              <span className="text-xs text-white/40 whitespace-nowrap">{progress}% complete</span>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                className="flex-1 py-3 px-5 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 font-semibold text-sm cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex((p) => p - 1)}
              >
                ← Previous
              </button>
              <button
                className="flex-1 py-3 px-5 rounded-xl border-none bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm cursor-pointer transition-all duration-200 hover:shadow-[0_4px_20px_rgba(108,92,231,0.4)] disabled:opacity-30 disabled:cursor-not-allowed"
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
          />
        </aside>
      </div>
    </div>
  );
}
