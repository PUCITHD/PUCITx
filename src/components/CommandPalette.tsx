import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCourses } from "../api";
import type { CourseSummary } from "../types";

const STATIC_ITEMS = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "All Courses", path: "/courses", icon: "📚" },
  { label: "About PUCITx", path: "/about", icon: "ℹ️" },
  { label: "Contribute", path: "/contribute", icon: "🤝" },
];

interface PaletteItem {
  label: string;
  sub?: string;
  path: string;
  icon: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // fetch courses once opened
  useEffect(() => {
    if (open && courses.length === 0) {
      fetchCourses()
        .then((d) => setCourses(d.courses))
        .catch(() => {});
    }
    if (open) {
      setQuery("");
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, courses.length]);

  // keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const allItems: PaletteItem[] = useMemo(() => {
    const courseItems: PaletteItem[] = courses.map((c) => ({
      label: c.title,
      sub: `${c.lecturer} · ${c.lectures} lectures`,
      path: `/courses/${c.slug}`,
      icon: "🎓",
    }));
    return [...STATIC_ITEMS, ...courseItems];
  }, [courses]);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (it) =>
        it.label.toLowerCase().includes(q) ||
        it.sub?.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  // clamp selected
  useEffect(() => {
    setSelected(0);
  }, [query]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  // arrow keys + enter
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      go(filtered[selected].path);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* palette */}
      <div className="relative w-full max-w-lg mx-4 bg-[rgba(20,20,35,0.98)] border border-white/[0.1] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden animate-palette-in">
        {/* input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
          <span className="text-white/30 text-lg">🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search courses, pages…"
            className="flex-1 bg-transparent text-white text-base outline-none placeholder:text-white/30"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[0.65rem] text-white/25 bg-white/[0.06] border border-white/[0.08] rounded-md font-mono">
            ESC
          </kbd>
        </div>

        {/* results */}
        <ul className="list-none m-0 p-2 max-h-[340px] overflow-y-auto">
          {filtered.length === 0 && (
            <li className="px-4 py-8 text-center text-white/30 text-sm">
              No results for "{query}"
            </li>
          )}
          {filtered.map((item, i) => (
            <li
              key={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-100 ${
                i === selected ? "bg-primary/15 text-white" : "text-white/70 hover:bg-white/[0.05]"
              }`}
              onClick={() => go(item.path)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="block text-sm font-medium truncate">{item.label}</span>
                {item.sub && (
                  <span className="block text-xs text-white/35 truncate">{item.sub}</span>
                )}
              </div>
              {i === selected && (
                <span className="text-xs text-white/25 font-mono">↵</span>
              )}
            </li>
          ))}
        </ul>

        {/* footer hint */}
        <div className="flex items-center justify-center gap-4 px-5 py-2.5 border-t border-white/[0.06] text-[0.65rem] text-white/20">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
