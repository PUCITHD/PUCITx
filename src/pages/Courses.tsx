import { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import type { CourseSummary } from "../types";
import CourseCard from "../components/CourseCard";
import { CardGridSkeleton } from "../components/Skeleton";
import SEO from "../components/SEO";

export default function Courses() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data.courses))
      .finally(() => setLoading(false));
  }, []);

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.lecturer.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-page-enter max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-12 pb-24 md:pb-20">
      <SEO
        title="Courses"
        description="Browse all free courses on PUCITx — Computer Vision, Git, Linux and more from PUCIT instructors."
        path="/courses"
      />

      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">All Courses</h1>
        <p className="text-white/50 mb-8">Explore our complete catalog of free courses</p>
        <input
          type="text"
          placeholder="🔍  Search courses, instructors…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-base outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-primary focus:ring-1 focus:ring-primary/30"
        />
      </div>

      {loading ? (
        <CardGridSkeleton count={6} />
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-white/50 text-lg">
          <p className="text-5xl mb-4">🔍</p>
          <p>No courses found for "{search}"</p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 text-primary-light text-sm font-semibold hover:underline cursor-pointer bg-transparent border-none"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      )}
    </div>
  );
}
