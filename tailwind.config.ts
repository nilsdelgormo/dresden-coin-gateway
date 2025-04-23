
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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dresden: {
          // Inspired by Dresden's Frauenkirche (Church) and Baroque architecture
          porcelain: '#F0EAD6',   // Soft cream, reminiscent of Meissen porcelain
          sandstone: '#C2B280',   // Warm beige, like Dresden's historical buildings
          baroque: '#4A3C2F',     // Deep brown, representing architectural details
          elbe: '#4F7CAC',        // River blue
          gold: '#D4AF37',        // Accent gold, like historical decorations
          navy: '#1A1F2C',        // Deep navy, kept from previous design
          light: '#F8F9FD',       // Light background color for gradient
        }
      },
      backgroundImage: {
        'dresden-gradient': 'linear-gradient(135deg, #F0EAD6 0%, #C2B280 100%)',
        'dresden-pattern': 'radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(74, 60, 47, 0.1) 0%, transparent 30%)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
