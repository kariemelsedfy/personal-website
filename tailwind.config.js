/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0a0a0f',
        surface: '#12121a',
        raised: '#1a1a24',
        line: '#26263a',
        body: '#a1a1b5',
        bright: '#e7e7ee',
        indigo2: '#6366f1',
        violet2: '#8b5cf6',
        cyan2: '#22d3ee',
      },
      fontFamily: {
        display: ['"Sora Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
