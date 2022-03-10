const mix = require("laravel-mix");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");

const assetPath = `./resources/assets`;
const browserUrl = "https://beboilerplate.test"; // Used for the frontend watcher

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */
mix.setPublicPath("./dist");

/**
 * Compiling the SASS
 */
mix.sass(`${assetPath}/styles/main.scss`, "styles")
   .options({
        processCssUrls: false,
        postCss: [
           require("autoprefixer"),
        ]
    });
   
/**
 * Compiling Vue JS
 * Uncomment to try Vue.
 */
// mix.vue({version: 2})
//    .js(`${assetPath}/vue/vue.js`, "scripts")
    
    /**
     * Compiling JS
     */
mix.js(`${assetPath}/scripts/main.js`, "scripts")
   .autoload({jquery: ["$", "window.jQuery"]})
   .extract();
   
/**
 * Copy the fonts and images to the dist folder
 */
mix.copyDirectory(`${assetPath}/fonts`, "dist/fonts")
    /**
     * Copy and compress SVG, JPEG, PNG, and Gifs
     */
   .webpackConfig({
        plugins: [
           new CopyWebpackPlugin({
                patterns: [
                   {
                        from: `${assetPath}/images`, // -> the source location (relative to where your webpack.mix.js is located)
                        to: "images", // Laravel mix will place this in 'dist/images'
                },
                ],
            }),
           new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                optipng: {optimizationLevel: 2},
                gifsicle: {optimizationLevel: 3},
                pngquant: {quality: "65-90", speed: 4},
                svgo: {
                    plugins: [
                       {removeViewBox: false},
                    ],
                },
                plugins: [imageminMozjpeg({quality: 75})],
            }),
       ],
    });
    // Comment out if not using font-awesome
   // .copyDirectory(`./node_modules/font-awesome/fonts`, "dist/fonts")
   
mix.browserSync({
    proxy: browserUrl,
    watch: true,
    files: [
        "./app/**/*.{php}",
        "./dist/**/*.{scss,css,js,vue}",
        "./resources/views/**/*.{php}",
        "./resources/views/**/*.{blade.php}"
    ],
    reloadOnRestart: true,
})

/**
     * Add source maps and version the files
     */
mix.sourceMaps();

/**
 * Version if in production
 */
if (mix.inProduction()) {
    mix.version(
        [
            'dist/scripts/manifest.js',
            'dist/scripts/vendor.js',
            'dist/scripts/main.js',
            // 'dist/scripts/vue.js', // Uncomment if using vue
            'dist/styles/main.css',
        ]
    );
}
