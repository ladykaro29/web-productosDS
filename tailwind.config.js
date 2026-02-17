
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ds: {
                    red: "#E61E25",
                    yellow: "#FFD200", // Brighter yellow from logo
                    green: "#4A7C24", // Plantain leaf green
                    lime: "#84BD00", // Yuca lime green
                    orange: "#F58220", // Trozitos orange
                    brown: "#5D3A1A", // Yuca brown
                    dark: "#1A1A1A",
                    light: "#FAFAFA",
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                display: ['var(--font-poppins)'],
            }
        },
    },
    plugins: [],
};
