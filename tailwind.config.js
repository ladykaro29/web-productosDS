
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
                    yellow: "#F2C94C",
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
