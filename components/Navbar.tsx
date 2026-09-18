"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { useBooking } from "@/components/BookingProvider";
import { navLinks, skillCategories, skills } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileSkillsOpen, setMobileSkillsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileSkillsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || menuOpen
          ? "border-b border-white/10 bg-navy/85 backdrop-blur-xl shadow-card-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8" aria-label="Main navigation">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-white"
                      : "text-mist hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-brand/25 ring-1 ring-grape-light/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Skills mega-menu (desktop) */}
          <li
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={cn(
                "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                megaOpen ? "text-white" : "text-mist hover:text-white"
              )}
            >
              Skills
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", megaOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {megaOpen && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-h-[calc(100vh-7rem)] w-[min(72rem,92vw)] overflow-y-auto rounded-3xl border border-white/10 bg-navy/95 p-6 shadow-card-lg backdrop-blur-2xl md:p-8"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="eyebrow">🧠 Skills &amp; Expertise</span>
                        <h3 className="mt-3 font-heading text-xl font-bold text-white md:text-2xl">
                          The full <span className="text-gradient">skill stack</span> behind every
                          campaign
                        </h3>
                      </div>
                      <span className="chip">
                        {skills.length} skills · {skillCategories.length} categories ✨
                      </span>
                    </div>
                    <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {skillCategories.map((cat) => (
                        <div
                          key={cat.title}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-grape-light/50"
                        >
                          <p className="font-heading text-sm font-bold text-pearl">
                            {cat.emoji} {cat.title}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {cat.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-navy/60 px-2.5 py-1 text-[11px] text-mist transition-colors duration-200 hover:border-grape-light/50 hover:text-white"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openBooking()}
            className="hidden sm:inline-flex btn-primary !px-5 !py-2.5 text-sm"
          >
            <CalendarDays className="h-4 w-4" />
            Book a call
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-pearl transition-all hover:border-grape-light/50 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-white/10 bg-navy/95 backdrop-blur-xl lg:hidden max-h-[calc(100vh-4rem)] supports-[height:100dvh]:max-h-[calc(100dvh-4rem)]"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 font-heading text-sm font-semibold transition-colors",
                        active
                          ? "bg-gradient-brand/20 text-white ring-1 ring-grape-light/40"
                          : "text-mist hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                      <span className="text-grape-light">→</span>
                    </Link>
                  </motion.li>
                );
              })}
              {/* Skills collapsible (mobile) */}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  type="button"
                  onClick={() => setMobileSkillsOpen((v) => !v)}
                  aria-expanded={mobileSkillsOpen}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-4 py-3 font-heading text-sm font-semibold transition-colors",
                    mobileSkillsOpen
                      ? "bg-gradient-brand/20 text-white ring-1 ring-grape-light/40"
                      : "text-mist hover:bg-white/5 hover:text-white"
                  )}
                >
                  Skills
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-grape-light transition-transform duration-300",
                      mobileSkillsOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {mobileSkillsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mx-2 mb-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-grape-soft">
                          The full skill stack behind every campaign
                        </p>
                        <div className="mt-4 space-y-4">
                          {skillCategories.map((cat) => (
                            <div key={cat.title}>
                              <p className="text-xs font-bold text-pearl">
                                {cat.emoji} {cat.title}
                              </p>
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {cat.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-navy/60 px-2.5 py-1 text-[11px] text-mist"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-2">
                <button onClick={() => { setMenuOpen(false); openBooking(); }} className="btn-primary w-full">
                  <CalendarDays className="h-4 w-4" /> Book your discovery call
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
