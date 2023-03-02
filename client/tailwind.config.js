/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:theme=>({
        'logo':"url('https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png')",
        'section-bg':"url('\images/\heroSectionBackground.png')",
      }),
      minHeight:{
        '1/4':'60vh',
        '2/4':'70vh'
      },
      colors: {
        zomato: {
          50: "#ffe5e7",
          100: "#fab5b9",
          200: "#f9848b",
          300: "#f9555d",
          400: "#f92d30",
          500: "#e01d19",
          600: "#ae1514",
          700: "#7c0d0f",
          800: "#4a0509",
          900: "#1a0002",
        },
      },
    },
  },
  plugins: [],
  
}

