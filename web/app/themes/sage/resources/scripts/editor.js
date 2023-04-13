import domReady from '@roots/sage/client/dom-ready';
import {registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import {addFilter} from "@wordpress/hooks";

/**
 * editor.main
 */
const main = (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }
    unregisterBlockStyle('core/button', 'outline');

    registerBlockStyle('core/button', {
        name: 'outline',
        label: 'Outline',
    });

    /**
     * Used to change the className appended to the group block
     * @param className
     * @param blockName
     * @returns {string|*}
     */
    const setGroupBlockClassName = ( className, blockName ) => blockName === 'core/group' ? `${className} group-container` : className;

    addFilter(
        'blocks.getBlockDefaultClassName',
        'sage/set-block-custom-class-name',
        setGroupBlockClassName
    )

    /**
     * Allows the adding of a class to the editor-styles-wrapper
     */
    setTimeout(() => {
        const gutenbergContainer = document.querySelector('[class^="editor-styles-wrapper"]');
        if (gutenbergContainer) {
            gutenbergContainer.classList.add('container');
        }
    }, 1000);
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
