# Clique's WP [Bedrock](https://roots.io/bedrock/) Install

[![License](https://img.shields.io/github/license/roots/bedrock?color=%23525ddc&style=flat-square)](LICENSE.md)
[![Packagist](https://img.shields.io/packagist/v/roots/bedrock.svg?style=flat-square)](https://packagist.org/packages/roots/bedrock)
[![Build Status](https://img.shields.io/circleci/build/gh/roots/bedrock?style=flat-square)](https://circleci.com/gh/roots/bedrock)
[![Follow Roots](https://img.shields.io/twitter/follow/rootswp.svg?style=flat-square&color=1da1f2)](https://twitter.com/rootswp)

Bedrock is a modern WordPress stack that helps you get started with the best development tools and project structure.

Much of the philosophy behind Bedrock is inspired by the [Twelve-Factor App](http://12factor.net/) methodology including
the [WordPress specific version](https://roots.io/twelve-factor-wordpress/).

# Features

* Better folder structure
* Dependency management with [Composer](https://getcomposer.org)
* Easy WordPress configuration with environment specific files
* Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
* Autoloader for mu-plugins (use regular plugins as mu-plugins)
* Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))
* Clique's Default Sage 9 Theme pre-installed with Vue integrated
* Clean new database

# Requirements

* PHP >= 7.4
* Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)

---

# Quicklinks

- [Installation](#markdown-header-installation-of-new-project)
- [Working With an Existing Project](#markdown-header-working-with-an-existing-project)
    - [Setting up Locally](#markdown-header-setting-up-locally)
    - [UpdraftPlus](#markdown-header-updraftplus)
    - [Importing the Database](#markdown-header-importing-the-database)
- [Migrating to a Forge Server](#markdown-header-migrating-to-a-forge-server)
    - [Database User Setup](#markdown-header-database-user-setup)
    - [Setting up the Repository](#markdown-header-setting-up-the-repository)
    - [Adjustment to the conf file](#markdown-header-adjustment-to-the-conf-file)
    - [Setting up SSL](#markdown-header-setting-up-ssl)
    - [Importing the database](#markdown-header-importing-the-database_1)
    - [Installing ACF-JSON WP-CLI plugin](#markdown-header-installing-acf-json-wp-cli-plugin)
    - [Adjusting the Deployment Settings](#markdown-header-adjusting-the-deployment-settings)
- [Migrating to non-Forge Server](#markdown-header-migrating-to-non-forge-server)
- [Plugins](#markdown-header-plugins)
    - [Default Plugins](#markdown-header-default-plugins)
    - [Installing Plugins](#markdown-header-installing-plugins)
        - [WordPress Repository Plugin](#markdown-header-wordpress-repository-plugin)
        - [Premium Plugins](#markdown-header-premium-plugins)
            - [Making a plugin available via SatisPress](#markdown-header-making-a-plugin-available-via-satispress)
- [Multi-Site Support](#markdown-header-multi-site-support)
- [Migrating to a WPEngine Repo](#markdown-header-migrating-to-a-wpengine-repo)
- [Vue Navigation](#markdown-header-vue-navigation)
    

---

# Installation of New Project

1. Clone this repo into your project directory and then run the following: `composer install`
2. Update environment variables in the `.env` file. If a `.env` file is not created, copy the `.env.example` file:
    * Database variables:
        * `DB_NAME` - Database name
        * `DB_USER` - Database user
        * `DB_PASSWORD` - Database password
        * `DB_HOST` - Database host
        * `DB_PREFIX` - The prefix for WordPress' tables
            * Note: It's strongly suggested setting this up with the checklist in mind. Don't use `wp_` but instead a random string that our security plugins would suggest using, since once going through the checklist, the plugin will not be able to update the tables and the `wp-config.php` file, and crash the site entirely. Just set it up early, and you'll be setup for success when closer to launch.
    * `WP_ENV` - Set to environment (`development`, `staging`, `production`)
    * `WP_HOME` - Full URL to WordPress home (`https://{site_name}.TLD`)
    * `WP_SITEURL` - URL pointing to subdirectory - Shouldn't have to adjust this (`${WP_HOME}/wp`)
    * `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
        * Generate with [Roots's WordPress salts generator](https://roots.io/salts.html)
3. Set the document root on your webserver to Bedrock's `web` folder: `/path/to/site/web/`
    * If you're using `laravel/valet` and you've already parked your `Sites` folder, you shouldn't need to do anything futher.
4. Create the database you'll be using. You can use WP-CLI or you can use another application of your choosing to create it.
   * With WP-CLI: `cd web && wp db create`
5. Run through the WordPress installer:
    * Through WordPress admin at `https://{site_name}.TLD/wp/wp-admin/`
    * Through `wp-cli` 
        -  `cd web`
        - `wp core install --url={site_name}.TLD --title={Site Title} --admin_user=admin --admin_password={password} --admin_email={email}`
6. Rename the `sage9-project-name-theme` in `web/app/themes` to the projects name
7. Update the `/app/themes/{THEME_NAME}/resources/assets/config.json`, changing the `publicPath` theme's name to match what you set in Step 5.
8. Optional: If you're going to use Vue, uncomment lines 14/15 in `main.js`.

--- 

# Working With an Existing Project

There are a few ways you can migrate a site down locally from an already existing project, but both methods have the same starting setup requirements.

## Setting up Locally

As with the **Installation** instructions, you'll want to clone the project to a new folder, and copy the `.env.example` file named as `.env`. Then you'll want to setup the variables in the file similarly to how it is from the production or staging environment, minus the DB credentials and `WP_HOME` and `WP_SITEURL` fields. For `WP_ENV` you'll want to set that as `development` since we're working locally. For an explaination on these variables, please see **Installation of new project** above.

After you've cloned, and setup your `.env` file, you'll want to run `composer install` in the root of the project and in the theme folder, as well as `yarn` in the theme folder.

After you complete the above, you can use UpdraftPlus to download two parts of the site, or if you're more comfortable, you can `ssh` in and export the database with `wp-cli` if it's installed, and `gzip` the uploads folder omitting the `cache` and other files that aren't media related.

## UpdraftPlus

For this method, the only thing you need to backup and download are the `uploads` folder, and the `database`. Trigger this method first, as it can take some time to execute, and continue onwards.

On local, using either phpmyadmin, Sequel Pro, or whatever program you use to create and manage databases, create a new one for this project. Once you have done that, copy the name and update the `.env` file with the right database name, username, and password, and make sure that the `DB_HOST` matches what you'd use for other projects; typically it is `localhost`. After this is setup, download the Uploads zip folders and database zip folders from your production site, then copy and unzip the `Uploads` folder in `web/app/`.

## Importing the Database

Once this is done, you can import the database one of two ways, you can import it directly via your application/phpmyadmin, or use `wp-cli` to import it. If you use `wp-cli` make sure to have the file sitting in the `web` directory, and run the `wp-cli` command from there.

---

# Migrating to a Forge Server

Setting up a site using Forge and it's automated processes helps eliminate a lot of the work necessary for setup. To start, login to the [Forge Server](https://forge.laravel.com/servers). This README will be using Sandbox 7 from here on out for examples. After you've got the server setup, click the name of the appropraite server. If not already done, under the Sites tab, fill out the following fields as shown.

- Root Domain - Site you're setting up
- Aliases - Project depending, but usually can be kept blank
- Project Type - Keep this at the default "General PHP/Laravel"
- Web Directory - Change this to `/web` since we're serving the site under the `web` directory
- Check off Create Database, and enter in a database name
- Click Add Site

### Example Setup

![Forge Site Setup](https://i.ibb.co/XpY25dZ/forge-site-setup.png)

## Database User Setup

After you've set this up, click the Database tab on the side, and scroll down to `Add Database User`. Follow these next steps, entering in the following:

- Database user
- Database password
- Check off the correct database this user can access

Once these are filled out, click `Create`. Be sure to save these credentials in LastPass, as we'll need them for the `.env` file setup, as well as for anything else requiring database credentials.

### Example Database User Setup

![Setting up database user](https://i.ibb.co/KqZpY9G/setup-database-user.png)

## Setting up the Repository

Once you've completed this, click the Sites tab, and then click the site name you just setup.

- Click on `Git Repository`
- Check off the correct repository (Usually always Bitbucket)
- Copy the SSH url, but we only need the user and the reponame
    - `git@bitbucket.org:clique_studios/new-backend-boilerplate.git`
    - We only need the `clique_studios/new-backend-boilerplate.git` part
- Enter in the name of the branch to pull from
- Make sure `Install Composer Dependencies` is checked
- Click `Install Repository`

### Example Repoistory Setup

![Setup Repository](https://i.ibb.co/jrPcrGk/Screen-Shot-2021-01-08-at-12-27-12.png)

Next steps are to setup the Environment File. Click the Environment tab, and the file in there will by default be empty. You can simply just open up your local `.env` file, and paste the contents in there, changing the `DB_NAME`, `DB_USER` `DB_PASSWORD`, `WP_ENV`, changing the value to the environment you're setting up, `WP_HOME`, and generate new salt keys by going [here](https://roots.io/salts.html). Once finished, hit `Save`.

### Example `.env` File Contents

![Example env file contents](https://i.ibb.co/s5g6KgD/Screen-Shot-2021-01-08-at-12-41-04.png)

## Adjustment to the conf file

Since we're on Bedrock, we need to make sure that we're pointing nginx to the right directory. This is merely a double check. At the bottom of the screen, click on the `Files` button, and click on `Edit Nginx Configuration`. A modal will popup, and look for the line `root /home/forge/{SITE_NAME}`. If this does have `/web;` at the end of it, you can move on to the next section. If this does not have `/web` at the end of it, then add it here, and click `Save`. Then at the bottom of the page, click `Restart` and click on `Restart Nginx`. You should now be able to hit the URL, and if you haven't imported the database yet, you should see a WordPress setup screen.

## Setting up SSL

Once that's complete, click the SSL tab, and select "LetsEncrypt", ensure the right domain is entered and click `Obtain Certificate`.

## Importing the database

The next steps are to you to determine how you want to import the database, but my preferred method is to use WP-CLI to import the `sql` file. To do this using `rsync` or FileZilla, upload the `sql` file to the `web` directory. Then `ssh` into the server, navigate to the install folder and into the `web` directory and import the database.

```
# Replace {sqlfilename} with the name of your site.
cd ~/project/web
wp db export {sqlfilename}.sql

# This next line will do a search replace for your local URL and replace it with the URL to access it via the server
wp search-replace {LOCAL_DEV_URL} https://{PROJECT_NAME}.com
````

## Importing the Uploads folder

Using CLI to unzip the uploads folder

```
cd path/to/site/web/app/
rm -rf uploads
gunzip < {sitename}-uploads.tar.gz | tar xvf -
# This command will rename the folder to just be uploads
mv {sitename}-uploads uploads
# This command will show you that what you've done is complete
cd uploads
# This should show you the same files you'll have locally except for the cache folder
ls -la
# If everything looks correct run the following
cd ../ && rm -f {sitename}-uploads.tar.gz
```

## Installing ACF JSON WP CLI plugin

All forge servers should come with WP-CLI installed, and on Sandbox 7, this step is already done for you, so you can skip it. if this is on a non-Sandbox 7 server, then after you `ssh` into the server, not as a root user, run the following command.

```
wp package install git@github.com:superhuit-ch/wp-cli-acf-json.git

# If the above does not work, copy and paste this line
php -d memory_limit=-1 "$(which wp)"  package install git@github.com:superhuit-ch/wp-cli-acf-json.git
```

## Adjusting the Deployment Settings

The final step needed before you're good to go, is getting the Deployment section setup. Simply click on the Deployments tab in the side, and you should see a section labeled `Deployment Scripts`. You'll want to replace the contents in there with the following, replacing `{SITE_FOLDER_NAME}`, `{BRANCH_NAME}`, and `{THEME_NAME}` with the appropriate names related to your project. If wp-cli is installed on the server, which should be by default, and you installed the ACF-JSON WP-CLI plugin, you can leave in the `wp acf-json sync` portion, otherwise delete that part.

```
cd /home/forge/{SITE_FOLDER_NAME}
git pull origin {BRANCH_NAME}
#$FORGE_COMPOSER install --no-interaction --prefer-dist --optimize-autoloader

( flock -w 10 9 || exit 1
    echo 'Restarting FPM...'; sudo -S service $FORGE_PHP_FPM reload ) 9>/tmp/fpmlock

# Sync the ACF-json folder to the site
cd web
wp acf-json sync
# Move to the theme directory and rebuild the assets
cd app/themes/{THEME_NAME}
yarn && yarn build
```

After you've saved this, in the box above it called "Deployment", make sure to click on "Quick Deploy", so that forge will automatically pull in your changes from `.git` when you make a commit.

---

# Migrating to non Forge Server

To migrate the site from local or development to staging, the best route is to use the `cli`.

First, setup the server. Instructions for this can be found in Notion. One note, when setting up the `sites.conf` file, the PATH for the directory must end with `web`.

Example: `/var/www/html/SITENAME/production/web`

After setting up the server, `cd` to the folder that'll be serving the staging site, and clone the repo here. Once you have cloned the repo, the next step would be to run `composer install` in the root of the cloned repo, and in the theme folder, followed by `yarn` to install the node modules. Afterwards, run `yarn build`, before moving on. After this is all complete, setup the database, and setup the `.env` file, ensuring that `WP_ENV` is set to `staging`, but do not run the WordPress install.

For the Database, you can run the following:

```
# Replace {sitename} with the name of your site.
cd path/to/project/web
wp db export {sitename}.sql
````

For the Uploads folder, you can execute the following:

```
cd path/to/project/web/app
tar -zcvf {sitename}-uploads.tar.gz uploads --exclude="/path/to/project/web/app/uploads/cache"
```

After you have both of these, you can use `rsync` to upload them or use an SFTP program to upload them to the site folder. To import the database, it's best to use `wp-cli` on the server, and make sure the `.sql` file is in the `web` directory of the project. When uploading the zipped Uploads folder, make sure to place it in the `web/app/` directory before unzipping it.

**Using WP-CLI to import the database**

```
# Replace {sitename} with the name of your site.
wp db import {sitename}.sql
# Once this is done, and you've confirmed by looking at the front end make sure to delete the file
rm -f {sitename}.sql
```

**Using CLI to unzip the uploads folder**

```
cd path/to/site/web/app/
rm -rf uploads
gunzip < {sitename}-uploads.tar.gz | tar xvf -
# This command will rename the folder to just be uploads
mv {sitename}-uploads uploads
# This command will show you that what you've done is complete
cd uploads
# This should show you the same files you'll have locally except for the cache folder
ls -la
# If everything looks correct run the following
cd ../ && rm -f {sitename}-uploads.tar.gz
```

---

# Plugins

Plugins are all now managed through Composer. You can still install plugins via the `wp-admin`, but it is advised to install them using Composer. There are two default methods of installing plugins, one for free plugins or ones found in the WordPress repository, and the other is for premium plugins NOT found in the WordPress repository.

### Default Plugins

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

## Installing Plugins

To install a plugin, in terminal type:

```
composer require <namespace>/<package>
```

You do not need to need to run `composer update` unless you want to update all the other plugins.

### WordPress Repository Plugin

To install a plugin from the [WP Repo](https://wordpress.org/plugins/), we are using the composer package [WPackagist](https://wpackagist.org), which simply uses the namespace `wpackagist-plugin`. Essentially if a plugin exists in the WP Repo, it's accessible via WPackagist by calling to it's slug.

Ex: Adding Yoast `composer require wpackagist-plugin/wordpress-seo`

### Premium Plugins

Certain plugins will be unavailable from the github repo, like `SearchWP`. To help manage this, there is a website created called [Bedrock Plugin](https://prod.bedrock.cliquedomains.com/), which will be the home to any Premium Plugins we use on sites. ACF Pro, Gravity Forms and UpdraftPlus Pro are already uploaded here, and made available for access on new Bedrock sites. They are also defined in the `composer.json` to update to the latest **minor** version of the plugin.

#### Making a plugin available via SatisPress

Under the Plugins page in the admin, you will now see checkboxes to the right of each plugin. Clicking a checkbox will trigger an event that will add this plugin to SatisPress'
cache folder allowing those with the correct credentials in the `auth.json` file to download these plugins. This will also hold true for anytime a plugin is update, the relative
cached folder will update with the latest version.

![Plugins with Checkboxes](https://i.ibb.co/LxqzLHw/Screen-Shot-2019-12-04-at-11-02-37-AM.png)

Going to Settings > SatisPress > Packages you will see a listing of the plugins you've added to the cache folder. Copy the package name and run the `composer require` command to
add them to the `composer.json` file.

Example: `composer require clique-bedrock/advanced-access-manager`

![Packages added to SatisPress Cache](https://i.ibb.co/7S4nb6X/satispress-packages.png)

---

# Multi Site Support

Bedrock by default supports WordPress' multi-site option, however due to possible difficulties with the admin slugs, there is a mu-plugin you must add to combat this issue. To read more about it, visit this [Bedrock writeup](https://roots.io/bedrock/docs/installing-bedrock/#multisite).

To add the mu-plugin, run the following: `composer require roots/multisite-url-fixer`

---

# Migrating to a WPEngine Repo

If there's an instance at the middle of the project that it's determined the client would rather host the site on WPEngine, the following steps will help to migrate from Bedrock to a WP Instance.

Since WPEngine uses `git` from the root of the WordPress install, all you need to do is simply create a new folder, and setup the file structure as below, and copy/paste the theme folder in:

```
| wp-content
| - themes
| -- paste-theme-folder-here
```

After you do that, you can move the `.git` folder from the Bedrock repo into the newly created folder, and then make sure to refresh your git application, or run git from terminal in the new folder. For the rest of the WPEngine setup and migration, please refer to [this Notion document](https://www.notion.so/cliquestudios/WPEngine-Projects-098b2f5e7d2e434e951bd3cf16ee70ce). If you cannot access the page, please reach out to a Senior Dev or Francois for help.

---

# Vue Navigation

By default the WordPress Navigation method is applied to the `header.blade.php`. However, if you wish to try using Vue to render the navigation, you can simply remove the PHP based content, and uncomment the `<div id="vue-navigation-container"></div>` element, and run `yarn build` to have it appear.

**Pros**

* No needing to mess around with WP Nav Walkers to adhere to Design's layout, can just modify the existing admin navigation and REST API file `app\Controllers\SageNavRestAPI.php`
  to return the desier output
* No needing to create ACF menu's which are harder for clients to manage
* Have one query per menu location and return up to as many different menu arrays as needed for each. Meaning you can now easily have an array of menu items for Desktop that has a
  different array order for Mobile or Tablet!
* A lot less messing around with media queries and difficulties migrating front-end JavaScript

**Cons**

* Need to learn and understand Vue
* Current support and optimization is for Parent and 1 level of children on return data from API
* Need to migrate jQuery code to JavaScript to help reduce possible conflicts, though not always the case
* Useful to grasp [Vue Media Query plugin](https://www.npmjs.com/package/vue-media-queries).
* Need to confirm IE 10/11 still properly functioning. There is a plugin, common backward compatibility functions, and babel is included, but always good to double check.

The main component container is at `resources/assets/scripts/vue/Components/Navigation.vue` and uses the `store.js` found in the Vue assets folder under `Vuex` and the `mixins.js`under the `Util` folder in the Vue assets folder. The navigation contents from the API are stored with Vuex, and fed into the `DesktopNavigation.vue` and `MobileNavigation.vue`file which show based on the defined media query.

---

# Documentation

Bedrock documentation is available at [here](https://roots.io/bedrock/docs/).

SatisPress documentation is available at [here](https://github.com/cedaro/satispress/blob/develop/docs/index.md).

# Community

Keep track of development and community news.

* Participate on the [Roots Discourse](https://discourse.roots.io/)
* Follow [@rootswp on Twitter](https://twitter.com/rootswp)
* Read and subscribe to the [Roots Blog](https://roots.io/blog/)
* Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
* Listen to the [Roots Radio podcast](https://roots.io/podcast/)
