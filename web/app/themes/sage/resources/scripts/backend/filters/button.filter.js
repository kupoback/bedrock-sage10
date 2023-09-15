/**
 * @see {@link https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype}
 */
export const hook = 'blocks.registerBlockType';

/**
 * Filter handle
 */
export const name = 'core/button';

/**
 * Filter callback
 *
 * @param {object} settings
 * @param {string} name
 * @returns modified settings
 */
export function callback(settings, name) {
    if (name !== 'core/button') return settings;

    return {
        ...settings,
        styles: [
            {
                label: 'Button',
                name: 'btn',
                inlineStyle: '.btn',
                isDefault: true,
            },
            {
                label: 'Secondary Button',
                name: 'btn--secondary',
                inlineStyle: '.btn.btn__secondary'
            },
            {
                label: 'Large Button',
                name: 'btn--large',
                inlineStyle: '.btn.btn__large'
            },
            {
                label: 'Large Secondary Button',
                name: 'btn-secondary-large',
                inlineStyle: '.btn.btn__secondary-large'
            },
        ],
    };
}
