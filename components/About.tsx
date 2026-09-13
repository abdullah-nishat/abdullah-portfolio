import Image from "next/image";
import { Code2, Database, Rocket, ShieldCheck } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const strengths = [
  { icon: Code2, title: "Frontend to backend", text: "Comfortable working across interface, API, authentication and application logic." },
  { icon: Database, title: "Data & persistence", text: "Hands-on with PostgreSQL, Neon, MySQL and Microsoft SQL Server." },
  { icon: ShieldCheck, title: "Auth & integrations", text: "Implemented Google OAuth, OTP verification, sessions and real-time notifications." },
  { icon: Rocket, title: "Deployment", text: "Experience deploying frontend, backend and database services with Vercel, Render and Neon." },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow="About" title="Building practical software from idea to deployment" copy="A concise overview of my current profile and the kind of work I enjoy doing." />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="glass overflow-hidden rounded-3xl">
              <div className="relative aspect-[3/1] min-h-[220px]">
                <Image src={portfolio.personal.coverImage} alt="Abdullah Nishat portfolio banner" fill className="object-cover" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-3xl p-7 sm:p-8">
              <p className="text-base leading-8 text-slate-300">{portfolio.personal.intro}</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {strengths.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Icon size={20} className="text-sky-300" />
                    <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
