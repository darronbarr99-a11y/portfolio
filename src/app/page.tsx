import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start justify-center gap-8 px-6 py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
        Welcome
      </p>
      <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
        Hi, I&apos;m{" "}
        <span className="text-gray-300">Your Name</span>
      </h1>
      <p className="max-w-xl text-xl text-gray-400 leading-relaxed">
        Full-Stack Developer &amp; Designer. I build clean, fast, and accessible
        web experiences.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-gray-200"
        >
          View my work
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
