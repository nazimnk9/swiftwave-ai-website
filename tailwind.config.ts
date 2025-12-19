import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1B1C1D",
        foreground: "#3A3B3C",
        primary: "#D3B265",
        text: "#E5EBDC",
        accent: "#957D04",
        accentForeground: "#5995F1",
      },
    },
  },
  plugins: [],
};
export default config;
