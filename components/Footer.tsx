import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-shell flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.personal.shortName}. All rights reserved.</p>
        <p>Built with Next.js, React, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
