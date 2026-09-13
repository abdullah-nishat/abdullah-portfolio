"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Publication", "#publication"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "border-b border-white/10 bg-slate-950/75 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.16em] text-white">
          {portfolio.personal.shortName}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
          <a
            href={portfolio.personal.cvPath}
            download
            className="rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-400/20"
          >
            Download CV
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <div className="section-shell flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm text-slate-200">
                {label}
              </a>
            ))}
            <a href={portfolio.personal.cvPath} download className="text-sm font-medium text-sky-300">
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
