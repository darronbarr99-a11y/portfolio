export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold text-white">Get In Touch</h1>
      <p className="mb-12 max-w-lg text-gray-400 leading-relaxed">
        I&apos;m currently open to new opportunities. Whether you have a project
        in mind, a question, or just want to say hi — my inbox is always open.
      </p>

      <div className="flex flex-col gap-6">
        {/* Email */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
            <a
              href="mailto:you@example.com"
              className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
            >
              you@example.com
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
}
