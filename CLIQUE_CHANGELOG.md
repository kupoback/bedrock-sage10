---

# Clique Wordpress Boilerplate Changelog

# Ver 4.1.1 - Jun 9th, 2022

- Set minimum php version to `^8.0.0` for theme and Bedrock
- Ran `composer update` on Bedrock dependencies
  - `roave/security-advisories` - `dev-master eb3f283`

# Ver 4.1 - Jun 8th, 2022

- Added support for React and Redux in the Sage 9 theme
  - This can be uncommented from `webpack.mix.js` and `setup.php` then `yarn build` can be ran
- Fixes to Vue Navigation
- Ran `composer update` on WordPress Core
  - `5.9.1` - `6.0.0`
- Ran `composer update` on WordPress Plugins
  - Advanced Custom Fields - `5.12.2`
  - ACF Gravity Forms - `1.3.4`
  - All In One WP Security and Firewall - `4.4.12`
  - GDPR Cookie Notice - `2.3.0`
  - Gravity Forms - `2.6.3`
  - MainWP Child - `4.2.3`
  - Optimus - `1.6.2`
  - Safe SVG - `2.0.1`
  - UpdraftPlus - `2.22.12.25`
  - WordFence - `7.5.10`
  - Yoast SEO - `19.0`
- Ran `composer update` on Bedrock Dependencies
  - `composer/installers` - `v2.1.1`
  - `symfony/polyfill-ctype` - `v1.26.0`
  - `roave/security-advisories` - `dev-master 961eba3`
  - `roots/wp-password-bcrypt` - `1.1.0`
  - `symfony/polyfill-php80` - `v1.26.0`
  - `symfony/polyfill-mbstring` - `v1.26.0`
- Ran `composer update` on Sage 9 Dependencies
  Upgrading composer/installers (v2.0.1 => v2.1.1)
    - `illuminate/bus` - `v8.83.16`
    - `illuminate/collections` - `v8.83.16`
    - `illuminate/config` - `v8.83.16`
    - `illuminate/console` - `v8.83.16`
    - `illuminate/container` - `v8.83.16`
    - `illuminate/contracts` - `v8.83.16`
    - `illuminate/events` - `v8.83.16`
    - `illuminate/filesystem` - `v8.83.16`
    - `illuminate/macroable` - `v8.83.16`
    - `illuminate/pipeline` - `v8.83.16`
    - `illuminate/support` - `v8.83.16`
    - `illuminate/view` - `v8.83.16`
    - `nesbot/carbon` - `2.58.0`
    - `symfony/console` - `v5.4.9`
    - `symfony/deprecation-contracts` - `v2.5.1`
    - `symfony/finder` - `v5.4.8`
    - `symfony/polyfill-ctype` - `v1.26.0`
    - `symfony/polyfill-intl-grapheme` - `v1.26.0`
    - `symfony/polyfill-intl-normalizer` - `v1.26.0`
    - `symfony/polyfill-mbstring` - `v1.26.0`
    - `symfony/polyfill-php73` - `v1.26.0`
    - `symfony/polyfill-php80` - `v1.26.0`
    - `symfony/polyfill-php81` - `v1.26.0`
    - `symfony/process` - `v5.4.8`
    - `symfony/service-contracts` - `v2.5.1`
    - `symfony/string` - `v5.4.9`
    - `symfony/translation` - `v5.4.9`
    - `symfony/translation-contracts` - `v2.5.1`


# Ver 4.0 - Mar 10, 2022

## Major Changes

### Sage 9 is now php 8.0 ready - Thanks Justin!
 
