/**
 * @typedef {import("@roots/bud").Bud} bud
 *
 * @param {bud} bud
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
        .alias({
            "@sageAdmin": "@src/admin_assets",
            // React script alias'
            "@sageReact": "@src/react",
            "@sageRedux": "@src/react/Redux",
            "@reactComponent": "@src/react/Components",
            "@reactPages": "@src/react/Pages",
            "@reactUtil": "@src/react/Util"
            // Vue script alias'
            // "@sageVue": "@src/vue",
            // "@vueComponents": "@src/vue/Components",
            // "@vuePages": "@src/vue/Pages",
            // "@vueUtil": "@src/vue/Util",
            // "@sageVuex": "@src/vue/Vuex",
        })

        /**
         * Application entry points. You can add additional entries to specific
         * CSS and/or JS files for compiling with their own unique file name
         *
         * Paths are relative to your resources directory
         * @see {@link https://bud.js.org/docs/bud.entry/}
         */
        .entry({
            app: ["@scripts/app", "@styles/app"],
            editor: ["@scripts/editor", "@styles/editor"],
            admin: ["@sageAdmin/css/admin_styles", "@sageAdmin/js/sage-admin"],
            sageReact: ["@sageReact/app"],
            blog: ['@sageReact/Pages/Blog/blog-index'],
            // Vue Scripts
            // vue: ["@sageVue/app"],
            // blog: ['@sageVue/Pages/Blog/index'],
        })

        /**
         * Directory contents to be included in the compilation
         * @see {@link https://bud.js.org/docs/bud.assets/}
         */
        .assets(["images", "fonts"])

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
        )

        /**
         * Target URL to proxy for your local dev server.
         *
         * This should be the URL you use to visit your local development server.
         *
         * If using Laravel/Valet, use `valet secure sitename` to mimic the dev/staging/prod
         * server as closely as possible and eliminate http/https cross-contamination
         * @see {@link https://bud.js.org/docs/bud.proxy/}
         */
        .proxy("https://boilerplate8.1.test")

        /**
         * Development URL to be used in the browser.
         *
         * @see {@link https://bud.js.org/docs/bud.serve/}
         */
        .serve("http://localhost:3000")

        /**
         * URI of the `public` directory
         *
         * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
         */
        .setPublicPath("/app/themes/sage/public/")

        /**
         * Generate WordPress `theme.json`
         *
         * @note This overwrites `theme.json` on every build.
         *
         * @see {@link https://bud.js.org/extensions/sage/theme.json/}
         * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/}
         */
        .wpjson
        .settings(
            {
                color: {
                    custom: false,
                    customDuotone: false,
                    customGradient: false,
                    defaultDuotone: false,
                    defaultGradients: false,
                    defaultPalette: false,
                    duotone: [],
                },
                layout: {
                    "contentSize": "1536px",
                },
                custom: {
                    spacing: {},
                    typography: {
                        'font-size': {},
                        'line-height': {},
                    },
                },
                spacing: {
                    padding: false,
                    margin: false,
                    units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
                },
                typography: {
                    customFontSize: false,
                },
            }
        )
        .useTailwindColors()
        .useTailwindFontFamily()
        .useTailwindFontSize()
        .enable()

        /**
         * This is used to generate sourcemaps but only when
         * Bud ran in development mode
         */
        .when(bud.isDevelopment, bud => bud.devtool())
};
