"use client";

import { useMemo } from "react";

const COLORS = ["#9852F7", "#7928CA", "#64FFDA", "#F472B6", "#FBBF24", "#FFFFFF", "#A78BFA"];
const EMOJIS = ["🎉", "✨", "🎊", "💜", "🚀", "⭐"];

interface ConfettiProps {
  count?: number;
  emojiCount?: number;
}

export default function Confetti({ count = 90, emojiCount = 12 }: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        color: COLORS[i % COLORS.length],
        duration: 3 + Math.random() * 2.5,
        delay: Math.random() * 1.2,
        round: Math.random() > 0.5,
      })),
    [count]
  );

  const emojis = useMemo(
    () =>
      Array.from({ length: emojiCount }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        size: 16 + Math.random() * 14,
        emoji: EMOJIS[i % EMOJIS.length],
        duration: 3.5 + Math.random() * 2,
        delay: Math.random() * 1.4,
      })),
    [emojiCount]
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 1.6,
            backgroundColor: p.color,
            borderRadius: p.round ? "50%" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      {emojis.map((e) => (
        <span
          key={`e-${e.id}`}
          className="confetti-piece"
          style={{
            left: `${e.left}%`,
            fontSize: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
          }}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
}
