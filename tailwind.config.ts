import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "raptor-orange": "#FF8C00",
        "raptor-purple": "#5B2C9F",
        "raptor-dark":   "#3D1A5C",
        "raptor-blue":   "#2563EB",
      },
    },
  },
  plugins: [],
};
export default config;
