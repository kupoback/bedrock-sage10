import {domReady} from '@roots/sage/client';
import {registerBlockStyle, unregisterBlockStyle} from '@wordpress/blocks';

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

    const gutenbergContainer = document.querySelector('[class^="edit-post-visual-editor"]');
    console.log(gutenbergContainer)
    if (gutenbergContainer) {
        gutenbergContainer.classList.add('container');
    }
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);