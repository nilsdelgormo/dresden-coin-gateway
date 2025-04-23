
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: {
          light: "#eaf1fb",
          DEFAULT: "#1f539e",
          dark: "#143761",
        },
        silver: {
          light: "#f6f7fa",
          DEFAULT: "#c4c9d4",
          dark: "#9fa6b2",
        },
        navy: "#171e2e",
        white: "#ffffff",
        black: "#0a0a15",
      },
      backgroundImage: {
        'trusted-silver': 'linear-gradient(135deg, #f6f7fa 0%, #eaf1fb 100%)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
