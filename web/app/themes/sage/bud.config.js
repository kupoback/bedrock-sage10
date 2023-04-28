/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} bud
 */
module.exports = async (bud) => {
    /**
     * Quick call to minimize all the files
     * @param {Object} bud
     * @returns {any}
     */
    const minimizeFiles = (bud) => bud.minimize;
    /**
     * Quick call to set up the devtools with common call backs
     * @param {Object} bud
     * @returns {*}
     */
    const setDevTool = bud => bud.devtool(`inline-cheap-module-source-map`)
    /**
     * Bud ENV fetcher
     * @type {Env}
     */
    const budEnv = bud.env;

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
            //region React
            "@sageReact":       "@src/react",
            "@sageRedux":       "@sageReact/Redux",
            "@reactBlocks":     "@sageReact/Blocks",
            "@reactComponent":  "@sageReact/Components",
            "@reactPages":      "@sageReact/Pages",
            "@reactUtil":       "@sageReact/Util",
            "@reduxBlog":       "@sageRedux/features/blog",
            "@zustand":         "@src/react/Zustand",
            "@zustandPosts":    "@zustand/Posts",
            "@zustandSearch":   "@zustand/Search",
            //endregion
            //region Vue related content
            // "@vue": "@src/vue",
            // "@vueBlocks": "@vue/Blocks",
            // "@vueComponents": "@vue/Components",
            // "@vuePages": "@vue/Pages",
            // "@vueUtil": "@vue/Util",
            // "@vuex": "@vue/Vuex",
            // "@vuexPosts": "@vuex/posts/store"
            //endregion
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
            posts: ["@reactBlocks/Posts/index"],
            search: ["@reactPages/Search/index"]
        })
        /**
     * URI of the `public` directory
     *
     * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
     */
        .setPublicPath("/app/themes/sage/public/")
        /**
         * Directory contents to be included in the compilation
         * @see {@link https://bud.js.org/docs/bud.assets/}
         */
        .assets(["images", "fonts"]);

    bud.postcss
        .setPlugins({
            // ['tailwindcss']: await app.module.resolve('tailwindcss'),
            // ['nesting']: await app.module.resolve('tailwindcss/nesting/index.js'),
        })

    /**
     * This section is used to generate sourcemaps for
     * yarn local, and yarn dev, but not yarn production
     *
     * For yarn local, it'll also start the watcher
     * and browser-sync
     */
    budEnv.isNotEmpty('WP_ENV') && bud.when(
        budEnv.is(`WP_ENV`, 'local'),
        bud => {
            setDevTool(bud)
                .setUrl(budEnv.has('BUD_LOCALHOST')
                    ? budEnv.get('BUD_LOCALHOST')
                    : 'http://localhost:3000')
                .setProxyUrl(
                    budEnv.has('WP_HOME')
                        ? budEnv.get('WP_HOME')
                        : ''
                )
        },
        bud => minimizeFiles(bud)
    )
    .when(
        budEnv.is(`WP_ENV`, 'development'),
        bud => setDevTool(bud),
        bud => minimizeFiles(bud)
    )

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

    // If using Tailwind uncomment
    // app.tailwind
    //     .generateImports();

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
        // If using Tailwind uncomment
        // .useTailwindColors()
        // .useTailwindFontFamily()
        // .useTailwindFontSize()
        .enable();
};
