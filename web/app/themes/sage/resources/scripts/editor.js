/**
 * @see {@link https://bud.js.org/extensions/bud-preset-wordpress/editor-integration/filters}
 */

roots.register.blocks('@scripts/backend/blocks');
roots.register.filters('@scripts/backend/filters');
roots.register.formats('@scripts/backend/formats');
roots.register.plugins('@scripts/backend/plugins');
roots.register.styles('@scripts/backend/styles');
roots.register.variations('@scripts/backend/variations');

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) {
    import.meta.webpackHot.accept(console.error)
}
