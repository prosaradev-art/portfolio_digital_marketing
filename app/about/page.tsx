"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { audiences } from "@/lib/data";

const values = [
  {
    icon: ShieldCheck,
    title: "Strategy over vibes",
    desc: "Every post has a job. Every campaign maps to revenue, not just likes.",
    emoji: "📊",
  },
  {
    icon: Heart,
    title: "Your brand, elevated",
    desc: "We make you look like the premium option — because you are.",
    emoji: "💎",
  },
  {
    icon: Lightbulb,
    title: "Radical transparency",
    desc: "Weekly reports, real numbers, honest advice — even when it's 'don't spend on ads yet'.",
    emoji: "🔍",
  },
  {
    icon: Users,
    title: "Small business obsession",
    desc: "Boutiques, salons, cafés — we've lived in your shoes and your DMs.",
    emoji: "💜",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="orb top-10 -left-24 h-80 w-80 bg-grape/50 animate-blob" />
        <div className="orb top-20 right-0 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:2.5s]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow">✨ About SarahDMark</span>
            <h1 className="heading-xl mt-6 text-white">
              The studio behind brands that <span className="text-gradient">refuse to blend in</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted md:text-lg leading-relaxed">
              One strategist. One mission. To make world-class digital marketing accessible to the
              small businesses that built the world — one boutique, salon and café at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story + logo */}
      <section className="section-pad pt-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal x={-30} y={0}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 rounded-full bg-gradient-brand opacity-20 blur-3xl" aria-hidden />
              <div className="glass-card glow-border relative overflow-hidden rounded-[2rem] p-8 text-center animate-float-slow">
                <Image
                  src="/sara_logo.png"
                  alt="SarahDMark agency logo — stylized S with growth bars, upward arrow and social icons"
                  width={340}
                  height={340}
                  sizes="(max-width: 640px) 224px, 256px"
                  className="mx-auto w-56 drop-shadow-[0_0_50px_rgba(152,82,247,0.55)] sm:w-64"
                />
                <p className="mt-5 text-[11px] uppercase tracking-[0.35em] text-mist">
                  Est. with a vision
                </p>
                <div className="mt-5 flex justify-center gap-2">
                  {["📱", "📈", "🎨", "🎯", "💎"].map((e) => (
                    <span key={e} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-base ring-1 ring-white/10">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Born from a simple"
              highlight="frustration"
              description="Too many small businesses pour their hearts into amazing products — and then get invisible online. No strategy, no system, no sales."
            />
            <Reveal delay={0.15}>
              <div className="space-y-4 text-muted leading-relaxed md:text-lg">
                <p>
                  SarahDMark started with one boutique client who had <span className="text-pearl font-medium">gorgeous clothes</span> and
                  an Instagram with 400 followers. Three months of strategy, scroll-stopping content
                  and a sales funnel later — they hit 10,000 followers and sold out three drops. 💜
                </p>
                <p>
                  That&apos;s the moment the philosophy was born:{" "}
                  <span className="text-gradient font-semibold">
                    marketing is a system, not a mood.
                  </span>{" "}
                  Today I bring that same system to boutiques 👗, salons 💇‍♀️, cafés ☕ and small
                  businesses 🚀 across the world — remotely, personally, and without the agency
                  markups.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link href="/portfolio" className="btn-primary mt-8">
                See the proof <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="glass-card glow-border group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              <div className="orb -top-12 -right-12 h-40 w-40 bg-grape/40 transition-opacity opacity-50 group-hover:opacity-100" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-sm">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-heading text-2xl font-bold text-white">Our Mission 🎯</h3>
              <p className="relative mt-4 leading-relaxed text-muted">
                To give small businesses the same marketing firepower as big brands — so that talent,
                not marketing budget, decides who wins. Every strategy we ship is designed to{" "}
                <span className="text-pearl font-medium">pay for itself</span>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card glow-border group relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
              <div className="orb -top-12 -right-12 h-40 w-40 bg-grape-light/40 transition-opacity opacity-50 group-hover:opacity-100" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-sm">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-heading text-2xl font-bold text-white">Our Vision 👀</h3>
              <p className="relative mt-4 leading-relaxed text-muted">
                A world where every boutique, salon and café has a digital presence as beautiful as
                their craft — and the numbers to prove it. We&apos;re building that,{" "}
                <span className="text-grape-soft font-medium">one brand at a time</span>. ✨
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="Values we never"
            highlight="compromise"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="glass-card glow-border group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-white">
                    {v.title} <span className="ml-1">{v.emoji}</span>
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target audience */}
      <section className="section-pad relative border-t border-white/10 bg-navy-light/30">
        <div className="orb top-0 left-1/3 h-64 w-64 bg-grape/30" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we serve"
            title="Made for businesses with"
            highlight="personality"
            description="If your customers walk in (or DM in) because of how your brand makes them feel — you're exactly who we work with."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass-card glow-border group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                  <span className="text-4xl transition-transform duration-300 inline-block group-hover:scale-125 group-hover:-rotate-6">
                    {a.emoji}
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-mist">
              <BadgeCheck className="h-4 w-4 text-mint" />
              Not in the list? We&apos;ve helped restaurants, gyms, agencies and creators too — let&apos;s talk.
            </div>
          </Reveal>

          <Reveal className="mt-8 text-center">
            <Link href="/contact" className="btn-primary">
              <Rocket className="h-4 w-4" /> Start your growth story
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
