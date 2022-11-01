/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,svelte,js}"],
  theme: {
    extend: {
      screens: {
        xs: "425px"
      },
      colors: {
        bkg: "#eeded3",
        accent: "#f292a5",
        muted: "#826c55"
      },
      width: {
        100: "860px"
      },
      height: {
        100: "475px"
      },
      dropShadow: {
        "text-sm": "1px 1px 0px rgba(0,0,0,0.90)",
        "text-md": "1px 2px 0px rgba(0,0,0,0.90)",
        "text-lg": "1px 4px 0px rgba(0,0,0,0.90)",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      fontFamily: {
        sans: ["Indie Flower", "cursive"]
      },
      fontSize: {
        sm: ["clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)", "1.4"],
        base: ["clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)", "1.5"],
        lg: ["clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)", "1.4"],
        xl: ["clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)", "1,4"],
        "2xl": ["clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)", "1,2"],
        "3xl": ["clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)", "1,1"],
        "4xl": ["clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)", "1"],
        "5xl": ["clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)", "1"]
      }
    },
  },
  plugins: [],
}
