import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        hregular: 'var(--font-helvetica-regular)',
        hmedium: 'var(--font-helvetica-medium)'
      },
      colors: {
        primary: '#006060',
        gray: {
            1000: '#2D2D2D',
            200: '#F6F6F6',
            500: '#CECECE',
            700: '#989898',
            800: '#767676'
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
export default config;
