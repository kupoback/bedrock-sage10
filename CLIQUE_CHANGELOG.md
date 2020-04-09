--------------------------------------------------------------
Clique Wordpress Boilerplate Changelog
--------------------------------------------------------------
## Ver 3.2.0 - Apr x, 2020

### Global Updates
* Updated `composer.json` version files
* Worked on updating the `README.md` with instructions on migration and it's process
* Set minimum php version for Bedrock to `7.3`
* Updated WordPress to 5.4
### Sage 9 Updates
* Added in `front-page.blade.php`, `home.blade.php`, `content-front-page.blade.php` and `content-home.blade.php` for support of WP Hierarchy Template use of Front Page for Home and Home for Post Archive if set in *Settings > Reading* within the admin
* Cleaned up the `main.js` JavaScript code, updated the `routes` and `import` function names to support WP Hierarchy, and the JavaScript files within `resources/assets/scripts/routes` to comply more with JavaScript ES6 standards
* Cleaned up some JS code in `common.js`, trying to utilize vanilla JS as much as possible, and move possible common rewritten code to functions
* Webpack Updates:
    * Now supports `Vue`
    * Added `@babel/polyfill`
    * `Vue` template compiling now live reloads
    * 3 functions in `main.js` to manage common `Object doesn't support property or method "foreach"` which occurs with Vue `v-for` functionality
* Added in an exmaple Vue component for a modal visibility component to show that this functionality is working correctly
* Updated `npm` packages with newer versions for better support, smaller library sizes, and updated their locations with the appropriate JavaScript and SCSS files


## Ver 3.1.3 - Dec 4, 2019

* Updated `composer.json` to include SatisPress premium plugin management
* Updated Readme with instructions on how to use SatisPress
* Updated plugin versions
* Updated WordPress to `5.3`

## Ver 3.1.0 - Nov 14, 2019

* Updated `composer.json` to use `php -v 7.2`
* Updated a fix to the `application.php` to temporarily address an issue with the `DB_*` environment data from being exposed by `$_GLOBAL` and `php -i` until Roots addressed [Issue 474](https://github.com/roots/bedrock/issues/474).
* Updated WordPress version allowance 
* Ran `composer update` to update plugins, WP core, and vendor folders
* Updated `.gitignore` to not omit the `mu-plugins` folder, especially if it will be used
* Updated `.gitignore` to not omit the `vendor` folders, an error which was added in initial release of `v3.0.0`

## Ver 3.0.0 - Oct 10, 2019

* Migrated the Boilerplate Repo from Duplicator to Bedrock
* Added in support/control to Composer
* Added default plugins used to Composer with locked in versions
* Added Sage 9 theme to the `web/app/themes` folder
* Edited Roots/Bedrock README.md file to include additional information on adding plugins 
* Removed Emjoi enqueues to the Sage 9 Theme
* Added wpackagist and wp-premium to composer

## Ver 2.1.1 - June 27, 2019

* Cleaned up package.json per June Dev Meeting
* Adjusted files in build folder for browser sync when compiling php, js, ands scss/css files.
* Copied correct .lint files
* Added .gitignore file to theme folder
* Added Custom Functionality Plugin to plugins folder for devs who want to try it out. - Please report any errors/issues to Nick.

## Ver 2.1.0 - May 13, 2019

* Fixed broken installation
* Removed .lock files in theme
* Added GDPR plugin
* Some other small stuff


## Ver 2.0.0 - April 4, 2019

* Updated plugins
* Added new gitignore file
* Added Safe SVG and Classic Editor to plugins
* Updated Wordpress to ver 5.1.1
 

## Ver 2.0.0 - Mar 29, 2019

* Updated plugins
* Added Safe SVG and Classic Editor to plugins
* Updated Wordpress to ver 5.1.1

## Ver 1.0.8 - Nov 16, 2018

* Updated plugins
* Added WP Rocket
* Updated Wordpress to ver 4.9.8
* Added WP REST API Toolbox; Restricted endpoints by default: https://wptavern.com/wordpress-rest-api-vulnerability-exploits-continue
* Cleaned up database
* Updated password `(see admin-creds.txt)`
* Added Sage 9 and Sage 8 themes; Sage 8 will be removed after Sage 9 transition


## Ver 1.0.7 - Nov 13, 2017

* Updated previously existing plugins
* Removed EWWW Image Optimizer plugin
* Added Optimus plugin

## Ver 1.0.6 - Jun 8, 2017

* Updated Wordpress to 4.8
* Updated previously existing plugins
* Removed Akismet plugin
* Added Sitemap plugin
* Deactivated All In One WP Security plugin, Redirection plugin
* Changed General Settings email address to "boilerplate@cliquestudios.com" -- Please change to your own
* Sage Theme
* * Removed the default custom template and added a Home template.
* * Added a Home page used as the Front page of the WP install using the Home template
* * Cleaned up base.php
* * Added an Option page for ACF in lib/extras.php called "Theme Settings"
* * Added lib/post-types.php file to contains all code related to custom Post Types and taxonomies. Loaded through functions.php

## Ver 1.0.5 - Mar 3, 2017

* Updated previously existing plugins
* Added MainWP Child plugin - Disabled by default
* Updated Sage default theme to 8.5.1
* Added "acf-json" folder to Sage default theme

## Ver 1.0.4 - Dec 7, 2016

* Updated previously existing plugins
* Updated Wordpress to ver 4.7
* Added "WP Accessibility" and "WCAG 2.0 for Gravity Forms" plugins. These are disabled by default.
* Updated the ACF plugin to use the current Pro plugin key.
