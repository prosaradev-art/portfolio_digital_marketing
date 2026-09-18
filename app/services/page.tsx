"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useBooking } from "@/components/BookingProvider";
import { services, type Service } from "@/lib/data";
import { cn } from "@/lib/utils";

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const { openBooking } = useBooking();
  const [tier, setTier] = useState(service.pricing[1] ?? service.pricing[0]);

  return (
    <Reveal y={40}>
      <article
        id={service.slug}
        className={cn(
          "glass-card glow-border relative scroll-mt-28 overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-glow",
          index % 2 === 1 && "lg:translate-y-10"
        )}
      >
        {/* Visual header */}
        <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${service.gradient} md:h-64`}>
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_25%_15%,white_0,transparent_50%)]" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute left-8 top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/30 shadow-lg">
            <service.icon className="h-8 w-8" />
          </div>
          <span className="absolute right-8 top-8 text-5xl drop-shadow-xl">{service.emoji}</span>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
              {service.title}
            </h2>
            <p className="mt-1 text-sm md:text-base font-medium text-white/85">{service.tagline}</p>
          </div>
          {service.popular && (
            <span className="absolute right-6 top-24 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/40">
              🔥 Most popular
            </span>
          )}
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_1fr]">
          {/* Details */}
          <div>
            <p className="leading-relaxed text-muted">{service.description}</p>
            <h3 className="mt-6 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
              <Sparkles className="h-4 w-4 text-grape-light" /> What&apos;s included
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand/20 ring-1 ring-grape-light/40">
                    <Check className="h-3 w-3 text-grape-soft" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => openBooking(service.title)} className="btn-primary">
                <MessageCircle className="h-4 w-4" /> Inquire about this service
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-2xl border border-white/10 bg-navy-deep/50 p-5">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
              💰 Investment
            </h3>
            <div className="mt-4 flex gap-2">
              {service.pricing.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setTier(p)}
                  className={cn(
                    "flex-1 rounded-xl border px-3 py-2.5 text-center transition-all duration-200",
                    tier.name === p.name
                      ? "border-grape-light bg-gradient-brand text-white shadow-glow-sm"
                      : "border-white/10 bg-white/5 text-mist hover:border-grape-light/50 hover:text-white"
                  )}
                >
                  <span className="block text-xs font-bold">{p.name}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-5"
            >
              <p className="font-heading text-4xl font-extrabold text-white">
                {tier.price}
                <span className="ml-1.5 text-sm font-medium text-muted">{tier.unit}</span>
              </p>
              <ul className="mt-4 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openBooking(service.title)}
                className="btn-ghost mt-5 w-full !py-3 text-sm"
              >
                Start with {tier.name} <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="orb top-10 -left-24 h-80 w-80 bg-grape/50 animate-blob" />
        <div className="orb top-32 right-0 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:2s]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow">💼 Services</span>
            <h1 className="heading-xl mt-6 text-white">
              Everything your brand needs to <span className="text-gradient">grow online</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted md:text-lg leading-relaxed">
              Six battle-tested services. Transparent pricing. No agencies, no middlemen —
              just strategy, content and systems that convert. 📈
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad pt-8">
        <div className="mx-auto max-w-6xl space-y-10 px-5 sm:px-8">
          {services.map((service, i) => (
            <ServiceBlock key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad pt-4">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="glass-card glow-border relative overflow-hidden rounded-[2rem] p-10 text-center md:p-14">
              <div className="orb -top-16 -left-16 h-56 w-56 bg-grape/50" />
              <span className="relative text-4xl">🤝</span>
              <h2 className="relative mt-5 font-heading text-2xl md:text-4xl font-extrabold text-white">
                Not sure which service you need?
              </h2>
              <p className="relative mx-auto mt-4 max-w-lg text-muted">
                Book a free discovery call — we&apos;ll audit your brand and tell you exactly what to do
                first. Sometimes the best advice is free. 💜
              </p>
              <div className="relative mt-8">
                <CTAButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CTAButton() {
  const { openBooking } = useBooking();
  return (
    <button onClick={() => openBooking()} className="btn-primary">
      📅 Get my free audit
    </button>
  );
}
