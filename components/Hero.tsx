"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const p = portfolio.personal;

  return (
    <section id="top" className="hero-noise relative min-h-screen overflow-hidden pt-24">
      <div className="absolute left-[8%] top-28 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute right-[10%] top-48 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            {p.status}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">{p.secondaryRole}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {p.name}
          </h1>
          <h2 className="text-gradient mt-4 text-2xl font-semibold sm:text-3xl">{p.role}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{p.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
              View Projects <ArrowRight size={17} />
            </a>
            <a href={p.cvPath} download className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Download size={17} /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-sky-400/20 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-400/20">
              <Mail size={17} /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-400">
            <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="GitHub"><Github size={21} /></a>
            <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="LinkedIn"><Linkedin size={21} /></a>
            <a href={`mailto:${p.email}`} className="transition hover:text-white" aria-label="Email"><Mail size={21} /></a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {portfolio.highlights.map((item) => (
              <div key={item.label} className="glass rounded-2xl px-4 py-4">
                <div className="text-xl font-semibold text-white">{item.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 via-cyan-300/10 to-transparent blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-slate-900">
              <Image src={p.profileImage} alt={p.name} fill priority className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 pt-20">
                <p className="text-sm font-medium text-white">Full-Stack Development</p>
                <p className="mt-1 text-xs text-slate-300">Next.js · NestJS · React · PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="floaty glass absolute -bottom-5 -left-7 hidden rounded-2xl px-4 py-3 text-xs text-slate-200 sm:block">
            Vercel · Render · Neon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
