"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalLink, Github, KeyRound } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Backend">("All");
  const visible = useMemo(() => portfolio.projects.filter((p) => filter === "All" || p.category === filter), [filter]);

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow="Projects" title="Selected development work" copy="Live projects and backend work that represent my current full-stack development experience." />
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-2">
          {(["All", "Full Stack", "Backend"] as const).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-xl px-4 py-2 text-sm transition ${filter === item ? "bg-white text-slate-950" : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article className="glass group h-full overflow-hidden rounded-3xl">
                <div className="relative aspect-[16/8] overflow-hidden border-b border-white/10 bg-slate-900">
                  <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300">{project.subtitle}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-400">{project.category}</span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-lg bg-sky-400/8 px-2.5 py-1.5 text-[11px] text-sky-100 ring-1 ring-inset ring-sky-300/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.credentials && (
                    <details className="mt-5 rounded-xl border border-amber-300/15 bg-amber-300/[0.04] p-4 text-sm text-slate-300">
                      <summary className="flex cursor-pointer list-none items-center gap-2 font-medium text-amber-100">
                        <KeyRound size={16} /> Demo admin credentials
                      </summary>
                      <div className="mt-3 space-y-1 text-xs text-slate-400">
                        <p>Email: <span className="text-slate-200">{project.credentials.email}</span></p>
                        <p>Password: <span className="text-slate-200">{project.credentials.password}</span></p>
                      </div>
                    </details>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
                        Live Project <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
