/**
 * @type {import('tailwindcss').Config} config
 * @link https://tailwindcss.com/docs/configuration
 */

module.exports = {
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
    plugins: [

    ],
};
