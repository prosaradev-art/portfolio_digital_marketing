"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  Palette,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies, type CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

type TabKey = "design" | "colors" | "execution";

const tabMeta: Record<TabKey, { icon: typeof Lightbulb; label: string; emoji: string }> = {
  design: { icon: Lightbulb, label: "Design Rationale", emoji: "💡" },
  colors: { icon: Palette, label: "Color Psychology", emoji: "🛡️" },
  execution: { icon: Rocket, label: "Marketing Strategy", emoji: "📈" },
};

const tagStyles: Record<string, string> = {
  "Concept Project": "border-grape-light/50 bg-grape-light/15 text-grape-soft",
  "Sample Strategy": "border-emerald-400/50 bg-emerald-400/15 text-emerald-300",
  "Personal Brand": "border-amber-400/50 bg-amber-400/15 text-amber-300",
};

function ProjectBlock({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabKey>("design");

  const activeTab = tabMeta[tab];
  const ActiveIcon = activeTab.icon;

  return (
    <Reveal y={40}>
      <article className="glass-card glow-border overflow-hidden rounded-3xl">
        {/* Header visual */}
        <div className={`relative overflow-hidden bg-gradient-to-br ${study.gradient} p-8 md:p-10`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_10%,white_0,transparent_45%)]" />
          <div className="orb -right-16 -top-16 h-56 w-56 bg-white/10" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-md ring-1 ring-white/30 shadow-lg">
                {study.emoji}
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/75">
                  {study.industry}
                </p>
                <h2 className="max-w-xl font-heading text-xl md:text-2xl font-extrabold text-white">
                  {study.brand}
                </h2>
              </div>
            </div>
            {/* Visual tags */}
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/30"
                >
                  {tag} ✨
                </span>
              ))}
            </div>
          </div>

          <p className="relative mt-6 max-w-3xl font-heading text-lg md:text-xl font-bold text-white/95">
            📌 {study.headline}
          </p>

          {/* Deliverables */}
          <div className="relative mt-6 flex flex-wrap gap-4">
            {study.results.map((r) => (
              <div key={r.label} className="rounded-2xl bg-navy-deep/50 px-5 py-3 backdrop-blur-md ring-1 ring-white/15">
                <p className="font-heading text-2xl font-extrabold text-white">{r.value}</p>
                <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* What's inside */}
          <h3 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
            <TrendingUp className="h-4 w-4 text-grape-light" /> What&apos;s inside this project
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {study.approach.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-mist">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[11px] font-bold text-white shadow-glow-sm">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-pearl">The scenario:</span> {study.challenge}
          </p>

          {/* Expandable strategic breakdown */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left transition-all duration-300 hover:border-grape-light/50"
          >
            <span className="font-heading text-sm font-bold text-pearl">
              🧩 View the full strategic breakdown
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-grape-light transition-transform duration-300",
                open && "rotate-180"
              )}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-2xl border border-white/10 bg-navy-deep/40 p-6">
                  {/* Tabs */}
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(tabMeta) as TabKey[]).map((key) => {
                      const meta = tabMeta[key];
                      const Icon = meta.icon;
                      const active = tab === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setTab(key)}
                          className={cn(
                            "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-all duration-200",
                            active
                              ? "border-grape-light bg-gradient-brand text-white shadow-glow-sm"
                              : "border-white/10 bg-white/5 text-mist hover:border-grape-light/50 hover:text-white"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wide">
                            {meta.label.split(" ")[0]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5">
                    <h4 className="flex items-center gap-2 font-heading text-base font-bold text-white">
                      <ActiveIcon className="h-4 w-4 text-grape-light" />
                      {activeTab.label} {activeTab.emoji}
                    </h4>
                    <ul className="mt-3 space-y-3">
                      {study.strategy[tab].points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grape-light" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="orb top-10 -left-24 h-80 w-80 bg-grape/50 animate-blob" />
        <div className="orb top-32 right-0 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:2s]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow">💼 Portfolio · Concept Projects</span>
            <h1 className="heading-xl mt-6 text-white">
              Skills in <span className="text-gradient">action</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro explainer */}
      <section className="section-pad pt-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="glass-card glow-border relative overflow-hidden rounded-[2rem] p-8 md:p-12 text-center">
              <div className="orb -top-16 -left-16 h-56 w-56 bg-grape/50" />
              <div className="relative">
                <span className="text-4xl">💡</span>
                <blockquote className="mx-auto mt-5 max-w-2xl font-heading text-xl md:text-3xl font-bold leading-snug text-white">
                  &ldquo;No clients yet? No problem.{""}
                  <span className="text-gradient"> Skills matter more than client lists.</span>&rdquo;
                </blockquote>
                <p className="mx-auto mt-5 max-w-xl text-muted md:text-base leading-relaxed">
                  I&apos;m at the start of my marketing journey — so instead of borrowed numbers,
                  here are <span className="text-pearl font-medium">concept campaigns, sample
                  strategies and sample creative designs</span> I built to practice real-world
                  marketing. Same research, same planning, same execution rigor I&apos;ll bring to
                  your brand. 🎯
                </p>
                {/* Visual tag legend */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                  {["Concept Project", "Sample Strategy", "Personal Brand"].map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded-full border px-4 py-1.5 text-xs font-semibold",
                        tagStyles[t] ?? "border-white/10 bg-white/5 text-mist"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad pt-8">
        <div className="mx-auto max-w-6xl space-y-14 px-5 sm:px-8">
          <SectionHeading
            eyebrow="Concept projects & sample work"
            title="Real strategies. Honest showcase."
            highlight="Real skills."
            description="Every project below is self-initiated practice work — open each one to see the deliverables and the full strategic thinking behind it."
          />
          {caseStudies.map((study, i) => (
            <ProjectBlock key={study.brand} study={study} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
