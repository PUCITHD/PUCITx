import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: "🏠", exact: true },
  { to: "/courses", label: "Courses", icon: "📚", exact: false },
  { to: "/about", label: "About", icon: "ℹ️", exact: true },
  { to: "/contribute", label: "Contribute", icon: "🤝", exact: true },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <>
      {/* ─── Top bar ─── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(15,15,26,0.95)] backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-14">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-extrabold text-white no-underline"
          >
            <span className="text-xl">🎓</span>
            <span>
              PUCIT<span className="text-primary">x</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(l.to, l.exact)
                    ? "text-primary bg-primary/10"
                    : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() =>
                window.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true })
                )
              }
              className="ml-2 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-white/30 bg-white/[0.04] border border-white/[0.08] cursor-pointer transition-all duration-200 hover:bg-white/[0.08] hover:text-white/50 hover:border-white/[0.12]"
            >
              <span className="text-xs">🔍</span>
              <span className="hidden lg:inline text-xs">Search</span>
              <kbd className="text-[0.6rem] font-mono px-1.5 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded text-white/25">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Mobile search button */}
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true })
              )
            }
            className="md:hidden w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 text-sm cursor-pointer transition-colors hover:bg-white/[0.1]"
            aria-label="Search"
          >
            🔍
          </button>
        </div>
      </nav>

      {/* ─── Mobile bottom tab bar ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[rgba(10,10,20,0.97)] backdrop-blur-xl border-t border-white/[0.06] pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-stretch">
          {NAV_LINKS.map((l) => {
            const active = isActive(l.to, l.exact);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex-1 flex flex-col items-center gap-0.5 py-2 no-underline transition-colors duration-200 ${
                  active ? "text-primary" : "text-white/40"
                }`}
              >
                <span className={`text-lg transition-transform duration-200 ${active ? "scale-110" : ""}`}>
                  {l.icon}
                </span>
                <span className="text-[0.6rem] font-semibold">{l.label}</span>
                {active && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
