/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-dvh": "100dvh",
        "screen-dvh1/2": "50dvh",
      },
      minHeight: {
        "screen-dvh": "100dvh",
      },
      maxHeight: {
        "screen-dvh": "100dvh",
      },
    },
  },
  plugins: [],
};
