# [Bedrock](https://roots.io/bedrock/)

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
* Clique's Default Sage 9 Theme pre-installed
* Clean new database

## Requirements

* PHP >= 7.2
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
    * Through `wp-cli` : `wp core install --url={site_name}.TLD --title= --admin_user=admin --admin_password= --admin_email=

## Plugins

Plugins are all now manages through Composer. You can still install plugins via the `wp-admin`, but it is advised to install them using Composer. There are two default methods of installing plugins, one for free plugins or ones found in the WordPress repository, and the other is for premium plugins NOT found in the WordPress repository.

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
* Updraft Plus
* W3 Total Cache
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

To install a premium plugin, to make things easier, we have included the [WP Premium](https://github.com/wp-premium/) GitHub repository to Composer. The namespace used for this is `wp-premium`. Note that not all premium plugins are included here, so please look at the repo to find your plugin. Otherwise, if it's not there, please reach out for help.

In addition to requiring the package, you will need to add the following to the `repositories` block in the `composer.json` file. Please change `<package>` and `<version>` to the name of the plugin's slug and the version you wish to install.

```json
{
    "type": "package",
    "package": {
        "name": "wp-premium/<package>",
        "type": "wordpress-plugin",
        "version": "<version",
        "dist": {
            "url": "https://github.com/wp-premium/<package>/archive/master.zip",
            "type": "zip"
        }
    }
}
...
"require": {
    ...
    "wpackagist-plugin/<package>": "^<version>",
}
```

## Documentation

Bedrock documentation is available at [https://roots.io/bedrock/docs/](https://roots.io/bedrock/docs/).

## Community

Keep track of development and community news.

* Participate on the [Roots Discourse](https://discourse.roots.io/)
* Follow [@rootswp on Twitter](https://twitter.com/rootswp)
* Read and subscribe to the [Roots Blog](https://roots.io/blog/)
* Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
* Listen to the [Roots Radio podcast](https://roots.io/podcast/)
