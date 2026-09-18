"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, Clock, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:30 PM",
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export default function BookingModal({ isOpen, onClose, presetService }: BookingModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [service, setService] = useState(presetService ?? services[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [step, setStep] = useState<"details" | "schedule">("details");
  const [error, setError] = useState("");

  const minDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);

  useEffect(() => {
    if (isOpen) {
      setStep("details");
      setError("");
      setService(presetService ?? services[0].title);
    }
  }, [isOpen, presetService]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const canContinue = name.trim().length >= 2;

  const handleConfirm = () => {
    if (!date || !time) {
      setError("Please pick both a date and a time slot to lock in your call.");
      return;
    }
    const params = new URLSearchParams({
      type: "call",
      name: name.trim(),
      service,
      date,
      time,
    });
    onClose();
    router.push(`/success?${params.toString()}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book your discovery call"
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-navy-light shadow-card-lg"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
          >
            <div className="orb -top-24 -right-24 h-64 w-64 bg-grape-light/40" />
            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="eyebrow !px-3 !py-1">📅 Discovery Call</p>
                  <h3 className="font-heading mt-3 text-xl md:text-2xl font-bold text-white">
                    Book your free strategy call
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    30 minutes. Zero pressure. Real growth plan.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close booking modal"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-muted transition-all hover:border-grape-light/50 hover:text-white hover:shadow-glow-sm"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Step indicator */}
              <div className="flex items-center gap-2 px-6 pt-5">
                {["Your details", "Pick a time"].map((label, i) => {
                  const active = step === (i === 0 ? "details" : "schedule");
                  const done = i === 0 && step === "schedule";
                  return (
                    <div key={label} className="flex items-center gap-2">
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors",
                          done
                            ? "bg-mint text-navy"
                            : active
                            ? "bg-gradient-brand text-white shadow-glow-sm"
                            : "border border-white/15 text-muted"
                        )}
                      >
                        {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                      </span>
                      <span className={cn("text-xs font-medium", active ? "text-pearl" : "text-muted")}>
                        {label}
                      </span>
                      {i === 0 && <span className="mx-1 h-px w-8 bg-white/15" />}
                    </div>
                  );
                })}
              </div>

              <div className="px-6 py-6">
                <AnimatePresence mode="wait">
                  {step === "details" ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="bk-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                          Your name
                        </label>
                        <input
                          id="bk-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sara Ahmed"
                          className="input-shell"
                          autoFocus
                        />
                      </div>
                      <div>
                        <label htmlFor="bk-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                          What do you need help with?
                        </label>
                        <select
                          id="bk-service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="input-shell !pl-4 cursor-pointer"
                        >
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.emoji} {s.title}
                            </option>
                          ))}
                          <option value="Something else">🤔 Something else</option>
                        </select>
                      </div>
                      <button
                        onClick={() => canContinue && setStep("schedule")}
                        disabled={!canContinue}
                        className="btn-primary w-full"
                      >
                        Continue <CalendarDays className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="schedule"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div>
                        <label htmlFor="bk-date" className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mist">
                          <CalendarDays className="h-3.5 w-3.5" /> Pick your date
                        </label>
                        <input
                          id="bk-date"
                          type="date"
                          min={minDate}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="input-shell !pl-4 [color-scheme:dark]"
                        />
                      </div>

                      <div>
                        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mist">
                          <Clock className="h-3.5 w-3.5" /> Available time slots
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {TIME_SLOTS.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTime(slot)}
                              className={cn(
                                "rounded-lg border px-2 py-2.5 text-xs font-semibold transition-all duration-200",
                                time === slot
                                  ? "border-grape-light bg-gradient-brand text-white shadow-glow-sm"
                                  : "border-white/10 bg-white/5 text-mist hover:border-grape-light/50 hover:text-white"
                              )}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {error && (
                        <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2 text-xs text-red-300">
                          ⚠️ {error}
                        </p>
                      )}

                      <div className="flex items-center gap-3">
                        <button onClick={() => setStep("details")} className="btn-ghost flex-1">
                          ← Back
                        </button>
                        <button onClick={handleConfirm} className="btn-primary flex-1">
                          Confirm booking 🚀
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
