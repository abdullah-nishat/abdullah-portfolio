import { BookOpen, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Publication() {
  const pub = portfolio.publication;
  return (
    <section id="publication" className="border-y border-white/5 bg-white/[0.015] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow="Academic" title="Publication & education" copy="My academic background alongside one machine-learning publication." />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="glass rounded-3xl p-7">
              <BookOpen className="text-sky-300" size={24} />
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-sky-300">{pub.venue} · {pub.status}</p>
              <h3 className="mt-3 text-xl font-semibold leading-8 text-white">{pub.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{pub.authors.join(", ")}.</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {portfolio.education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 0.05}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex gap-4">
                    <div className="mt-1 rounded-xl bg-sky-400/10 p-2.5 text-sky-300"><GraduationCap size={20} /></div>
                    <div>
                      <h3 className="font-semibold text-white">{item.degree}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                      <p className="mt-2 text-xs text-slate-500">{item.year} · {item.result}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
