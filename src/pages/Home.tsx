import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import type { CourseSummary } from "../types";
import CourseCard from "../components/CourseCard";
import { CardGridSkeleton } from "../components/Skeleton";
import SEO from "../components/SEO";
import { getAllProgress, getCompletionPercent } from "../hooks/useProgress";

export default function Home() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data.courses))
      .finally(() => setLoading(false));
  }, []);

  const continueWatching = !loading
    ? getAllProgress()
        .map(({ slug, progress }) => {
          const course = courses.find((c) => c.slug === slug);
          if (!course) return null;
          const percent = getCompletionPercent(slug, course.lectures);
          return { slug, course, lectureIndex: progress.lastIndex, percent };
        })
        .filter(Boolean)
        .slice(0, 3) as {
        slug: string;
        course: CourseSummary;
        lectureIndex: number;
        percent: number;
      }[]
    : [];

  const hasProgress = continueWatching.length > 0;

  return (
    <div className="animate-page-enter pb-24 md:pb-8">
      <SEO />

      {/* ─── Compact header ─── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              {hasProgress ? "Welcome back" : "Explore"}
              <span className="hidden sm:inline">
                {" "}
                to{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  PUCITx
                </span>
              </span>
            </h1>
            <p className="text-sm text-white/45 mt-1">
              {hasProgress
                ? "Pick up where you left off"
                : "Free CS courses from PUCIT instructors"}
            </p>
          </div>
          <Link
            to="/courses"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-lg no-underline transition-all duration-200 hover:bg-primary/20 active:scale-95"
          >
            All Courses →
          </Link>
        </div>

        {/* ─── Continue Watching ─── */}
        {hasProgress && (
          <section className="mb-10">
            <h2 className="text-base font-bold text-white/70 mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Continue Watching
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-none">
              {continueWatching.map(
                ({ slug, course, lectureIndex, percent }) => (
                  <Link
                    key={slug}
                    to={`/courses/${slug}?lecture=${lectureIndex + 1}`}
                    className="group flex items-center gap-3.5 bg-white/[0.05] border border-white/[0.08] rounded-xl p-3.5 pr-5 no-underline transition-all duration-200 hover:bg-white/[0.08] hover:border-primary/25 active:scale-[0.98] snap-start shrink-0 w-[280px] md:w-auto md:flex-1"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/40 to-primary-light/20 flex items-center justify-center text-xl shrink-0">
                      ▶️
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white truncate">
                        {course.title}
                      </h3>
                      <p className="text-xs text-white/40 mt-0.5">
                        Lecture {lectureIndex + 1} · {percent}% done
                      </p>
                      <div className="mt-1.5 h-1 bg-white/[0.08] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </section>
        )}

        {/* ─── Quick Stats (inline, compact) ─── */}
        <div className="flex items-center gap-5 mb-10 overflow-x-auto pb-1 scrollbar-none">
          {[
            { num: "3+", label: "Courses", icon: "📚" },
            { num: "95+", label: "Lectures", icon: "🎬" },
            { num: "3", label: "Instructors", icon: "👨‍🏫" },
            { num: "∞", label: "Free Access", icon: "🔓" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3.5 py-2.5 shrink-0"
            >
              <span className="text-base">{s.icon}</span>
              <div>
                <span className="block text-sm font-bold text-white leading-tight">
                  {s.num}
                </span>
                <span className="text-[0.6rem] text-white/35 font-medium uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Courses grid ─── */}
        <section className="mb-10">
          <h2 className="text-base font-bold text-white/70 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-primary-light rounded-full" />
            {hasProgress ? "All Courses" : "Featured Courses"}
          </h2>
          {loading ? (
            <CardGridSkeleton count={3} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          )}
        </section>

        {/* ─── Feature highlights (compact chips) ─── */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-white/70 mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full" />
            Why PUCITx?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: "🎥",
                title: "Embedded Videos",
                desc: "Watch right inside the app",
              },
              {
                icon: "📖",
                title: "Structured",
                desc: "Step-by-step lectures",
              },
              {
                icon: "💡",
                title: "Expert Faculty",
                desc: "From PUCIT instructors",
              },
              {
                icon: "🌍",
                title: "Open & Free",
                desc: "No sign-ups needed",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 transition-all duration-200 hover:border-primary/25"
              >
                <span className="text-xl">{card.icon}</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-0.5">
                  {card.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
