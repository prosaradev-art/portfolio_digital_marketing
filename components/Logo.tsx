"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export default function Logo({ size = 44, className, glow = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex shrink-0", className)}
      aria-label="SarahDMark — Home"
    >
      <span className="relative inline-flex">
        {glow && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-xl bg-grape-light/40 blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        <Image
          src="/sara_logo.png"
          alt="SarahDMark official logo — stylized S with growth bars, upward arrow and social icons"
          width={size}
          height={size}
          className={cn(
            "relative rounded-lg object-contain shadow-lg ring-1 ring-white/10",
            "transition-transform duration-300 group-hover:scale-105"
          )}
          priority
        />
      </span>
    </Link>
  );
}
