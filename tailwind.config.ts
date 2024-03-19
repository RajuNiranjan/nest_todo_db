import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1300px":"1300px",
        "1200px": "1200px",
        "1000px": "1000px",
        "900px": "900px",
        "768px:": "768px",
        "700px": "700px",
        "500px": "500px",
        "400px": "400px"
      }
    },
  },
  plugins: [],
};
export default config;
