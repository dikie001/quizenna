/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:{
          light:"#bfdbfe",
          DEFAULT:"#3b82f6",
          dark:"#1e40af",

        },
        softWhite:"#f9fafb",
        white:"#ffffff",
        dark:{
          light:"#1f2937",
          DEFAULT: "#111827",
          deep:"#0f172a"
        }
      }
    },
  },
  plugins: [],
};
