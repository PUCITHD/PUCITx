export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-20">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-white text-center mb-12">
        About PUCITx
      </h1>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">🎓 Our Mission</h2>
        <p className="text-white/60 leading-relaxed">
          PUCITx is a free, open online learning platform that brings
          high-quality computer science education from the Punjab University
          College of Information Technology (PUCIT) to anyone, anywhere. We
          believe knowledge should be accessible to all.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">📚 What We Offer</h2>
        <p className="text-white/60 leading-relaxed">
          Our platform hosts complete lecture series on Computer Vision, Git
          &amp; Version Control, Linux Operating Systems, and more. Each
          course features structured video lectures from experienced PUCIT
          faculty members that you can watch directly on the platform.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">👨‍🏫 Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          {[
            { initials: "KM", name: "Kashif Murtaza", subject: "Computer Vision & Digital Image Processing" },
            { initials: "BS", name: "Bilal Shahzad", subject: "Git & Version Control Management" },
            { initials: "AB", name: "Arif Butt", subject: "Linux Operating Systems" },
          ].map((inst) => (
            <div
              key={inst.initials}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 text-center transition-colors duration-250 hover:border-primary/30"
            >
              <div className="w-15 h-15 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4 font-extrabold text-lg text-white">
                {inst.initials}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{inst.name}</h3>
              <p className="text-xs text-white/45 leading-relaxed">{inst.subject}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">🔓 Open Source</h2>
        <p className="text-white/60 leading-relaxed">
          PUCITx is an open-source project. Course data is publicly available
          and the platform code is hosted on{" "}
          <a
            href="https://github.com/PUCITHD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:underline"
          >
            GitHub
          </a>
          . Contributions are welcome!
        </p>
      </section>
    </div>
  );
}
