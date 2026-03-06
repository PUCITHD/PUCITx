import type { Lecture } from "../types";

interface Props {
  lectures: Lecture[];
  activeIndex: number;
  onSelect: (index: number) => void;
  watchedSet?: Set<number>;
}

export default function LectureList({ lectures, activeIndex, onSelect, watchedSet }: Props) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
      <h3 className="flex items-center justify-between px-5 py-4 m-0 text-base font-bold text-white border-b border-white/[0.06]">
        Course Content
        <span className="text-xs font-medium text-white/40">
          {watchedSet ? `${watchedSet.size}/${lectures.length}` : `${lectures.length} lectures`}
        </span>
      </h3>
      <ul className="list-none m-0 p-0 max-h-[500px] overflow-y-auto">
        {lectures.map((lec, i) => {
          const watched = watchedSet?.has(i) && i !== activeIndex;
          return (
            <li
              key={i}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors duration-150 border-b border-white/[0.03] hover:bg-white/[0.05] ${
                i === activeIndex ? "bg-primary/[0.12] border-l-[3px] border-l-primary" : ""
              }`}
              onClick={() => onSelect(i)}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                  i === activeIndex
                    ? "bg-primary text-white"
                    : watched
                    ? "bg-green-500/20 text-green-400"
                    : "bg-white/[0.06] text-white/50"
                }`}
              >
                {watched ? "✓" : i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-medium text-white/85 truncate">
                  {lec.title}
                </span>
                <span className="text-xs text-white/35">⏱ {lec.runtime}</span>
              </div>
              {i === activeIndex && (
                <span className="text-primary text-[0.7rem]">▶</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
