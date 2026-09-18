"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Download, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12">
        <div className="orb top-10 -left-24 h-80 w-80 bg-grape/50 animate-blob" />
        <div className="orb top-32 right-0 h-72 w-72 bg-grape-light/40 animate-blob [animation-delay:2s]" />
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow">🛍️ Digital Products</span>
            <h1 className="heading-xl mt-6 text-white">
              Ready-to-use <span className="text-gradient">growth assets</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted md:text-lg leading-relaxed">
              Pro-designed templates, bundles and plans you can download, edit and post today —
              the shortcut to a professional feed without hiring a designer. 🎨
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-pad pt-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={(i % 2) * 0.12}>
              <article className="glass-card glow-border group relative h-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                {/* Mockup visual */}
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${product.gradient}`}>
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_20%,white_0,transparent_45%)]" />
                  <div className="absolute -left-8 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                  {/* Phone mockup */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-36 w-24 rounded-[1.4rem] border-2 border-white/40 bg-navy-deep/80 p-2 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2">
                      <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-white/30" />
                      <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 rounded-[0.9rem] bg-white/5">
                        <span className="text-3xl drop-shadow">{product.mock}</span>
                        <span className="h-1 w-12 rounded-full bg-grape-light/60" />
                        <span className="h-1 w-9 rounded-full bg-white/20" />
                        <span className="h-1 w-9 rounded-full bg-white/20" />
                        <span className="mt-1 h-2.5 w-10 rounded-full bg-mint/70" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md ring-1 ring-white/30">
                    <product.icon className="h-6 w-6" />
                  </span>

                  {product.badge && (
                    <span className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/40">
                      {product.badge === "Bestseller" ? "🔥 " : product.badge === "New" ? "✨ " : "💎 "}
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                      {product.title} <span className="ml-1">{product.emoji}</span>
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>

                  <h3 className="mt-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-mist">
                    What you get
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-mist">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      {product.oldPrice && (
                        <span className="mr-2 text-sm text-muted line-through">{product.oldPrice}</span>
                      )}
                      <span className="font-heading text-3xl font-extrabold text-white">{product.price}</span>
                      <span className="ml-1.5 text-xs text-muted">one-time</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      className="btn-primary !px-5 !py-3 text-sm"
                    >
                      <Download className="h-4 w-4" /> Get instant access
                    </motion.button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: Zap, title: "Instant delivery", desc: "Download links land in your inbox in seconds." },
                { icon: ShieldCheck, title: "Lifetime updates", desc: "New templates added free, forever." },
                { icon: Sparkles, title: "Editable in Canva", desc: "Zero design skills required. Seriously." },
              ].map((f) => (
                <div key={f.title} className="glass-card flex items-start gap-4 rounded-2xl p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow-sm">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">{f.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <p className="text-muted">
              Want it done for you instead?{" "}
              <Link href="/services" className="font-semibold text-grape-soft underline-offset-4 hover:underline">
                Explore done-for-you services →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
