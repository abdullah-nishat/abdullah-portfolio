"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-300">
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/40" />
        </label>
        <label className="text-sm text-slate-300">
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/40" />
        </label>
      </div>
      <label className="mt-4 block text-sm text-slate-300">
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400/40" />
      </label>
      <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100">
        Prepare Email <Send size={16} />
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">This opens your default email app with the message pre-filled. No backend or form service is required.</p>
    </form>
  );
}
