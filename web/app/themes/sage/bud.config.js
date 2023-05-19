
/**
 * Quick call to minimize all the files
 * @param {Object} app
 * @returns {any}
 */
const minimizeFiles = (app) => app.minimize;
/**
 * Quick call to set up the devtools with common call backs
 * @param {Object} app
 * @returns {*}
 */
const setDevTool = app => app.devtool(`inline-cheap-module-source-map`);

/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} app
 */
module.exports = async (app) => {

    /**
     * Bud ENV fetcher
     * @type {Object}
     */
    const appEnv = app.env;

    app
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
            //region JS
            "@sageBlocks":      "@scripts/blocks",
            "@sageModules":     "@scripts/modules",
            "@sagePages":       "@scripts/pages",
            "@sagePlugins":     "@scripts/plugins",
            //endregion
            "@sageAdmin":       "@src/admin_assets",
            //region React
            "@reactBlocks":     "@sageReact/Blocks",
            "@reactComponent":  "@sageReact/Components",
            "@reactPages":      "@sageReact/Pages",
            "@reactUtil":       "@sageReact/Util",
            "@reduxBlog":       "@sageRedux/features/blog",
            "@sageReact":       "@src/react",
            "@sageRedux":       "@sageReact/Redux",
            "@zustand":         "@src/react/Zustand",
            "@zustandPosts":    "@zustand/Posts",
            "@zustandSearch":   "@zustand/Search",
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
            'admin': ["@sageAdmin/css/admin_styles", "@sageAdmin/js/sage-admin"],
            'app': ["@scripts/app", "@styles/app"],
            'editor': ["@scripts/editor", "@styles/editor"],
            'posts': ["@reactBlocks/Posts/index"],
            'sageReact': ["@sageReact/app"],
            'search': ["@reactPages/Search/index"],
        })
        /**
         * Directory contents to be included in the compilation
         * @see {@link https://bud.js.org/docs/bud.assets/}
         */
        .assets(["fonts", "images",]);

    /**
     * URI of the `public` directory
     *
     * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
     */
    app.setPublicPath("/app/themes/sage/public/")

    app.postcss
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
    appEnv.isNotEmpty('WP_ENV') && app.when(
        appEnv.is(`WP_ENV`, 'local'),
        app => {
            setDevTool(app)
                .setUrl(appEnv.has('BUD_LOCALHOST')
                    ? appEnv.get('BUD_LOCALHOST')
                    : 'http://localhost:3000')
                .setProxyUrl(
                    appEnv.has('WP_HOME')
                        ? appEnv.get('WP_HOME')
                        : ''
                )
        },
        app => minimizeFiles(app)
    )
    .when(
        appEnv.is(`WP_ENV`, 'development'),
        app => setDevTool(app),
        app => minimizeFiles(app)
    )

    app
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
    app
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
