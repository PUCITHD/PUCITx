import { Link } from "react-router-dom";

export default function Contribute() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-4">
        Contribute to PUCITx
      </h1>
      <p className="text-center text-white/50 max-w-2xl mx-auto mb-14 leading-relaxed">
        PUCITx is an open-source project and we welcome contributions from
        everyone — whether you're a student, educator, or developer.
      </p>

      {/* Ways to Contribute */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Ways You Can Help
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "📹",
              title: "Add Course Content",
              desc: "Record lectures, create course outlines, or help organize existing educational material into our standard format.",
            },
            {
              icon: "💻",
              title: "Improve the Platform",
              desc: "Fix bugs, add features, improve accessibility, or optimize performance of the PUCITx web app.",
            },
            {
              icon: "📝",
              title: "Write Documentation",
              desc: "Help improve README files, write setup guides, or create tutorials for new contributors.",
            },
            {
              icon: "🐛",
              title: "Report Issues",
              desc: "Found a bug or broken link? Open an issue on GitHub and help us track down problems.",
            },
            {
              icon: "🎨",
              title: "Design & UX",
              desc: "Suggest UI improvements, create graphics, or help make the platform more user-friendly.",
            },
            {
              icon: "🌐",
              title: "Spread the Word",
              desc: "Share PUCITx with classmates, on social media, or within your community to help more people learn.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 transition-colors duration-250 hover:border-primary/30"
            >
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Repositories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Our Repositories
        </h2>
        <p className="text-center text-white/50 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
          PUCITx is split into two repositories — one for the web platform and
          one for the course data. Pick the one that matches your contribution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href="https://github.com/PUCITHD/PUCITx"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 no-underline transition-all duration-250 hover:border-primary/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
                PUCITHD/PUCITx
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The web platform — built with React, TypeScript &amp; Tailwind CSS.
              Contribute UI features, bug fixes, and platform improvements here.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light bg-primary/15 px-3 py-1.5 rounded-full">
              🌐 Web App
            </span>
          </a>
          <a
            href="https://github.com/PUCITHD/pucitx-data"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 no-underline transition-all duration-250 hover:border-primary/30 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📦</span>
              <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors">
                PUCITHD/pucitx-data
              </h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The course data — JSON outlines, thumbnails &amp; metadata for every
              course. Add new courses or update existing content here.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-light bg-primary/15 px-3 py-1.5 rounded-full">
              📚 Course Data
            </span>
          </a>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Getting Started
        </h2>
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
          <ol className="space-y-6 list-none m-0 p-0 counter-reset-none">
            {[
              {
                step: "Fork the Repository",
                detail: (
                  <span>
                    Fork the repo you want to contribute to:{" "}
                    <a href="https://github.com/PUCITHD/PUCITx" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">PUCITx</a> for the web app or{" "}
                    <a href="https://github.com/PUCITHD/pucitx-data" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">pucitx-data</a> for course content.
                  </span>
                ),
              },
              {
                step: "Clone & Install",
                detail: (
                  <code className="block bg-white/[0.06] rounded-lg px-4 py-3 text-sm text-primary-light font-mono mt-2 overflow-x-auto">
                    git clone https://github.com/PUCITHD/PUCITx.git && cd
                    PUCITx && npm install
                  </code>
                ),
              },
              {
                step: "Create a Branch",
                detail: (
                  <code className="block bg-white/[0.06] rounded-lg px-4 py-3 text-sm text-primary-light font-mono mt-2">
                    git checkout -b feature/your-feature-name
                  </code>
                ),
              },
              {
                step: "Make Your Changes",
                detail:
                  "Edit code, add content, fix bugs — whatever you'd like to contribute.",
              },
              {
                step: "Submit a Pull Request",
                detail:
                  "Push your branch and open a PR against the master branch. Describe what you changed and why.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.step}
                  </h3>
                  <div className="text-white/50 text-sm leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Course Data Format */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Adding a New Course
        </h2>
        <p className="text-center text-white/50 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
          To add a new course, fork the{" "}
          <a href="https://github.com/PUCITHD/pucitx-data" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">pucitx-data</a>{" "}
          repository and create a folder under the courses directory
          with the following files and JSON structure:
        </p>
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] text-xs text-white/40 font-mono">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2">outline.json</span>
          </div>
          <pre className="px-5 py-4 text-sm text-primary-light font-mono overflow-x-auto leading-relaxed m-0">
{`{
  "title": "Your Course Title",
  "description": "A short course description.",
  "lecturer": "Instructor Name",
  "lectures": [
    {
      "title": "Lecture Title",
      "runtime": "12:34",
      "description": "Optional description",
      "videoID": "YouTubeVideoID"
    }
  ]
}`}
          </pre>
        </div>
        <p className="text-white/40 text-xs mt-3 text-center">
          Also include a <code className="text-primary-light">social_photo.png</code> image in the course folder for the card thumbnail.
        </p>
      </section>

      {/* Guidelines */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Contribution Guidelines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: "✅",
              title: "Do",
              items: [
                "Write clear commit messages",
                "Test your changes locally",
                "Follow the existing code style",
                "Be respectful in discussions",
                "Keep PRs focused and small",
              ],
            },
            {
              icon: "❌",
              title: "Don't",
              items: [
                "Submit copyrighted content",
                "Make large changes without discussion",
                "Include unrelated changes in a PR",
                "Push directly to master",
                "Ignore failing lint/build checks",
              ],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {col.icon} {col.title}
              </h3>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/55 leading-relaxed"
                  >
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-br from-primary/10 to-primary-light/5 border border-primary/20 rounded-2xl py-12 px-8">
        <h2 className="text-2xl font-bold text-white mb-3">
          Ready to Contribute?
        </h2>
        <p className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
          Every contribution matters — from fixing a typo to adding an entire
          course. Join us in making education accessible to everyone.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/PUCITHD/PUCITx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(108,92,231,0.4)]"
          >
            💻 Web App Repo
          </a>
          <a
            href="https://github.com/PUCITHD/pucitx-data"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(108,92,231,0.4)]"
          >
            📦 Course Data Repo
          </a>
          <a
            href="https://github.com/PUCITHD/PUCITx/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/[0.04] text-white/80 font-bold rounded-xl no-underline transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25"
          >
            🐛 Open an Issue
          </a>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/[0.04] text-white/80 font-bold rounded-xl no-underline transition-all duration-200 hover:bg-white/[0.08] hover:border-white/25"
          >
            📚 Browse Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
