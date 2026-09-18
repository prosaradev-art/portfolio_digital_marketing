import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-light/40 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2.5 font-heading text-sm md:text-base font-semibold uppercase tracking-widest text-mist whitespace-nowrap"
          >
            <span className="text-lg">{item.emoji}</span>
            {item.label}
            <span className="ml-6 text-grape-light" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
