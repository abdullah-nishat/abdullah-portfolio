import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-white/[0.015] py-24">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow="Skills" title="Technology stack" copy="The tools and technologies I have used through coursework, personal projects and deployed applications." />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(portfolio.skills).map(([group, items], index) => (
            <Reveal key={group} delay={index * 0.04}>
              <div className="glass h-full rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-white">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
