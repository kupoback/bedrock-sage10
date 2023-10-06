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
export default async (app) => {

    /**
     * Bud ENV fetcher
     * @type {Object}
     */
    const appEnv = app.env;

    /**
     * Adds support for JSX to the path resolutions
     */
    app.config(existingConfig => {
        const resolve = existingConfig.resolve;
        resolve.extensionAlias['.js'].push('.jsx')
        resolve.extensions.push('.jsx')
        return ({
            ...existingConfig,
            resolve,
        })
    })

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
            "@sageCommon":      "@styles/common",
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
            "@sageReact":       "@src/react",
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
     * Add external dependencies to be loaded site wide
     * so that it's omitted from the individual files
     */
    app.bundle(
            'vendor',
            [
                'axios',
                'lodash-es',
                'mitt',
                'react',
                'react-dom',
                'react-paginate',
                'zustand'
            ]
        )

    /**
     * URI of the `public` directory
     *
     * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
     */
    app.setPublicPath("/app/themes/sage/public/")

    app.postcss
        .getPlugins({
            ['tailwindcss']: await app.module.resolve('tailwindcss'),
            ['nesting']: await app.module.resolve('tailwindcss/nesting/index.js'),
         });

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
        );

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
     * @see {@link https://bud.js.org/extensions/sage/theme.json}
     * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json}
     */
    app.wpjson
        .setSettings({
            color: {
                custom: false,
                customDuotone: false,
                customGradient: false,
                defaultDuotone: false,
                defaultGradients: false,
                defaultPalette: false,
                duotone: [],
            },
            custom: {
                spacing: {},
                typography: {
                    'font-size': {},
                    'line-height': {},
                },
            },
            spacing: {
                padding: true,
                units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
            },
            typography: {
                customFontSize: false,
            },
        })
        .useTailwindColors()
        .useTailwindFontFamily()
        .useTailwindFontSize();
};
