// @ts-check

/**
 * Build configuration
 *
 * @see {@link https://bud.js.org/guides/configure}
 * @param {import('@roots/bud').Bud} app
 */
export default async (app) => {
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
			// "@sageVue": "@src/vue",
		})

		/**
		 * Application entry points
		 *
		 * Paths are relative to your resources directory
		 */
		.entry({
			app: ["@scripts/app", "@styles/app"],
			editor: ["@scripts/editor", "@styles/editor"],
			admin: ["@sageAdmin/css/admin_styles", "@sageAdmin/js/sage-admin"],
			react: ["@sageReact/app"],
			// vue: ["@sageVue/app"],
			// blog: ['@sageVue/Pages/Blog/index']
			blog: ['@sageReact/Pages/blog-index']
		})

		/**
		 * These files should be processed as part of the build
		 * even if they are not explicitly imported in application assets.
		 */
		.assets(["images"])

		/**
		 * These files will trigger a full page reload
		 * when modified.
		 */
		.watch(
			[
				"app/**/*",
				// "resources/react/**/*", // Uncomment if using React
				"resources/vue/**/*", // Uncomment if using Vue
				"resources/views/**/*",
			]
		)

		/**
		 * Target URL to proxy for your local dev server.
		 *
		 * This should be the URL you use to visit your local development server.
		 *
		 * If using Laravel/Valet, use `valet secure sitename` to mimic the dev/staging/prod
		 * server as closely as possible and eliminate http/https cross-contamination
		 */
		.proxy("https://boilerplate8.1.test")

		/**
		 * Development URL to be used in the browser.
		 */
		.serve("http://0.0.0.0:3000")

		/**
		 * URI of the `public` directory
		 */
		.setPublicPath("/app/themes/sage/public/")

		/**
		 * Generate WordPress `theme.json`
		 *
		 * @note This overwrites `theme.json` on every build.
		 */
		.wpjson
		.settings({
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
		.useTailwindFontSize()
		.enable()
};
