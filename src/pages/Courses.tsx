import { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import type { CourseSummary } from "../types";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";

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
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">All Courses</h1>
        <p className="text-white/50 mb-8">Explore our complete catalog of free courses</p>
        <input
          type="text"
          placeholder="🔍  Search courses, instructors…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-white text-base outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-primary"
        />
      </div>

      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-white/50 text-lg">
          <p>No courses found for "{search}"</p>
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
