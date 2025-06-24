/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af', // Deep blue for trust
                secondary: '#10b981', // Green for security
            },
        },
    },
    plugins: [],
}
