/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          deep: '#0D0518',
          card: '#160B24',
          surface: '#200F35',
          border: '#3B1D5C',
          subtle: '#26133C',
        },
        obsidian: '#FFFFFF',    // Light text on rich purple
        charcoal: '#F5F3FF',    // Secondary light neutral
        graphite: '#C4B5FD',    // Soft luminous lavender
        porcelain: '#160B24',   // Dark velvet purple card
        alabaster: '#200F35',   // Layered plum purple surface
        hairline: '#3B1D5C',    // Deep purple hairline border
        // 20% Accent: Vivid Haute Pink
        pink: {
          DEFAULT: '#EC4899',   // Haute Pink
          dark: '#BE185D',      // Crimson Wine Pink
          light: '#F472B6',     // Neon Rose Pink
          glow: 'rgba(236, 72, 153, 0.28)',
          subtle: 'rgba(236, 72, 153, 0.12)'
        },
        // Compatible mapping for carmine utility classes
        carmine: {
          DEFAULT: '#EC4899',
          dark: '#BE185D',
          light: '#F472B6',
          glow: 'rgba(236, 72, 153, 0.28)'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'widest-bespoke': '0.22em'
      }
    },
  },
  plugins: [],
}

