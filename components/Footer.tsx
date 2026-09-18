"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks, services, socialLinks, contactEmail, contactPhoneDisplay, mailtoLink, telLink } from "@/lib/data";
import { isValidEmail } from "@/lib/utils";

const socials = [
  ...socialLinks.map((s) => ({ icon: s.icon, label: s.label, href: s.href })),
  { icon: Mail, label: "Email", href: mailtoLink },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-deep">
      <div className="orb -top-32 left-1/4 h-72 w-72 bg-grape/40" />
      <div className="orb top-20 right-0 h-56 w-56 bg-grape-light/30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo size={44} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              SarahDMark is a digital marketing studio for boutiques, salons, cafés and
              small businesses that refuse to be invisible. Marketing that makes a mark 🚀
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const isExternal = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-grape-light/60 hover:text-white hover:shadow-glow-sm"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-grape-light opacity-0 transition-opacity group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {s.emoji} {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-pearl">
              Stay in the loop
            </h4>
            <p className="mt-5 text-sm text-muted">
              One marketing tip a week. No spam, just strategy. 💜
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-xl border border-mint/30 bg-mint/10 px-4 py-3 text-sm font-medium text-mint">
                ✅ You&apos;re in! Check your inbox for a welcome gift.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    aria-label="Email address"
                    className="input-shell !pl-10 !py-3"
                  />
                </div>
                {error && <p className="text-xs text-red-300">⚠️ {error}</p>}
                <button type="submit" className="btn-primary w-full !py-3 text-sm">
                  Subscribe <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-grape-light" /> Remote · Worldwide 🌍
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-grape-light" /> <a href={mailtoLink} className="transition-colors hover:text-white">{contactEmail}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-grape-light" /> <a href={telLink} className="transition-colors hover:text-white">{contactPhoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} SarahDMark. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted">
            Crafted with <Heart className="h-3.5 w-3.5 fill-grape-light text-grape-light" /> and
            too much coffee ☕ by Sarah
          </p>
        </div>
      </div>
    </footer>
  );
}
