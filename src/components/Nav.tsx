"use client";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a1628]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
          Darron Barr
        </a>
        <ul className="flex gap-6 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
