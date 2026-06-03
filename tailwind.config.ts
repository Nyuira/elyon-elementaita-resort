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
        // Elyon Brand Palette — The Rift Valley at Dusk
        clay:    "#8B5E3C",   // Elementaita Clay — volcanic earth
        blush:   "#E8A89C",   // Flamingo Blush — golden hour
        slate:   "#4A4E5A",   // Great Rift Slate — escarpment stone
        cream:   "#F5F0E8",   // Acacia Cream — morning mist
        gold:    "#C4903A",   // Savanna Gold — dry afternoon grass
        teal:    "#2D7D7E",   // Elementaita Teal — lake water
        charcoal:"#1C1C2E",   // Night Sky Charcoal
        pelican: "#FAFAF7",   // Pelican White
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        lato:      ["Lato", "system-ui", "sans-serif"],
        playfair:  ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-rift": "linear-gradient(135deg, #8B5E3C 0%, #1C1C2E 100%)",
        "gradient-lake": "linear-gradient(180deg, #2D7D7E 0%, #1C1C2E 100%)",
        "gradient-hero": "linear-gradient(to bottom, rgba(28,28,46,0.3) 0%, rgba(28,28,46,0.7) 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease-out forwards",
        "fade-in":    "fadeIn 1.2s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
export default config;