- php version minimum is `7.4`
- php version max is `8.0`
- Symfony upgraded from `5.6` to `8.83`
  - [Documentation](https://laravel.com/docs/8.x/)

### Sage 9's webpack 3.0 has been replaced by `laravel-mix`
  - [Project Repo](https://github.com/laravel-mix/laravel-mix)
  - [Documentation](https://github.com/laravel-mix/laravel-mix/tree/master/docs)
  - `node-engine` minimum bumped up to `14.0`
  - `node-engine` tested up to `17.7.0`
  - `yarn watch` works once again!
  - Compile non-prod time for base boilerplate is now ~4s
  - Compile prod time for base boilerplate is now ~6.5s

## Minor Changes
- Ran `composer update` on WordPress Core
  - `5.9.1`
- Ran `composer update` on WordPress Plugins
    - Advanced Custom Fields - `5.12`
    - GDPR Cookie Notice - `2.2.3`
    - MainWP Child - `4.1.10`
    - Redirection - `5.2.3`
    - Safe SVG - `1.9.10`
    - Stream - `3.9.0`
    - UpdraftPlus - `2.22.8.25`
    - WordFence -`7.5.8`
    - Yoast SEO - `18.3`
- Ran `composer update` on Bedrock Dependencies
    - `roav-security-advisories` - `dev-master 57a3432`
    - `symfony/polyfill-ctype` - `v1.25.0`
    - `symfony/polyfill-mbstring` - `v1.25.0`
    - `symfony/polyfill-php80` - `v1.25.0`
- Ran `composer update` on Sage 9 Dependencies
    - Adjusted `composer.json` to include new `sage-installers` and `sage-lib` from Justin
    - Removed `kylekatarnls/update-helper`
    - Removed `paragonie/random_compat`
    - Removed `psr/log`
    - Removed `symfony/debug`
    - Added `brick/math` - `0.9.3`
    - Added `illuminate/bus` - `v8.83.4`
    - Added `illuminate/collections` - `v8.83.4`
    - Added `illuminate/macrobable` - `v8.83.4`
    - Added `illuminate/pipeline` - `v8.83.4`
    - Added `ramsey/collection` - `v1.2.2`
    - Added `symfony/polyfill-intl-grapheme` - `v1.25.0`
    - Added `symfony/polyfill-intl-normalizer` - `v1.25.0`
    - Added `symfony/polyfill-81` - `v1.25.0`
    - Added `symfony/string` - `v5.4.3`
    - Added `coku/portable-ascii` - `v1.6.1`
    - Updated `brain/hierarchy` - `2.7.0`
    - Updated `composer/installers` - `v2.0.1`
    - Updated `doctrine/inflector` - `2.0.4`
    - Updated `illuminate/config` - `v8.83.4`
    - Updated `illuminate/console` - `v8.83.4`
    - Updated `illuminate/container` - `v8.83.4`
    - Updated `illuminate/contracts` - `v8.83.4`
    - Updated `illuminate/events` - `v8.83.4`
    - Updated `illuminate/filesystem` - `v8.83.4`
    - Updated `illuminate/support` - `v8.83.4`
    - Updated `illuminate/view` - `v8.83.4`
    - Updated `nesbot/carbon` - `v2.57.0`
    - Updated `ramsey/uuid` - `v4.2.3`
    - Updated `roots/sage-installer` - `dev-master 50c9698`
    - Updated `roots/sage-lib` - `dev-master 9be12ac`
    - Updated `squizlabs/php_codesniffer` - `3.6.2`
    - Updated `symfony/console` - `v5.4.5`
    - Updated `symfony/finder` - `v5.4.5`
    - Updated `symfony/polyfill-ctype` - `v1.25.0`
    - Updated `symfony/polyfill-mbstring` - `v1.25.0`
    - Updated `symfony/polyfill-php73` - `v1.25.0`
    - Updated `symfony/polyfill-php80` - `v1.25.0`
    - Updated `symfony/process` - `v5.4.5`
    - Updated `symfony/translation` - `v5.4.6`
- Updates to the `.env.example` file
- Added notice for admin to not install or update plugins outside composer if the environment allows for such.

# Ver 3.17 - Jan 31, 2022

- Ran `composer update` on WordPress Core
    - `5.8.2` = `5.9`
- Ran `composer update` on WordPress Plugins
    - Gravity Forms - `2.5.16`
    - UpdraftPlus - `2.22.1.25`
    - ACF Gravity Forms Add On - `1.2.10`
    - MainWP Child - `4.1.9`
    - Redirections - `5.2.2`
    - Yoast SEO - `18.0`
- Removed WP Accessibility as it's not in our launch checklist, and unsure if anyone uses it for launch
- Ran `composer update` on Bedrock dependencies
    - `symfony/polyfill-ctype` - `v1.24.0`
    - `roave/security-advisories` - `dev-master f2fdb4f`
    - `symfony/polyfill-80` - `v1.24.0`
    - `symfony/polyfill-mbstring` - `v1.24.0`
- Ran `composer update` on Sage 9 dependencies
    - `symfony/polyfill-73` - `v1.24.0`
    - `symfony/polyfill-80` - `v1.24.0`
    - `symfony/polyfill-mbstring` - `v1.24.0`
    - `symfony/polyfill-ctype` - `v1.24.0`
    - `symfony/translation` - `v4.4.37`
    - `symfony/finder` - `v4.4.37`
    - `symfony/console` - `v4.4.37`
    - `symfony/debug` - `v4.4.37`
- Added missing folder `acf-json` with `.gitkeep` in the Sage 9 Theme -- Thanks Chris for catching this

# Ver 3.16 - Dec 16, 2021

- Added default image sizes, with no heights to maintain aspect ratio, and disabled cropping
    - `thumbnail` => Thumbnail - 300px wide
    - `medium` => Medium - 768px wide
    - `medium_large` => Medium Large - 1024px wide - This is a hidden image size in WP
    - `large` => Large - 1280px wide
- Added a banner image size of 1920px wide, with no defined height 
- Added a filter for adding the new banner selection in the Media item dropdown, and allowing for a dev to add more image sizes if the project calls for it

# Ver 3.15 - Dec 14, 2021

- Ran `composer update` on WordPress Core 
    - `5.8.1` - `5.8.2`
- Ran `composer update` on WordPress Plugins
    - Advanced Custom Fields Pro - `5.11.4`
    - Gravity Forms - `2.5.15`
    - GDPR Cookie Notice - `2.2.1`
    - UpdraftPlus - `2.16.66.25`
    - W3 Total Cache - `2.2.1`
    - WordFence - `7.5.7`
    - WP Accessibility - `1.7.11`
    - Yoast SEO - `17.8`
- Ran `composer update` on Bedrock dependencies
    - `roave/security-advisories` - `dev-master 92e217f`
    - `squizlabs/php_codesniffer` - `3.6.2`
    - `grahm-campbell/result-type` - `v1.0.4`
    - `vlucas/phpdotenv` - `v5.4.1`
- Ran `composer update` on Sage 9 theme
    - `symfony/translation-contracts` - `v2.5.0`
    - `symfony/translation` - `v4.4.34`
    - `psr/container` - `1.1.2`
    - `symfony/deprecation-contracts` - `v2.5.0`
    - `symfony/service-contracts` - `v2.5.0`
    - `symfony/console` - `v4.4.34`

- Theme updates to Vue
    - Moved the Vuex scripts to their own functionality type file
    - Updated the way the navigation API data is fetched

# Ver 3.14 - Oct 21, 2021

- Ran `composer update` on WordPress Plugins
  - Gravity Forms - `2.5.13`
  - Updraft Plus - `2.16.62.25`
  - GDPR Cookie Notice - `2.1.5`
  - MainWP Child - `4.1.7.1`
  - Stream - `3.8.2`
  - W3 Total Cache - `2.1.9`
  - Wordfence - `7.5.6`
  - Yoast SEO - `17.4`
- Ran `composer update` on Bedrock dependencies
  - `roave/security-advisories` - `dev-master 0488e16`
  - `squizlabs/php_codesniffer` - `3.6.1`
  - `graham-campbell/result-type` - `v1.0.3`
  - `vlucas/phpdotenv` - `v5.3.1`
- Ran `composer update` on Sage 9 theme
  - `symfony/translation` - `v4.4.32`
  - `ramsey/uuid` - `3.9.6`
  - `smyfony/debug` - `v4.4.31`

# Ver 3.13.1 - Sept 28, 2021

- Fixing issue with ImageHelper and Safari not displaying the image - Thanks John!
  - [Issue #6](https://bitbucket.org/clique_studios/new-backend-boilerplate/issues/6/imagehelper-src-vs-content-bug)
- Tweak to the `config/environment/staging.php` file

# Ver 3.13 - Sept 21, 2021

### Bedrock
- Ran `composer update` on WordPress Plugins
  - Advanced Custom Fields - `5.10.2`
  - Gravity Forms - `2.5.10`
  - ACF Gravity Forms Addon - `1.2.9`
  - GDPR Cookie Notice - `2.1.4`
  - MainWP Child Reports - `2.0.8`
  - Stream - `3.8.1`
  - W3 Total Cache - `2.1.8`
  - Wordfence - `7.5.5`
  - Yoast SEO - `17.2`
  - WP Accessibility - `1.7.9`
  - WP Rest Cache - `2021.4.1`
- Added WordPress Plugins
  - ACF Content Analysist for Yoast - `3.0.1`
- Removed WordPress Plugins
  - cedaro/satispress - Removed due to only needed on https://prod.bedrock.cliquedomains.com and Bedrock will still download from there.
- Ran `composer update` on WordPress Core
  - `5.8.1`
- Ran `composer update` on Bedrock Dependencies
  - composer/installers - `v1.12.0`
  - roave/security-advisories - `dev-master 4911abe`
  - phpoption/phpoption - `1.8.0`
  - graham-campbell/result-type - `v1.0.2)`
  - composer/installers - `v1.12.0`
- Removed `WP_CACHE` define in development and staging config files
- Disabled the ability to add plugins/themes/file editing on `WP_ENV` staging

### Sage 9

- Ran `composer update` on Sage 9 Dependencies
    - composer/installers - `v1.12.0`
    - symfony/translation - `v4.4.30`
    - paragonie/random_compat - `v9.99.100`
    - ramsey/uuid - `3.9.4`
    - symfony/finder - `v4.4.30`
    - symfony/console - `v4.4.30`
- Updated `package.json` 
  - axios - `0.21.4` due to major security vulnerability
- Added `log1x/sage-directives` to the theme folder to add some useful blade directives
- Updated the ImageHelper class to support picture classes
- Updated the Rest Routes to better use Traits for making registration of routes easier
- Moved Theme Settings ACF method to App\Traits
- Added `plugins` folder for `scripts` in case FE dev adds a downloaded plugin outside of `package.json` 

# Ver 3.12 - Aug 6th, 2021

- Ran `composer update` on Wordpress Plugins
    - W3 Total Cache - `2.1.6`
- Ran `composer update` on Bedrock Core
    - `roots/bedrock-disallow-indexing` - `2.0.0`
- Ran `composer update` on Sage 9 theme
    - **Removed composer 2 requirements**
    - `symfony/polyfill-php80` - `v1.23.1`
    - `symfony/polyfill-mbstring` - `v1.23.1`
    - `symfony/translation` - `v4.4.27`
    - `symfony/finder` - `v4.4.27`
    - `symfony/console` - `v4.4.27`
    - `symfony/debug` - `v4.4.27`

- Added bedrock-autoloader to the `mu-plugins` as is up to date with the Bedrock repo
    - This now adds the mu-plugin and a notice for the disallowing of indexing of a site
- Updated `config` files for `development.php` and `staging.php`
    - Still hiding php errors displayed on dev
    - Added config define on dev
    - Removed all duplicates from `development.php` in `staging.php` aside from `DISALLOW_INDEXING`. No more debug logs on staging

# Ver 3.11 - Aug 2nd, 2021

- Ran `composer update` on Wordpress Core and Plugins
    - Advanced Custom Fields - `5.9.9`
    - Classic Editor - `1.6.2`
    - Gravity Forms - `2.5.8`
    - Redirection - `5.1.3`
    - Yoast SEO - `16.8`
- Ran `composer update` on Bedrock dependencies
    - `roave/security-advisors` - `dev-master 52a1261`
    - symfony/polyfill-php80` - `v1.32.1
    - symfony/polyfill-mbstring` - `v1.32.1
- Updated `application.php` to remove `$_SERVER` call exposing env contents

# Ver 3.10 - July 20th, 2021

- Ran `composer update` on WordPress Core and Plugins
    - WordPress Core - `5.8`
    - Advanced Custom Fields - `5.9.8`
    - All In One WP Security and Firewall - `4.4.9`
    - Classic Editor - `1.6.1`
    - Cookie Notice - `2.1.0`
    - Gravity Forms - `2.5.7`
    - MainWP Child - `4.1.7`
    - Redirection - `5.1.2`
    - UpdraftPlus - `2.16.59.25`
    - W3 Total Cache - `2.1.5`
    - Yoast SEO - `16.7`
- Ran `composer update` on Bedrock dependencies
    - `roave/security-advisories` - `dev-master 062365f`
- Added W3 Total Cache `define` in `config/application.php` and `config/environments/development.php` in case it's removed when the `wp-config.php` file is replaced ever
- Added `.user.ini.example` as a reference for when calling to the path for `wordfence-waf.php` which is placed in the `web/wp` folder, and could be removed on core update
- Added param types to methods in Helper and Routes for ease of use

**Theme**

- Ran `composer update` on Sage 9 Core
    - `symfony/translation` - `v4.4.26`
    - `symfony/console` - `v4.4.26`
- Updated `php` required version to `7.4` in `composer.json`
- Updated `php error` in `functions.php` to indicate a minimum of `7.4` is used
- Updated the webpack to compile Vue scripts separately from `main.js`
- Updated `setup.php` to register the `vue.js` and only enqueue it if it's uncommented out in `wp_enqueue_scrips` action
- Updated REST API Endpoints to include a `permission_callback`
- Added correct callbacks in Classes per `phpcs`

# Ver 3.9.1.2 - June 17th, 2021

- Moved the `_wordpress.scss` file out of a folder that could be overwritten when a FE project is merged into the `styles` folder.
- Updated to `SageNavRestAPI`
    - Removed extra comma in old method
    - Changed main method to return only parent items and renamed it `navWOChildren`
        - Minor optimization to the collection return to filter out empty arrays and reset the key indexs
    - Added second method, `navWithChildren`, to return parent items with 1st level of children.
        - Added new endpoint for it `get-nav-with-children`
- Adjusted `Link.vue` to check if the `menuItem` has the property `children`
- Disabled the rest API registration in `setup.php`
- Removed lingering `view` directory under `resources/assets`

# Ver 3.9.1.1 - June 10th, 2021

- Fixed another issue with `ImageHelper::imgSrcSet` and `ImageHelper::imgSrcSetCaption` methods not returning webp's for svg's
- Fixed issue with svg's unable to return due to no original source

# Ver 3.9.1 - June 9th, 2021

- Fixed issue with `ImageHelper::imgSrcSet` and `ImageHelper::imgSrcSetCaption` methods not returning webp's
- Ran `composer update` on WordPress Plugins
    - Advanced Custom Fields - `5.9.6`
    - Gravity Forms - `2.5.5`
    - Optimus - `1.6.1`
    - UpdraftPlus - `2.16.58.25`
    - W3 Total Cache - `2.1.3`
    - Wordfence - `7.5.4`
    - Yoast SEO - `16.4`
- Ran `composer update` on Bedrock dependencies
    - symfony/pollyfil-ctype - `dev-master 14f52bf`
    - symfony/pollyfil-mbstring - `v1.23.0`
    - symfony/pollyfil-php80 - `v1.23.0`
- Ran `composer update` on Sage 9 Theme
    - soberwp/controller - `2.1.3`
    - symfony/console - `v4.4.25`
    - symfony/debug - `v4.4.25`
    - symfony/finder - `v4.4.25`
    - symfony/polyfill-ctype - `v1.23.0`
    - symfony/polyfill-mbstring - `v1.23.0`
    - symfony/polyfill-php73 - `v1.23.0`
    - symfony/polyfill-php80 - `v1.23.0`
    - symfony/translation - `v4.4.25`

# Ver 3.9.0 - May, 18th, 2021

- Updated README.md to add a link to the new Wiki
- Ran `composer update` on WordPress Core - `5.7.2`
- Ran `composer update` on WordPress Plugins
    - Cookie Notice - `2.0.4`
    - Gravity Forms - `2.5.1`
    - Stream - `3.7.0`
    - Wordfence - `7.5.3`
    - UpdraftPlus - `2.16.57.25`
    - Yoast SEO - `16.3`
- Ran `composer update` on Bedrock dependencies
    - Composer Installers - `v1.11.0`
    - PSR/log - `1.1.4`
    - Security Advisories - dev-master 42840dc`
- Ran `composer update` on Sage 9 Theme
    - Composer Installers - `v1.11.0`
    - Symfony/translation - `v4.4.23`
    - Symfony/finder - `v4.4.23`
    - Symfony/console - `v4.4.23`
    - Symfony/debug - `v4.4.23`
    - PSR/log - `1.1.4`

# Ver 3.8.1 - Apr, 22nd, 2021

**Updates**

- Ran `composer update` on WordPress Core - `5.7.1`
- Ran `composer update` on WordPress Plugins
    - ACF Gravity Forms Addon - `1.2.8`
    - Gravity Forms - `2.4.24`
    - MainWP Child - `4.1.6.1`
    - Redirection - `5.1.1`
    - UpdraftPlus - `2.16.53.25`
    - W3 Total Cache - `2.1.2`
    - WP REST Cache - `2021.3.0`
    - Yoast SEO - `16.1.1`
- Ran `composer update` on Bedrock dependencies
    - Security Advisories - `dev-master 593c4de`
    - Squizlabs PHPCS - `3.6.0`
- Ran `composer update` on Sage 9 Theme
    - Translation Contracts - `v2.4.0`
    - Translation - `v4.4.21`
    - Inflector - `1.4.4`
    - Service Contracts - `v2.4.0`
    - Console - `v4.4.21`

# Ver 3.8 - Mar 25th, 2021

**New**

- Added Routes folder to app for API related routes used on the site.
    - There's an init.php that is included in the functions.php so that instantiated classes can be called there.
    - Added REST API for Blog Posts. This is commented out by default in Routes/init
    - @TODO Need to find a better "plugin" approach to this.
- Added Helper folder with a default Helper Class there that contains a method to generate a picture with webp and default image type sources, and an image tag.

**Updates**

- Ran `composer update` on WordPress Core - `5.7.0`
- Ran `composer update` on WordPress Plugins
    - All In One WP Security - `4.4.8`
    - Cookie Notice & Compliance for GDPR / CCPA - `2.0.3`
    - Gravity Forms - `2.4.23`
    - MainWP Child - `4.1.5`
    - Updraft Plus - `2.16.50.25`
    - W3 Total Cache - `2.1.1`
    - Wordfence Security - `7.5.2`
    - WP Accessibility - `1.7.7`
    - WP REST Cache - `2021.2.1`
    - Yoast SEO - `16.0.2`
- Ran `composer update` on Bedrock dependencies
    - psr/container - `1.1.1`
    - pimple/pimple - `v3.4.0`
    - rovae/security-advisories - `dev-master 3dfe1d2`
    - sympony/polyfill-php80 - `v1.22.1`
    - sympony/polyfill-mbstring - `v1.22.1`
    - sympony/polyfill-ctype - `v1.22.1`
- Ran `composer update` on Sage theme
    - symfony/polyfill-mbstring - `v1.22.1`
    - symfony/translation - `v4.4.20`
    - psr/container - `1.1.1`
    - symfony/polyfill-ctype - `v1.22.1`
    - symfony/finder - `v4.4.20`
    - symfony/polyfill-php80 - `v1.22.1`
    - symfony/polyfill-php73 - `v1.22.1`
    - symfony/console - `v4.4.20`
    - symfony/debug - `v4.4.20`
- Updated `.gitignore` to remove the wflogs from being committed

# Ver 3.7.8 - Feb 12th, 2021

- Ran `composer update` for WordPress Core - `5.6.1`
- Ran `composer update` for WordPress Plugins
    - Advanced Custom Fields Pro - `5.9.5`
    - Cookie Notice - `2.0.2`
    - MainWP Child Support - `2.0.7`
    - Stream - `3.6.2`
    - Yoast SEO - `15.8`
    - WP REST Cache - `2021.1.0`
- Ran `composer update` for Bedrock dependencies
    - Security Advisors

# Ver 3.7.7 - Jan 29th, 2021

- Updates to the `README.md` including:
    - Added Quicklinks navigation
    - Added instructions for wp-cli database addition
    - Minor formatting tweaks

# Ver 3.7.6 - Jan 27th, 2021

- Ran `composer update` on WordPress Plugins
    - Redirection - `5.0.1`
    - Updraft Plus - `2.16.47.25`
    - Yoast SEO - `15.7`
- Worked on some theme webpack issues regarding importing fonts from SCSS and the browser able to resolve their path

# Ver 3.7.5 - Jan 25th, 2021

- Ran `composer update` on Bedrock Core
    - Composer Installers
    - Security Advisories
- Ran `composer update` on WordPress plugins
    - Advanced Custom Fields - `5.9.4`
    - MainWP Child - `4.1.4`
    - Redirection - `5.0`
    - W3 Total Cache - `2.1.0`
- Ran `composer update` on Sage 9 theme
    - Various polyfill updates for php versions and mbstring
- Added update to `README.md` to mention setting a `DB_PREFIX` in the `.env` file on initial site setup for launch checklist security requirements.

## Ver 3.7.4 - Jan 12th, 2021

- Ran `composer update` on Bedrock Core
    - Polyfill updates
- Ran `composer update` for WordPress Plugins:
    - WP Accessibility - `1.7.6`
    - Yoast SEO - `15.6.2`
- Added ACF Gravity Forms field plugin to allow selecting of GF via ACF
- Added `siteName` to Nav localized args
- Made an adjustment to the Vue Navigation to use `v-bind:class`, and keep for better code consistency

## Ver 3.7.3 - Jan 6th, 2021

- Ran `composer update` on Bedrock Core:
    - Security Advisories
- Ran `composer update` on WordPress Plugins:
    - All In One WP Security and Firewall - `4.4.6`
    - Gravity Forms - `2.4.22`
    - MainWP Child - `4.1.3.1`
    - Updraft Plus - `2.16.46.24`
    - W3 Total Cache - `2.0.1`
    - WP Accessibility - `1.7.5`
- Ran `composer update` on Sage Theme Core

## Ver 3.7.2 - Dec 16th, 2020

- Added `composer.lock` back to the repo
- Ran `composer update` on WordPress Core to `5.6.0`
- Ran `composer update` on WordPress Plugins:
    - All In One WP Security and Firewall - `4.4.5`
    - Updraft Plus - `2.16.42.24`
    - Yoast SEO - `15.5`
- Added missing WP Rest Cache plugin
- Removed REST API Toolbox - no longer maintained or used
- Added filter for caching navigation endpoint

## Ver 3.7.1 - Dec 8th, 2020

- Fixed issue with declaraion of class `SageNavRestAPI` in `setup.php`

## Ver 3.7.0 - Dec 7th, 2020

- Added Vue Navigation with REST API serving the data - **This is disabled by default**
- Uncomment the following below to use
    - `header.blade.php` - See comment blocks
    - `setup.php` - Uncomment block in `wp_enqueue_scripts` action for localize script
- Added documentation to `README.md` on how to use Vue Navigation
- Updated WordPress Plugins:
    - MainWP Child - `4.1.3`
- Updated `README.md` to include instructions on setting up an existing site and how to use new Vue Navigation

## Ver 3.6.0 - Dec 4th, 2020

- Added [Vue Accessible Modal](https://github.com/andrewvasilchuk/vue-accessible-modal) to `package.json` and updated example Vue modal
- Ran `composer update` to update Sage 9 composer packages.
- Updated node packages in Sage 9
- Ran `composer update` to update WordPress plugins
    - Updraft Plus - `2.16.41.24`
    - Wordfence - `7.4.14`
    - Yoast SEO - `15.4`
- Updated Bedrock dependencies
    - vlucas/phpdotenv - `5.2.0`
    - squizlabs/php_codesniffer - `3.5.8`
- Updated `application.php` to use `phpdotenv -v 5.2.0`
- Updated `README.md`

## Ver 3.5.0 - Nov 17th, 2020

- Ran composer update to update WordPress Core to `5.5.3` and changed `composer.json` to install latest `5.5` version
- Updated WordPress Plugins
    - ACF - `5.9.3`
    - Gravity Forms - `2.4.21`
    - Redirection - `4.9.2`
    - Stream - `4.9.2`
    - UpdraftPlus - `2.16.34.24`
    - W3 Total Cache - `0.15.2`
    - WordFence - `7.4.12`
    - Yoast SEO - `15.3`
- Updated Bedrock dependencies
- Added Plugins
    - MainWP Child
    - MainWP Child Reports
- Updated Sage 9 composer pacakges

## Ver 3.4.0 - Sept 15th, 2020

- Updated Bedrock instance to the latest version of [github repo 1.14.2](https://github.com/roots/bedrock/releases/tag/1.14.2)
    - Composer package versions
    - `web/app/mu-plugins/bedrock-autoloader.php` was broken, throwing errors
    - `config/application.php` with db creds exposed to `$_SERVER` fixed
    - Added `.editorconfig` file for linter
- Updated WordPress Core to `5.5.1`
- Updated Plugins
    - ACF - `5.9.1`
    - Gravity Forms - `2.4.20`
    - Updraft Plus - `2.16.29.24`
    - Classic Editor - `1.6`
    - Stream - `3.5.1`
    - W3 Total Cache - `0.14.4`
    - Yoast - `14.9`
    - Wordfence - `3.5.6`

## Ver 3.3.2 - Sept 4th, 2020

- Added 404 Controller
- Added `protected $acf` array var to Controllers

## Ver 3.3.1 - Aug 5th, 2020

- Due to issue resolved by Justin, dropped `illuminate/support` back to `5.6.*`

## Ver 3.3.0 - July 30th, 2020

### Global Updates

- Updated composer.json to omit SatisPress
- Updated auth.json to showcase credentials for new Bedrock BP Plugin site
- Removed old wp-premium dependency for ACF Pro and Gravity Forms
- Updated ACF Pro, Gravity Forms and added UpdraftPlus Pro to composer.json, pulling in from new Bedrock BP Plugin site
- Updated `README.md` install instructions for premium plugins

### Sage 9 Updates

- Ran updates to the Sage 9 `composer.json`
- Updated `.travis.yml` to phase out php versions 7.1, and 7.2
- Added support for php 7.4 in `.travis.yml`
- Added support for node 12 in `.travis.yml`

## Ver 3.2.0 - Apr 9th, 2020

### Global Updates

- Updated `composer.json` version files
- Worked on updating the `README.md` with instructions on migration and it's process
- Set minimum php version for Bedrock to `7.3`
- Updated WordPress to 5.4

### Sage 9 Updates

- Added in `front-page.blade.php`, `home.blade.php`, `content-front-page.blade.php` and `content-home.blade.php` for support of WP Hierarchy Template use of Front Page for Home and
  Home for Post Archive if set in _Settings > Reading_ within the admin
- Cleaned up the `main.js` JavaScript code, updated the `routes` and `import` function names to support WP Hierarchy, and the JavaScript files
  within `resources/assets/scripts/routes` to comply more with JavaScript ES6 standards
- Cleaned up some JS code in `common.js`, trying to utilize vanilla JS as much as possible, and move possible common rewritten code to functions
- Webpack Updates:
    - Now supports `Vue`
    - Added `@babel/polyfill`
    - `Vue` template compiling now live reloads
    - 3 functions in `main.js` to manage common `Object doesn't support property or method "foreach"` which occurs with Vue `v-for` functionality
- Added in an exmaple Vue component for a modal visibility component to show that this functionality is working correctly
- Updated `npm` packages with newer versions for better support, smaller library sizes, and updated their locations with the appropriate JavaScript and SCSS files

## Ver 3.1.3 - Dec 4, 2019

- Updated `composer.json` to include SatisPress premium plugin management
- Updated Readme with instructions on how to use SatisPress
- Updated plugin versions
- Updated WordPress to `5.3`

## Ver 3.1.0 - Nov 14, 2019

- Updated `composer.json` to use `php -v 7.2`
- Updated a fix to the `application.php` to temporarily address an issue with the `DB_*` environment data from being exposed by `$_GLOBAL` and `php -i` until Roots
  addressed [Issue 474](https://github.com/roots/bedrock/issues/474).
- Updated WordPress version allowance
- Ran `composer update` to update plugins, WP core, and vendor folders
- Updated `.gitignore` to not omit the `mu-plugins` folder, especially if it will be used
- Updated `.gitignore` to not omit the `vendor` folders, an error which was added in initial release of `v3.0.0`

## Ver 3.0.0 - Oct 10, 2019

- Migrated the Boilerplate Repo from Duplicator to Bedrock
- Added in support/control to Composer
- Added default plugins used to Composer with locked in versions
- Added Sage 9 theme to the `web/app/themes` folder
- Edited Roots/Bedrock README.md file to include additional information on adding plugins
- Removed Emjoi enqueues to the Sage 9 Theme
- Added wpackagist and wp-premium to composer

## Ver 2.1.1 - June 27, 2019

- Cleaned up package.json per June Dev Meeting
- Adjusted files in build folder for browser sync when compiling php, js, ands scss/css files.
- Copied correct .lint files
- Added .gitignore file to theme folder
- Added Custom Functionality Plugin to plugins folder for devs who want to try it out. - Please report any errors/issues to Nick.

## Ver 2.1.0 - May 13, 2019

- Fixed broken installation
- Removed .lock files in theme
- Added GDPR plugin
- Some other small stuff

## Ver 2.0.0 - April 4, 2019

- Updated plugins
- Added new gitignore file
- Added Safe SVG and Classic Editor to plugins
- Updated Wordpress to ver 5.1.1

## Ver 2.0.0 - Mar 29, 2019

- Updated plugins
- Added Safe SVG and Classic Editor to plugins
- Updated Wordpress to ver 5.1.1

## Ver 1.0.8 - Nov 16, 2018

- Updated plugins
- Added WP Rocket
- Updated Wordpress to ver 4.9.8
- Added WP REST API Toolbox; Restricted endpoints by default: https://wptavern.com/wordpress-rest-api-vulnerability-exploits-continue
- Cleaned up database
- Updated password `(see admin-creds.txt)`
- Added Sage 9 and Sage 8 themes; Sage 8 will be removed after Sage 9 transition

## Ver 1.0.7 - Nov 13, 2017

- Updated previously existing plugins
- Removed EWWW Image Optimizer plugin
- Added Optimus plugin

## Ver 1.0.6 - Jun 8, 2017

- Updated Wordpress to 4.8
- Updated previously existing plugins
- Removed Akismet plugin
- Added Sitemap plugin
- Deactivated All In One WP Security plugin, Redirection plugin
- Changed General Settings email address to "boilerplate@cliquestudios.com" -- Please change to your own
- Sage Theme
- - Removed the default custom template and added a Home template.
- - Added a Home page used as the Front page of the WP install using the Home template
- - Cleaned up base.php
- - Added an Option page for ACF in lib/extras.php called "Theme Settings"
- - Added lib/post-types.php file to contains all code related to custom Post Types and taxonomies. Loaded through functions.php

## Ver 1.0.5 - Mar 3, 2017

- Updated previously existing plugins
- Added MainWP Child plugin - Disabled by default
- Updated Sage default theme to 8.5.1
- Added "acf-json" folder to Sage default theme

## Ver 1.0.4 - Dec 7, 2016

- Updated previously existing plugins
- Updated Wordpress to ver 4.7
- Added "WP Accessibility" and "WCAG 2.0 for Gravity Forms" plugins. These are disabled by default.
- Updated the ACF plugin to use the current Pro plugin key.
