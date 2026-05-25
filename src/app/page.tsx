import ResumeModal from "@/components/ResumeModal";

const skills = [
  "Strategic Marketing", "Go-to-Market Execution", "Content Marketing",
  "SEO", "Google Analytics", "Google Ads", "HubSpot", "Facebook Ads",
  "Partner Enablement", "Marketing Technology", "Project Management", "UX",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="mx-auto flex max-w-5xl flex-col items-start justify-center gap-8 px-6 py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Welcome
        </p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-gray-300">Darron Barr</span>
        </h1>
        <p className="max-w-xl text-xl text-gray-400 leading-relaxed">
          I&apos;m a marketing leader who believes that the best results come from
          aligning strategy, execution, and people.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0a1628] transition-colors hover:bg-gray-200"
          >
            About me
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-800 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="mb-12 text-3xl font-bold text-white">About Me</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-gray-400 leading-relaxed">
                Strategic and hands-on marketing leader with 20+ years of
                experience driving growth by connecting marketing, partners, and
                customers. Currently Marketing &amp; Client Engagement Manager at
                Nokia in Kanata, ON, leading global marketing across IP, optical,
                and fixed networks.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Known for a practical approach to solving complex business
                challenges — from growing training and certification businesses by
                25% globally, to co-founding and scaling CTE Solutions to
                successful exit. Former VP of Marketing at CTC TrainCanada and
                Digital Marketing Director at Dominknow.
              </p>
              <div className="pt-2">
                <ResumeModal />
              </div>
            </div>

            {/* Skills */}
            <div id="skills" className="scroll-mt-20">
              <h3 className="mb-6 text-lg font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-gray-700 px-4 py-1.5 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-gray-800 scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="mb-4 text-3xl font-bold text-white">Get In Touch</h2>
          <p className="mb-12 max-w-lg text-gray-400 leading-relaxed">
            I&apos;m always open to connecting — whether you have an opportunity,
            a question, or just want to say hi.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#0d1f3c] p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:darronbarr99@gmail.com"
                  className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
                >
                  darronbarr99@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <a
                href="tel:6136086130"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                613-608-6130
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/darronbarr/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/darronbarr99-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
