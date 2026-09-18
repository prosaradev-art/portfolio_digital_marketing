import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A192F",
          light: "#0E2239",
          card: "#112240",
          line: "#1D3A5F",
          deep: "#071326",
        },
        grape: {
          DEFAULT: "#7928CA",
          light: "#9852F7",
          soft: "#A78BFA",
        },
        mint: "#64FFDA",
        pearl: "#E6F1FF",
        muted: "#8892B0",
        mist: "#A8B2D1",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7928CA 0%, #9852F7 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(121,40,202,0.35) 0%, rgba(152,82,247,0.35) 100%)",
        "gradient-text":
          "linear-gradient(120deg, #ffffff 0%, #E9D5FF 40%, #9852F7 100%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(152,82,247,0.45), 0 0 64px rgba(121,40,202,0.25)",
        "glow-sm": "0 0 14px rgba(152,82,247,0.4)",
        "glow-mint": "0 0 24px rgba(100,255,218,0.25)",
        "card-lg": "0 20px 60px -15px rgba(2, 12, 27, 0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-24px) rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        shimmer: "shimmer 3s linear infinite",
        blob: "blob 12s ease-in-out infinite",
        spin: "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
