# Clique's WP [Bedrock](https://roots.io/bedrock/) Install

[![Packagist](https://img.shields.io/packagist/v/roots/bedrock.svg?style=flat-square)](https://packagist.org/packages/roots/bedrock)
[![Build Status](https://img.shields.io/circleci/build/gh/roots/bedrock?style=flat-square)](https://circleci.com/gh/roots/bedrock)
[![Follow Roots](https://img.shields.io/twitter/follow/rootswp.svg?style=flat-square&color=1da1f2)](https://twitter.com/rootswp)

Bedrock is a modern WordPress stack that helps you get started with the best development tools and project structure.

Much of the philosophy behind Bedrock is inspired by the [Twelve-Factor App](http://12factor.net/) methodology including the [WordPress specific version](https://roots.io/twelve-factor-wordpress/).

## Features

* Better folder structure
* Dependency management with [Composer](https://getcomposer.org)
* Easy WordPress configuration with environment specific files
* Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
* Autoloader for mu-plugins (use regular plugins as mu-plugins)
* Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))
* Clique's Default Sage 9 Theme pre-installed with Vue integrated
* Clean new database

## Requirements

* PHP >= 7.4
* Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)

## Installation

1. Clone this repo into your project directory and then run the following:
    ```sh
    $ composer install
    ```
2. Update environment variables in the `.env` file. If a `.env` file is not created, copy the `.env.example` file:
    * Database variables:
        * `DB_NAME` - Database name
        * `DB_USER` - Database user
        * `DB_PASSWORD` - Database password
        * `DB_HOST` - Database host
    * `WP_ENV` - Set to environment (`development`, `staging`, `production`)
    * `WP_HOME` - Full URL to WordPress home (https://{site_name}.TLD})
    * `WP_SITEURL` - Full URL to WordPress including subdirectory (`https://{site_name}.TLD/wp`)
        * `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
        * Generate with [Roots's WordPress salts generator](https://roots.io/salts.html)
3. Add theme(s) in `web/app/themes/` as you would for a normal WordPress site
4. Set the document root on your webserver to Bedrock's `web` folder: `/path/to/site/web/`
    * If you're using `laravel/valet`, just `cd` to the directory and run:
    ```sh
   # Replace {site_name} with the hostname you wish to use
   $ valet link {site_name}
   ```
5. Run through the WordPress installer:
    * Through WordPress admin at `https://{site_name}.TLD/wp/wp-admin/`
    * Through `wp-cli` : `wp core install --url={site_name}.TLD --title= --admin_user=admin --admin_password= --admin_email=`

## Plugins

Plugins are all now managed through Composer. You can still install plugins via the `wp-admin`, but it is advised to install them using Composer. There are two default methods of installing plugins, one for free plugins or ones found in the WordPress repository, and the other is for premium plugins NOT found in the WordPress repository.

#### Default Plugins

* Advanced Custom Fields Pro
* All In One WP Security and Firewall
* Classic Editor
* Cookie Notice
* Duplicator
* Gravity Forms
* Gravity Forms WCAG 20
* Optimus
* Redirection
* REST API Toolbox
* Safe SVG
* Stream
* Updraft Plus Pro
* W3 Total Cache
* WordFence
* WP Accessibility
* Yoast SEO

### Installing Plugins

To install a plugin, in terminal type:
```sh
$ composer require <namespace>/<package>
$ composer update
```

#### WordPress Repository Plugin

To install a plugin from the [WP Repo](https://wordpress.org/plugins/), we are using the composer package [WPackagist](https://wpackagist.org), which simply uses the namespace `wpackagist-plugin`. Essentially if a plugin exists in the WP Repo, it's accessible via WPackagist by calling to it's slug.

Ex: Adding Yoast `composer require wpackagist-plugin/wordpress-seo`

#### Premium Plugins

Certain plugins will be unavailable from the github repo, like `SearchWP`. To help manage this, there is a website created called [Bedrock Plugin](https://prod.bedrock.cliquedomains.com/), which will be the home to any Premium Plugins we use on sites. ACF Pro, Gravity Forms and UpdraftPlus Pro are already uploaded here, and made available for access on new Bedrock sites. They are also defined in the `composer.json` to update to the latest **minor** version of the plugin. 

##### Making a plugin available via SatisPress:

Under the Plugins page in the admin, you will now see checkboxes to the right of each plugin. Clicking a checkbox will trigger an event that will add this plugin to SatisPress' cache folder allowing those with the correct credentials in the `auth.json` file to download these plugins. This will also hold true for anytime a plugin is update, the relative cached folder will update with the latest version.

![Plugins with Checkboxes](https://i.ibb.co/LxqzLHw/Screen-Shot-2019-12-04-at-11-02-37-AM.png)

Going to Settings > SatisPress > Packages you will see a listing of the plugins you've added to the cache folder. Copy the package name and run the `composer require` command to add them to the `composer.json` file.

Example: `composer require clique-bedrock/advanced-access-manager`

![Packages added to SatisPress Cache](https://i.ibb.co/7S4nb6X/satispress-packages.png)

## Multi-Site Support

Bedrock by default supports WordPress' multi-site option, however due to possible difficulties with the admin slugs, there is a mu-plugin you must add to combat this issue. To read more about it, visit this [Bedrock writeup](https://roots.io/bedrock/docs/installing-bedrock/#multisite).

To add the mu-plugin, run the following: `composer require roots/multisite-url-fixer`

## Migrating to a WPEngine Repo

If there's an instance at the middle of the project that it's determined the client would rather host the site on WPEngine, the following steps will help to migrate from 
Bedrock to a WP Instance.

Since WPEngine uses `git` from the root of the WordPress install, all you need to do is simply create a new folder, and setup the file structure as below, and copy/paste the 
theme folder in:
```
| wp-content
| - themes
| -- paste-theme-folder-here
```

After you do that, you can move the `.git` folder from the Bedrock repo into the newly created folder, and then make sure to refresh your git application, or run git from 
terminal in the new folder. For the rest of the WPEngine setup and migration, please refer to [this Notion document](https://www.notion.
so/cliquestudios/WPEngine-Projects-098b2f5e7d2e434e951bd3cf16ee70ce). If you cannot access the page, please reach out to a Senior Dev or Francois for help.

## Documentation

Bedrock documentation is available at [here](https://roots.io/bedrock/docs/).

SatisPress documentation is available at [here](https://github.com/cedaro/satispress/blob/develop/docs/index.md).

## Community

Keep track of development and community news.

* Participate on the [Roots Discourse](https://discourse.roots.io/)
* Follow [@rootswp on Twitter](https://twitter.com/rootswp)
* Read and subscribe to the [Roots Blog](https://roots.io/blog/)
* Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
* Listen to the [Roots Radio podcast](https://roots.io/podcast/)
