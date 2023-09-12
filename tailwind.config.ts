import type { Config } from 'tailwindcss'
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#D4D4D8",
            foreground: "#18181B",
            blue: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },
            purple: {
              50: "#F2EAFA",
              100: "#E4D4F4",
              200: "#C9A9E9",
              300: "#AE7EDE",
              400: "#9353D3",
              500: "#7828C8",
              600: "#6020A0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
            red: {
              100: "#FDD0DF",
              200: "#FAA0BF",
              300: "#F871A0",
              400: "#F54180",
              500: "#F31260",
              600: "#C20E4D",
              700: "#920B3A",
              800: "#610726",
              900: "#310413",
            },
            pink: {
              100: "#FFDCF5",
              200: "#FFB8EB",
              300: "#FF95E1",
              400: "#FF71D7",
              500: "#FF4ECD",
              600: "#CC3EA4",
              700: "#992F7B",
              800: "#66AF52",
              900: "#331029",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#272727",
            foreground: "#FFFFFF",
            blue: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },
            purple: {
              50: "#F2EAFA",
              100: "#E4D4F4",
              200: "#C9A9E9",
              300: "#AE7EDE",
              400: "#9353D3",
              500: "#7828C8",
              600: "#6020A0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
            red: {
              100: "#FDD0DF",
              200: "#FAA0BF",
              300: "#F871A0",
              400: "#F54180",
              500: "#F31260",
              600: "#C20E4D",
              700: "#920B3A",
              800: "#610726",
              900: "#310413",
            },
            pink: {
              100: "#FFDCF5",
              200: "#FFB8EB",
              300: "#FF95E1",
              400: "#FF71D7",
              500: "#FF4ECD",
              600: "#CC3EA4",
              700: "#992F7B",
              800: "#66AF52",
              900: "#331029",
            },
          },
        },
      },
    }),
  ],
};
export default config
