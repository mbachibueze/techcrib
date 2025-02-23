import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background, 0 0% 100%))', // Default to white
        foreground: 'hsl(var(--foreground, 0 0% 0%))', // Default to black
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 0 0% 0%))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover, 0 0% 100%))',
          foreground: 'hsl(var(--popover-foreground, 0 0% 0%))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary, 220 90% 56%))', // Default blue
          foreground: 'hsl(var(--primary-foreground, 0 0% 100%))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 220 14% 95%))',
          foreground: 'hsl(var(--secondary-foreground, 220 14% 30%))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 220 14% 95%))',
          foreground: 'hsl(var(--muted-foreground, 220 14% 30%))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent, 220 14% 90%))',
          foreground: 'hsl(var(--accent-foreground, 220 14% 30%))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive, 0 84% 60%))',
          foreground: 'hsl(var(--destructive-foreground, 0 0% 100%))'
        },
        border: 'hsl(var(--border, 220 14% 90%))',
        input: 'hsl(var(--input, 220 14% 90%))',
        ring: 'hsl(var(--ring, 220 90% 56%))',
        chart: {
          '1': 'hsl(var(--chart-1, 220 90% 56%))',
          '2': 'hsl(var(--chart-2, 340 90% 56%))',
          '3': 'hsl(var(--chart-3, 45 90% 56%))',
          '4': 'hsl(var(--chart-4, 130 90% 56%))',
          '5': 'hsl(var(--chart-5, 260 90% 56%))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

