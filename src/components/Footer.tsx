import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/[0.06] pt-12 pb-8 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xl font-extrabold text-white mb-2">
          <span>🎓</span>
          <span>PUCIT<span className="text-primary">x</span></span>
        </div>
        <p className="text-white/50 text-sm mb-4">
          Free &amp; open learning from PUCIT — Punjab University College of
          Information Technology.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <a
            href="https://github.com/PUCITHD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            GitHub
          </a>
          <span className="text-white/20">·</span>
          <a
            href="http://pucit.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            PUCIT Official
          </a>
          <span className="text-white/20">·</span>
          <Link
            to="/contribute"
            className="text-primary font-medium hover:underline"
          >
            Contribute
          </Link>
        </div>
        <p className="mt-6 text-white/30 text-xs">
          © {new Date().getFullYear()} PUCITx. All course content belongs to
          respective instructors.
        </p>
      </div>
    </footer>
  );
}
