import { Link } from "react-router-dom";
import type { CourseSummary } from "../types";
import { getCourseImageUrl } from "../api";
import { getCompletionPercent } from "../hooks/useProgress";

interface Props {
  course: CourseSummary;
}

export default function CourseCard({ course }: Props) {
  const imageUrl = getCourseImageUrl(course.slug);
  const progress = getCompletionPercent(course.slug, course.lectures);

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden no-underline text-inherit transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-primary/30 active:scale-[0.98]"
    >
      <div className="relative h-44 bg-dark-card overflow-hidden">
        <img
          src={imageUrl}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).parentElement!.classList.add(
              "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-primary", "to-primary-light"
            );
            (e.target as HTMLImageElement).parentElement!.innerHTML =
              '<span class="text-5xl">📚</span>';
          }}
        />
        {progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-light"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[1.1rem] font-bold text-white mb-2">{course.title}</h3>
        <p className="flex-1 text-white/55 text-sm mb-4 leading-relaxed">
          {course.description}
        </p>
        <div className="flex justify-between items-center text-xs text-white/45">
          <span>👨‍🏫 {course.lecturer}</span>
          <div className="flex items-center gap-2">
            {progress > 0 && (
              <span className="text-green-400/80 font-semibold">{progress}%</span>
            )}
            <span className="bg-primary/15 text-primary-light px-2.5 py-1 rounded-full font-semibold">
              {course.lectures} lectures
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
