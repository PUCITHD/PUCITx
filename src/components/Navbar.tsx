import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path: string, exact = false) => {
    const active = exact
      ? location.pathname === path
      : location.pathname.startsWith(path);
    return `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? "text-primary bg-primary/10"
        : "text-white/70 hover:text-white hover:bg-white/[0.06]"
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(15,15,26,0.92)] backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-white no-underline">
          <span className="text-2xl">🎓</span>
          <span>PUCIT<span className="text-primary">x</span></span>
        </Link>
        <div className="flex gap-1">
          <Link to="/" className={linkClass("/", true)}>Home</Link>
          <Link to="/courses" className={linkClass("/courses")}>Courses</Link>
          <Link to="/about" className={linkClass("/about", true)}>About</Link>
          <Link to="/contribute" className={linkClass("/contribute", true)}>Contribute</Link>
        </div>
      </div>
    </nav>
  );
}
