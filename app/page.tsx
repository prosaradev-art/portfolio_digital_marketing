"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clapperboard,
  Instagram,
  Mail,
  MessageCircle,
  Palette,
  Play,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import { useBooking } from "@/components/BookingProvider";
import { services, capabilities, skills, contactPhone, mailtoLink, telLink } from "@/lib/data";

const heroCards = [
  { icon: Palette, label: "Custom Canva designs", sub: "made from scratch", delay: 0.2, cls: "left-2 top-24" },
  { icon: Instagram, label: "Reel concepts", sub: "with hook-first scripting", delay: 0.35, cls: "right-0 top-40" },
  { icon: Search, label: "SEO kits", sub: "keywords & meta tags", delay: 0.5, cls: "left-6 bottom-16" },
  { icon: Clapperboard, label: "30-day calendars", sub: "planned post-by-post", delay: 0.65, cls: "right-8 bottom-4" },
];

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative flex min-h-screen supports-[height:100svh]:min-h-svh items-center overflow-hidden pt-28 pb-16">
        <div className="orb top-1/4 -left-24 h-96 w-96 bg-grape/50 animate-blob" />
        <div className="orb top-1/3 right-0 h-80 w-80 bg-grape-light/40 animate-blob [animation-delay:2s]" />
        <div className="orb bottom-0 left-1/3 h-72 w-72 bg-grape/30 animate-blob [animation-delay:4s]" />
        <div className="grid-pattern absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-grape-light/30 bg-grape-light/10 px-4 py-1.5 text-xs font-semibold text-grape-soft"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Digital Marketing Studio for Boutiques & Small Businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl mt-6 text-white"
            >
              Marketing That Makes a{" "}
              <span className="shimmer inline-block">Mark</span>{" "}
              <span className="align-middle text-4xl md:text-6xl">🚀</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted lg:mx-0"
            >
              Hi, I&apos;m <span className="font-semibold text-pearl">Sarah</span> — strategist behind
              SarahDMark. I help boutiques 👗, salons 💇‍♀️, cafés ☕ and small businesses 🚀 turn
              their social media into a <span className="text-grape-soft font-medium">customer machine</span> —
              with strategy, content, ads and funnels that actually convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button onClick={() => openBooking()} className="btn-primary w-full sm:w-auto">
                <CalendarDays className="h-5 w-5" />
                Book your discovery call
              </button>
              <Link href="/portfolio" className="btn-ghost w-full sm:w-auto">
                <Play className="h-4 w-4" />
                See case studies
              </Link>
            </motion.div>

            {/* Social proof mini-strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-mist lg:justify-start"
            >
              <span className="flex items-center gap-1.5">🎨 100% custom visuals</span>
              <span className="h-1 w-1 rounded-full bg-grape-light" />
              <span className="flex items-center gap-1.5">🎯 Strategy-first planning</span>
              <span className="h-1 w-1 rounded-full bg-grape-light" />
              <span className="flex items-center gap-1.5">🗓️ Tailored content calendars</span>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-25 blur-2xl" aria-hidden />
              <div className="glass-card glow-border relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-navy-light via-[#1A0B33] to-navy">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(152,82,247,0.25),transparent_60%)]" aria-hidden />
                  <Image
                    src="/sara_logo.png"
                    alt="SarahDMark official logo — stylized S with growth bars, upward arrow and social icons"
                    width={480}
                    height={480}
                    sizes="(max-width: 640px) 224px, 256px"
                    className="absolute left-1/2 top-12 w-56 -translate-x-1/2 drop-shadow-[0_0_50px_rgba(152,82,247,0.55)] sm:w-64"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 p-8 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-mist">
                      Marketing that makes a mark
                    </p>
                    <div className="mt-1 flex gap-2">
                      {["📱", "📈", "🎨", "🎯"].map((e) => (
                        <span key={e} className="glass-card flex h-10 w-10 items-center justify-center rounded-xl text-lg">
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              {heroCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className={`absolute ${card.cls} hidden sm:block`}
                >
                  <div className="glass-card glow-border flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card-lg animate-float">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white">
                      <card.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold text-white">{card.label}</span>
                      <span className="block text-[11px] text-muted">{card.sub}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== MARQUEE ============================== */}
      <Marquee />

      {/* ==================== CORE MARKETING CAPABILITIES ==================== */}
      <section className="section-pad relative">
        <div className="orb top-0 right-1/4 h-64 w-64 bg-grape/30" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What I bring to the table"
            title="Core Marketing"
            highlight="Capabilities"
            description="No inflated numbers — just the skills I use every day, applied to concept campaigns, sample strategies and my own brand. Here's what working with me looks like."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.12}>
                <div className="glass-card glow-border group relative h-full overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="orb -top-10 left-1/2 h-24 w-24 -translate-x-1/2 bg-grape-light/30 opacity-40 transition-opacity group-hover:opacity-80" />
                  <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-sm">
                    <cap.icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-5 font-heading text-xl font-bold text-white">
                    {cap.title} <span>{cap.emoji}</span>
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= SERVICES PREVIEW ========================= */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What I do"
            title="Core Digital Marketing"
            highlight="Mastery"
            description="Five disciplines, one goal: growth that shows up in your bank account. Every service is strategy-first and icon-driven — no fluff, no vanity metrics."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/services#${service.slug}`}
                  className="glass-card glow-border group block h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
                >
                  {/* Visual header */}
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
                    <div className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-110 bg-[radial-gradient(circle_at_30%_20%,white_0,transparent_45%)]" />
                    <div className="absolute -right-6 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/30">
                      <service.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                    <span className="absolute right-5 top-5 text-3xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125">
                      {service.emoji}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-heading text-xl font-bold text-white drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted">{service.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((f) => (
                        <span key={f} className="chip !px-3 !py-1 text-[11px]">
                          {f.split(" ").slice(0, 3).join(" ").replace(/\.$/, "")}…
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-sm font-semibold text-pearl">Explore service</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-grape-soft transition-all duration-300 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-glow-sm">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SKILLS BAND ============================ */}
      <section className="relative border-y border-white/10 bg-navy-light/40 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
              The full <span className="text-gradient">skill stack</span> behind every campaign
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {skills.map((skill, i) => (
                <Reveal key={skill} delay={i * 0.05}>
                  <span className="chip !px-5 !py-2.5 text-sm hover:bg-gradient-brand hover:text-white hover:border-transparent hover:shadow-glow-sm">
                    {skill} ✨
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =============================== CTA =============================== */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="glass-card glow-border relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
              <div className="orb -top-20 -left-20 h-72 w-72 bg-grape/50 animate-blob" />
              <div className="orb -bottom-24 -right-16 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:3s]" />
              <div className="relative">
                <span className="text-5xl">🚀</span>
                <h2 className="heading-xl mt-6 text-white">
                  Looking for fresh <span className="text-gradient">social media &amp; SEO strategies</span>? Let&apos;s talk!
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-muted md:text-lg">
                  Tell me about your brand and I&apos;ll bring the ideas — content calendars, reel
                  concepts, keyword research and designs tailored to you. Reply fast, no pressure. 💜
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a href={telLink} className="btn-primary w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" /> WhatsApp me: {contactPhone}
                  </a>
                  <a href={mailtoLink} className="btn-ghost w-full sm:w-auto">
                    <Mail className="h-4 w-4" /> Email me
                  </a>
                </div>
                <div className="mt-5 flex flex-col items-center justify-center gap-3">
                  <button onClick={() => openBooking()} className="text-sm font-semibold text-grape-soft transition-colors hover:text-white">
                    <CalendarDays className="mr-1.5 inline h-4 w-4" />
                    Or book a free 30-minute discovery call →
                  </button>
                  <p className="flex items-center justify-center gap-2 text-xs text-muted">
                    <Target className="h-3.5 w-3.5 text-grape-soft" />
                    No contracts. No pressure. Just strategy.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
