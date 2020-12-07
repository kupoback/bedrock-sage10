# Clique's WP [Bedrock](https://roots.io/bedrock/) Install

[![License](https://img.shields.io/github/license/roots/bedrock?color=%23525ddc&style=flat-square)](LICENSE.md)
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

## Installation of new project

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
    * `WP_HOME` - Full URL to WordPress home (`https://{site_name}.TLD`)
    * `WP_SITEURL` - URL pointing to subdirectory - Shouldn't have to adjust this (`${WP_HOME}/wp`)
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
    * Through `wp-cli`
    ```sh
    $ wp core install --url={site_name}.TLD --title={Site Title} --admin_user=admin --admin_password={password} --admin_email={email}
   ```

## Working with an existing Project

There are a few ways you can migrate a site down locally from an already existing project, but both methods have the same starting setup requirements.

### Setting up Locally

As with the **Installation** instructions, you'll want to clone the project to a new folder, and copy the `.env.example` file named as `.env`. Then you'll want to setup the 
variables in the file similarly to how it is from the production or staging environment, minus the DB credentials and `WP_HOME` and `WP_SITEURL` fields. For `WP_ENV` you'll 
want to set that as `development` since we're working locally. For an explaination on these variables, please see **Installation of new project** above.

After you've cloned, and setup your `.env` file, you'll want to run `composer update` in the root of the project and in the theme folder, as well as `yarn` in the theme folder. 
Do not run `composer install` as this _may_ install an updated version of WP Core or Plugins.

After you complete the above, you can use UpdraftPlus to download two parts of the site, or if you're more comfortable, you can `ssh` in and export the database with `wp-cli` if it's installed, and `gzip` the uploads folder omitting the `cache` and other files that aren't media related.

### UpdraftPlus

For this method, the only thing you need to backup and download are the `uploads` folder, and the `database`. Trigger this method first, as it can take some time to execute, and continue onwards.

On local, using either phpmyadmin, Sequel Pro, or whatever program you use to create and manage databases, create a new one for this project. Once you have done that, copy the name and update the `.env` file with the right database name, username, and password, and make sure that the `DB_HOST` matches what you'd use for other projects; typically it is `localhost`. After this is setup, download the Uploads zip folders and database zip folders from your production site, then copy and unzip the `Uploads` folder in `web/app/`.

### Importing the Database

Once this is done, you can import the database one of two ways, you can import it directly via your application/phpmyadmin, or use `wp-cli` to import it. If you use `wp-cli` make sure to have the file sitting in the `web` directory, and run the `wp-cli` command from there.

## Migrating to Staging

To migrate the site from local or development to staging, the best route is to use the `cli`.

First, setup the server. Instructions for this can be found in Notion. One note, when setting up the `sites.conf` file, the PATH for the directory must end with `web`. 

Example: `/var/www/html/SITENAME/production/web`

After setting up the server, `cd` to the folder that'll be serving the staging site, and clone the repo 
here. Once you have cloned the repo, the next step would be to run `composer update` in the root of the cloned repo, and in the theme folder, followed by `yarn` to install the 
node modules. Afterwards, run `yarn build`, before moving on. After this is all complete, setup the database, and setup the `.env` file, ensuring that `WP_ENV` is set to `staging`, 
but do not run the WordPress install.

For the Database, you can run the following: 
```shell
# Replace {sitename} with the name of your site.
$ cd path/to/project/web
$ wp db export {sitename}.sql
````

For the Uploads folder, you can execute the following:
```shell
$ cd path/to/project/web/app
$ tar -zcvf {sitename}-uploads.tar.gz uploads --exclude="/path/to/project/web/app/uploads/cache"
```

After you have both of these, you can use `rsync` to upload them or use an SFTP program to upload them to the site folder. To import the database, it's best to use `wp-cli` on 
the server, and make sure the `.sql` file is in the `web` directory of the project. When uploading the zipped Uploads folder, make sure to place it in the `web/app/` directory 
before unzipping it.

**Using WP-CLI to import the database**
```shell
# Replace {sitename} with the name of your site.
$ wp db import {sitename}.sql
# Once this is done, and you've confirmed by looking at the front end make sure to delete the file
$ rm -f {sitename}.sql
```

**Using CLI to unzip the uploads folder**
```shell
$ cd path/to/site/web/app/
$ rm -rf uploads
$ gunzip < {sitename}-uploads.tar.gz | tar xvf -
# This command will rename the folder to just be uploads
$ mv {sitename}-uploads uploads
# This command will show you that what you've done is complete
$ cd uploads
# This should show you the same files you'll have locally except for the cache folder
$ ls -la
# If everything looks correct run the following
$ cd ../ && rm -f {sitename}-uploads.tar.gz
```

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
terminal in the new folder. For the rest of the WPEngine setup and migration, please refer to [this Notion document](https://www.notion.so/cliquestudios/WPEngine-Projects-098b2f5e7d2e434e951bd3cf16ee70ce). If you cannot access the page, please reach out to a Senior Dev or Francois for help.

## Vue Navigation

By default the WordPress Navigation method is applied to the `header.blade.php`. However, if you wish to try using Vue to render the navigation, you can simply remove the PHP 
based content, and uncomment the `<div id="vue-navigation-container"></div>` element, and run `yarn build` to have it appear.

**Pros**
* No needing to mess around with WP Nav Walkers to adhere to Design's layout, can just modify the existing admin navigation and REST API file `app\Controllers\SageNavRestAPI.php` to return the desier output
* No needing to create ACF menu's which are harder for clients to manage
* Have one query per menu location and return up to as many different menu arrays as needed for each. Meaning you can now easily have an array of menu items for Desktop that 
  has a different array order for Mobile or Tablet!
* A lot less messing around with media queries and difficulties migrating front-end JavaScript

**Cons**
* Need to learn and understand Vue
* Current support and optimization is for Parent and 1 level of children on return data from API
* Need to migrate jQuery code to JavaScript to help reduce possible conflicts, though not always the case
* Useful to grasp [Vue Media Query plugin](https://www.npmjs.com/package/vue-media-queries).
* Need to confirm IE 10/11 still properly functioning. There is a plugin, common backward compatibility functions, and babel is included, but always good to double check.

The main component container is at `resources/assets/scripts/vue/Components/Navigation.vue` and uses the `store.js` found in the Vue assets folder under `Vuex` and the `mixins.js` under the `Util` folder in the Vue assets folder. The navigation contents from the API are stored with Vuex, and fed into the `DesktopNavigation.vue` and `MobileNavigation.vue` file which show based on the defined media query.

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
