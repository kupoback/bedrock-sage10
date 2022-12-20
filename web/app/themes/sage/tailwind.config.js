/**
 * Tailwind CSS Configuration
 *
 * @type {{plugins: *[], theme: {extend: {colors: {}}}, content: string[]}}
 *
 * @link https://tailwindcss.com/docs/configuration
 */
module.exports = {
    content: ["./index.php", "./app/**/*.php", "./resources/**/*.{php,vue,js}", './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            colors: {}, // Extend Tailwind's default colors
        },
    },
    plugins: [
        require('tw-elements/dist/plugin'),
    ],
};
