/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Fuggles: ["Fuggles", "cursive"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["coffee", "cupcake", "dracula"],
    },
};
