/** @type {import('tailwindcss').Config} config */
const config = {
    content: [
        './index.php',
        './app/**/*.php',
        './resources/**/*.{js,jsx,php,vue}'
    ],
    theme: {
        extend: {
            colors: {}, // Extend Tailwind's default colors
        },
    },
    plugins: [],
};

export default config;
