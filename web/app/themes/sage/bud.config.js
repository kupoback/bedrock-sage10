/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} app
 */
module.exports = async (bud) => {
    bud
        /**
         * Alias setup
         *
         * Set up an alias placeholder and a reference path
         * `@src` references the resources folder
         *
         * Uncomment which you'd want to use
         * @type @sageAdmin This is basic styles/scripts for the wp-admin. Styles included for a nicer look for ACF
         * @type @sageReact This integrates React components to be compiled
         * @type @sageVue   This integrated Vue 3 components to be compiled
         */

        /**
         * Application entry points. You can add additional entries to specific
         * CSS and/or JS files for compiling with their own unique file name
         *
         * Paths are relative to your resources directory
         * @see {@link https://bud.js.org/docs/bud.entry/}
         */

        /**
         * Directory contents to be included in the compilation
         * @see {@link https://bud.js.org/docs/bud.assets/}
         */
        .assets(["images", "fonts"]);

    bud
        /**
         * URI of the `public` directory
         *
         * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
         */
        .setPublicPath("/app/themes/sage/public/");


    bud
        /**
         * This is used to generate sourcemaps but only when
         * Bud ran in development mode
         */
        .when(bud.isDevelopment, bud => bud.devtool())
        /**
         * This is used to minimize all the files when Bud
         * runs in production mode
         */
        .when(bud.isProduction, bud => bud.minimize());

    bud
        /**
         * Matched files trigger a page reload when modified
         * @see {@link https://bud.js.org/docs/bud.watch/}
         */
        .watch(
            [
                "app/**/*",
                "resources/react/**/*",
                "resources/scripts/**/*",
                "resources/styles/**/*",
                "resources/views/**/*",
                "resources/vue/**/*",
            ]
        );

    /**
     * Generate WordPress `theme.json`
     *
     * @note This overwrites `theme.json` on every build.
     *
     * @see {@link https://bud.js.org/extensions/sage/theme.json/}
     * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/}
     */
    bud
        .wpjson
        .set('settings.color.custom', false)
        .set('settings.color.customDuotone', false)
        .set('settings.color.customGradient', false)
        .set('settings.color.defaultDuotone', false)
        .set('settings.color.defaultGradients', false)
        .set('settings.color.defaultPalette', false)
        .set('settings.color.duotone', [])
        .set('settings.custom.spacing', {})
        .set('settings.custom.typography.font-size', {})
        .set('settings.custom.typography.line-height', {})
        .set('settings.spacing.padding', true)
        .set('settings.spacing.units', ['px', '%', 'em', 'rem', 'vw', 'vh'])
        .set('settings.typography.customFontSize', false)
        .useTailwindColors()
        .useTailwindFontFamily()
        .useTailwindFontSize()
        .enable();
};
