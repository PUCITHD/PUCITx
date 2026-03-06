import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import type { CourseSummary } from "../types";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

export default function Home() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data.courses))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-5 text-white">
            Learn Without Limits with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              PUCITx
            </span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            Free, high-quality courses from PUCIT instructors — Computer Vision,
            Linux, Git &amp; more. Watch lectures, learn at your own pace.
          </p>
          <Link
            to="/courses"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(108,92,231,0.4)]"
          >
            Browse Courses →
          </Link>
        </div>
        <div className="shrink-0 flex flex-col gap-4 items-center lg:items-start">
          <div className="animate-float bg-white/[0.05] border border-white/[0.08] rounded-xl px-6 py-4 font-semibold text-white/85 text-lg backdrop-blur-lg">
            📹 48 Video Lectures
          </div>
          <div className="animate-float-delay-1 bg-white/[0.05] border border-white/[0.08] rounded-xl px-6 py-4 font-semibold text-white/85 text-lg backdrop-blur-lg lg:ml-8">
            🎓 Expert Instructors
          </div>
          <div className="animate-float-delay-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-6 py-4 font-semibold text-white/85 text-lg backdrop-blur-lg">
            🆓 100% Free
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="flex justify-center gap-8 lg:gap-12 px-6 py-12 max-w-3xl mx-auto border-t border-b border-white/[0.06]">
        {[
          { num: "3+", label: "Courses" },
          { num: "95+", label: "Video Lectures" },
          { num: "3", label: "Expert Instructors" },
          { num: "∞", label: "Lifetime Access" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span className="block text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {s.num}
            </span>
            <span className="text-xs lg:text-sm text-white/45 font-medium">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2">
          Featured Courses
        </h2>
        <p className="text-center text-white/50 mb-10">
          Start learning today with our curated collection
        </p>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        )}
      </section>

      {/* Why PUCITx */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
          Why PUCITx?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎥", title: "Embedded Video Lectures", desc: "Watch YouTube lectures right inside the platform — no distractions, no leaving the page." },
            { icon: "📖", title: "Structured Learning", desc: "Courses are organized lecture-by-lecture so you can follow along step by step." },
            { icon: "💡", title: "Expert Instruction", desc: "Learn from experienced PUCIT faculty who are experts in their fields." },
            { icon: "🌍", title: "Open & Free", desc: "All content is publicly available. No sign-ups, no paywalls — just learning." },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center transition-colors duration-250 hover:border-primary/30"
            >
              <span className="text-4xl block mb-4">{card.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
