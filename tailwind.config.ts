import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px", // As per spec (Container padding)
      screens: {
        "2xl": "1280px", // As per spec (Container max-width)
      },
    },
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-black": "var(--secondary-black)",
        background: "var(--background)",
        "card-bg": "var(--card-bg)",
        "border-color": "var(--border-color)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-gold": "var(--accent-gold)",
        error: "var(--error)",
        success: "var(--success)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Mobile sizes first, then desktop
        "hero-headline-mobile": ["36px", { lineHeight: "1.2", fontWeight: "900" }],
        "hero-headline": ["56px", { lineHeight: "1.2", fontWeight: "900" }],
        "section-headline-mobile": ["32px", { lineHeight: "1.2", fontWeight: "800" }],
        "section-headline": ["48px", { lineHeight: "1.2", fontWeight: "800" }],
        "subsection-mobile": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        subsection: ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "body-large-mobile": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-large": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "button-text": ["18px", { lineHeight: "1", fontWeight: "700" }], // For CTA buttons
      },
      spacing: {
        // Base unit: 8px. Spacing scale: 8, 16, 24, 32, 48, 64, 96, 128
        "2": "8px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
        "24": "96px",
        "32": "128px",
        "section-padding-mobile": "48px",
        "section-padding": "96px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "8px", // For CTA buttons
        card: "16px", // For ServiceCard
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "subtle-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-gradient": "subtle-gradient 15s ease infinite",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(-45deg, var(--background), #001a0f, var(--background))", // Black to dark green
        "urgency-gradient": "linear-gradient(45deg, #050505, #0a0a0a)", // Dark gradient
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
