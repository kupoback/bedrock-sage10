/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @param {import('@roots/bud').Bud} app
 */
module.exports = async (app) => {
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
            "@sageAdmin": "@src/admin_assets",
            "@sageReact": "@src/react",
            "@sageRedux": "@sageReact/Redux",
            "@reactBlocks": "@sageReact/Blocks",
            "@reactComponent": "@src/react/Components",
            "@reactPages": "@sageReact/Pages",
            "@reactUtil": "@sageReact/Util",
            "@reduxBlog": "@sageRedux/features/blog",
            "@zustand": "@src/react/Zustand",
            "@zustandGMaps": "@zustand/GoogleMap",
            "@zustandPosts": "@zustand/Posts",
            "@zustandSearch": "@zustand/Search"
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
            gMap: ["@reactBlocks/GoogleMap/index"],
            posts: ["@reactBlocks/Posts/index"],
            search: ["@reactPages/Search/index"]
        })
        /**
         * This is used to minimize all the files when Bud
         * runs in production mode
         */
        .minimize(app.isProduction)
        /**
         * Directory contents to be included in the compilation
         * @see {@link https://bud.js.org/docs/bud.assets/}
         */
        .assets(["images", "fonts"]);

    app
        .postcss
        .setPlugins({
            ['tailwindcss']: await app.module.resolve('tailwindcss'),
            ['nesting']: await app.module.resolve('tailwindcss/nesting/index.js'),
        });

    app
        .setUrl('http://localhost:3000')
        .setProxyUrl('https://boilerplate8.1.test')
        /**
         * URI of the `public` directory
         *
         * @see {@link https://bud.js.org/docs/bud.setPublicPath/}
         */
        .setPublicPath("/app/themes/sage/public/");

    app
        /**
         * This is used to generate sourcemaps but only when
         * Bud ran in development mode
         */
        .when(app.isDevelopment, app => app.devtool());

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
                "resources/vue/**/*",
            ]
        );

    // If using Tailwind uncomment
    app.tailwind
        .generateImports();

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
        .useTailwindColors()
        .useTailwindFontFamily()
        .useTailwindFontSize()
        .enable();
};
