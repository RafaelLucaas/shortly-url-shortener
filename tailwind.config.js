/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primarycyan: "hsl(180, 66%, 49%)",
        primarydarkviolet: "hsl(257, 27%, 26%)",
        secondaryred: "hsl(0, 87%, 67%)",
        neutralgray: "hsl(0, 0%, 75%)",
        neutralgrayishviolet: "hsl(257, 7%, 63%)",
        neutralverydarkblue: "hsl(255, 11%, 22%)",
        neutralverydarkviolet: "hsl(260, 8%, 14%)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        shortenMobile: "url('bg-shorten-mobile.svg')"
      }
    }
  },
  plugins: []
};
