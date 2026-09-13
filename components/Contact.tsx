import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const p = portfolio.personal;
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <Reveal>
          <SectionTitle eyebrow="Contact" title="Let’s discuss an opportunity" copy="For internships, junior developer roles, freelance work or project discussions, you can contact me directly." />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7">
              <div className="space-y-5 text-sm">
                <a href={`mailto:${p.email}`} className="flex items-center gap-3 text-slate-300 transition hover:text-white"><Mail size={18} className="text-sky-300" /> {p.email}</a>
                <a href={`tel:${p.phone}`} className="flex items-center gap-3 text-slate-300 transition hover:text-white"><Phone size={18} className="text-sky-300" /> {p.phone}</a>
                <div className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-sky-300" /> {p.location}</div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"><Github size={19} /></a>
                <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white"><Linkedin size={19} /></a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
