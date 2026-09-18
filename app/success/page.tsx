"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Home,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import Confetti from "@/components/Confetti";
import { formatDate } from "@/lib/utils";

interface SuccessProps {
  searchParams: {
    type?: string;
    name?: string;
    service?: string;
    date?: string;
    time?: string;
    email?: string;
  };
}

export default function SuccessPage({ searchParams }: SuccessProps) {
  const { type, name, service, date, time, email } = searchParams;
  const isCall = type === "call";
  const displayName = name || "there";

  const details = [
    ...(name ? [{ icon: User, label: "Name", value: name }] : []),
    ...(service ? [{ icon: Sparkles, label: "Service", value: service }] : []),
    ...(email ? [{ icon: Mail, label: "Email", value: email }] : []),
    ...(date
      ? [{ icon: CalendarDays, label: "Date", value: formatDate(date) }]
      : []),
    ...(time ? [{ icon: CalendarDays, label: "Time", value: time }] : []),
  ];

  return (
    <section className="relative flex min-h-screen supports-[height:100svh]:min-h-svh items-center justify-center overflow-hidden px-5 py-32">
      <Confetti />
      <div className="orb top-1/4 -left-24 h-96 w-96 bg-grape/50 animate-blob" />
      <div className="orb bottom-1/4 -right-24 h-96 w-96 bg-grape-light/40 animate-blob [animation-delay:3s]" />
      <div className="grid-pattern absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card glow-border relative w-full max-w-2xl rounded-[2rem] p-8 text-center md:p-14"
      >
        <div className="orb -top-16 left-1/2 h-48 w-48 -translate-x-1/2 bg-grape/50" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.3 }}
          className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-brand shadow-glow"
        >
          <CheckCircle2 className="h-12 w-12 text-white" />
        </motion.div>

        <p className="eyebrow relative mt-8">
          {isCall ? "📅 Call booked!" : "✨ Message received!"}
        </p>

        <h1 className="heading-xl relative mt-5 text-white">
          {isCall ? (
            <>
              See you soon, <span className="text-gradient">{displayName}</span>! 🎉
            </>
          ) : (
            <>
              Thank you, <span className="text-gradient">{displayName}</span>! 🎉
            </>
          )}
        </h1>

        <p className="relative mx-auto mt-5 max-w-md text-muted leading-relaxed">
          {isCall
            ? "Your discovery call is confirmed. We've locked in your slot and can't wait to map out your growth strategy. A calendar invite is on its way to your inbox. 💜"
            : "Your message is in our inbox! We're reading every word and will reply within 24 hours with honest advice and a clear next step. 💜"}
        </p>

        {/* Summary card */}
        {details.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-navy-deep/60 p-5 text-left backdrop-blur-sm"
          >
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-mist">
              {isCall ? "📋 Your booking summary" : "📋 Your message summary"}
            </p>
            <div className="mt-4 space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2.5 text-sm text-muted">
                    <d.icon className="h-4 w-4 text-grape-soft" />
                    {d.label}
                  </span>
                  <span className="text-right text-sm font-semibold text-pearl">{d.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-4 w-4" /> Return to home
          </Link>
          <Link href="/portfolio" className="btn-ghost">
            Explore case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="relative mt-8 text-xs text-muted">
          While you&apos;re here — check your inbox for a free growth checklist. 🎁
        </p>
      </motion.div>
    </section>
  );
}
