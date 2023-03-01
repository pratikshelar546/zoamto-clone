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
      }
    },
  },
  plugins: [],
  
}

