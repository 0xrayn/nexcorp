/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  // DaisyUI loaded via CDN in layout.tsx  only use Tailwind utilities here
  plugins: [],
  // Disable preflight since DaisyUI CDN handles base styles
  corePlugins: {
    preflight: false,
  },
}
