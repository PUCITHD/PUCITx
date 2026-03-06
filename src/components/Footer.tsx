import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="hidden md:block border-t border-white/[0.06] py-5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-white/30">
        <div className="flex items-center gap-1.5 font-semibold text-white/50">
          <span>🎓</span>
          <span>
            PUCIT<span className="text-primary">x</span>
          </span>
          <span className="font-normal text-white/25 ml-1">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/PUCITHD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white/60 transition-colors no-underline"
          >
            GitHub
          </a>
          <span className="text-white/15">·</span>
          <a
            href="http://pucit.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white/60 transition-colors no-underline"
          >
            PUCIT
          </a>
          <span className="text-white/15">·</span>
          <Link
            to="/contribute"
            className="text-white/35 hover:text-white/60 transition-colors no-underline"
          >
            Contribute
          </Link>
        </div>
      </div>
    </footer>
  );
}
