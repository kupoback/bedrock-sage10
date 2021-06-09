---

# Clique Wordpress Boilerplate Changelog

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
