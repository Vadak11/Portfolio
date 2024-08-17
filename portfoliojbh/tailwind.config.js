/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem'
            },
            colors: {
                'neon-green': '#B8F423',
                'bg-dark': '#3d3d3d',
                'bg-darker': '#292829',
                'neon-green-hover': '#A5DB1F',
                'customButtonTextContrast': '#2D2D2D'
            }
        },
    },
    plugins: [],
}

