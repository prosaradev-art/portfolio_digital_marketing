"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  User,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { useBooking } from "@/components/BookingProvider";
import { services, socialLinks, contactEmail, contactPhoneDisplay, mailtoLink, telLink } from "@/lib/data";
import { isValidEmail } from "@/lib/utils";
import { useRouter } from "next/navigation";

const infoCards = [
  {
    icon: Mail,
    title: "Email us",
    value: contactEmail,
    sub: "Replies within 24 hours",
    href: mailtoLink,
  },
  {
    icon: Phone,
    title: "Call us",
    value: contactPhoneDisplay,
    sub: "Mon–Fri, 9am–6pm",
    href: telLink,
  },
  {
    icon: MapPin,
    title: "Where we work",
    value: "Remote · Worldwide 🌍",
    sub: "Remote-friendly · happy to work with brands anywhere 🌍",
  },
];

interface FormState {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", service: "", budget: "", message: "" };

export default function ContactPage() {
  const router = useRouter();
  const { openBooking } = useBooking();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!isValidEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.service) next.service = "Please pick a service.";
    if (!form.budget) next.budget = "Please select a budget range.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate a short network call for a delightful transition
    setTimeout(() => {
      const params = new URLSearchParams({
        type: "contact",
        name: form.name.trim(),
        email: form.email.trim(),
        service: form.service,
      });
      router.push(`/success?${params.toString()}`);
    }, 900);
  };

  const inputError = (key: keyof FormState) => errors[key];

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="orb top-10 -left-24 h-80 w-80 bg-grape/50 animate-blob" />
        <div className="orb top-32 right-0 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:2s]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow">📬 Contact</span>
            <h1 className="heading-xl mt-6 text-white">
              Let&apos;s build your <span className="text-gradient">growth story</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted md:text-lg leading-relaxed">
              Tell us where your brand is today and where you want it to be. We&apos;ll reply with
              honest advice — and a plan. No fluff, no pressure. 💜
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad pt-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <Reveal x={-30} y={0}>
            <form onSubmit={handleSubmit} noValidate className="glass-card glow-border rounded-3xl p-7 md:p-10">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                Send us a message ✉️
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fields marked * are required. We usually reply within 24 hours.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Your name *
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Ayesha Khan"
                      className="input-shell"
                    />
                  </div>
                  {inputError("name") && <p className="mt-1.5 text-xs text-red-300">⚠️ {inputError("name")}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Email address *
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      id="c-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@brand.com"
                      className="input-shell"
                    />
                  </div>
                  {inputError("email") && <p className="mt-1.5 text-xs text-red-300">⚠️ {inputError("email")}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="c-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Service needed *
                  </label>
                  <div className="relative">
                    <MessageSquareText className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <select
                      id="c-service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="input-shell !pl-12 cursor-pointer"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.emoji} {s.title}
                        </option>
                      ))}
                      <option value="Something else">🤔 Something else</option>
                    </select>
                  </div>
                  {inputError("service") && <p className="mt-1.5 text-xs text-red-300">⚠️ {inputError("service")}</p>}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="c-budget" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Monthly budget *
                  </label>
                  <div className="relative">
                    <Wallet className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <select
                      id="c-budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className="input-shell !pl-12 cursor-pointer"
                    >
                      <option value="">Select a range…</option>
                      <option value="$200 – $500">💸 $200 – $500</option>
                      <option value="$500 – $1,000">💰 $500 – $1,000</option>
                      <option value="$1,000 – $3,000">💎 $1,000 – $3,000</option>
                      <option value="$3,000+">🚀 $3,000+</option>
                    </select>
                  </div>
                  {inputError("budget") && <p className="mt-1.5 text-xs text-red-300">⚠️ {inputError("budget")}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="c-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                  Your message *
                </label>
                <div className="relative">
                  <textarea
                    id="c-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your brand, your goals, and what's been holding you back…"
                    className="input-shell !pl-4 resize-none"
                  />
                </div>
                {inputError("message") && <p className="mt-1.5 text-xs text-red-300">⚠️ {inputError("message")}</p>}
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                disabled={submitting}
                className="btn-primary mt-7 w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending your message…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Send message 🚀
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>

          {/* Side info */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="glass-card glow-border rounded-3xl p-7">
                <h3 className="font-heading text-lg font-bold text-white">Contact details 📇</h3>
                <div className="mt-5 space-y-4">
                  {infoCards.map((c) => {
                    const Wrapper = c.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={c.title}
                        {...(c.href ? { href: c.href } : {})}
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-grape-light/50 hover:shadow-glow-sm"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow-sm">
                          <c.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-mist">{c.title}</p>
                          <p className="mt-0.5 font-heading text-sm font-bold text-white">{c.value}</p>
                          <p className="mt-0.5 text-xs text-muted">{c.sub}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card glow-border rounded-3xl p-7">
                <h3 className="font-heading text-lg font-bold text-white">Find us online 🌐</h3>
                <p className="mt-1.5 text-sm text-muted">
                  Follow along for tips, case studies & behind-the-scenes.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-grape-light/50 hover:shadow-glow-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow-sm">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span className="font-heading text-sm font-bold text-pearl transition-colors group-hover:text-white">
                        {s.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-card glow-border relative overflow-hidden rounded-3xl p-7 text-center">
                <div className="orb -top-12 -right-12 h-40 w-40 bg-grape/50" />
                <span className="relative text-3xl">📅</span>
                <h3 className="relative mt-3 font-heading text-lg font-bold text-white">
                  Prefer to just talk?
                </h3>
                <p className="relative mt-2 text-sm text-muted">
                  Skip the form — grab a free 30-minute discovery call and get a custom growth plan
                  on the spot.
                </p>
                <button onClick={() => openBooking()} className="btn-primary relative mt-5 w-full">
                  <CalendarDays className="h-4 w-4" /> Book your discovery call
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-heading text-lg font-bold text-white">What happens next? ⚡</h3>
                <ol className="mt-4 space-y-4">
                  {[
                    { n: "01", t: "We read every word", d: "No templates, no canned replies." },
                    { n: "02", t: "You get honest advice", d: "Even if it's 'wait before spending'." },
                    { n: "03", t: "We craft your plan", d: "A clear roadmap, priced upfront." },
                  ].map((s) => (
                    <li key={s.n} className="flex items-start gap-4">
                      <span className="font-heading text-sm font-extrabold text-grape-soft">{s.n}</span>
                      <div>
                        <p className="text-sm font-semibold text-pearl">{s.t}</p>
                        <p className="text-xs text-muted">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
