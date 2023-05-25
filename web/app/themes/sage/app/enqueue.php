<?php
/**
 * The purpose of this file is for adding assets to templates
 * or Views with localized scripts and keeping the setup.php
 * file a bit cleaner
 */

namespace App;

use App\Classes\AcfNestedFields;

use function Roots\bundle;

/**
 * Search Page enqueue
 */
add_action('wp_enqueue_scripts', function () {
    /**
     * Add localized args to the Search Page
     * loading the values from Theme Settings
     */
    if (is_search()) {
        bundle('search')
            ->enqueue()
            ->localize(
                'SEARCH',
                collect(
                    (new AcfNestedFields(
                    // Add any other fields to pass to localized args
                        [
                            'resetSearch',
                            'searchLabel',
                            'searchPlaceholder',
                            'searchSubmit',
                            'searchNoResults'
                        ],
                        'theme_settings'
                    ))
                        ->getFields()
                )
                    ->put('api', rest_url('sage/v1/search'))
                    ->sortKeys()
                    ->toArray()
            );
    }
}, 100);

