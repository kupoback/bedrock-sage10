<?php
/*
Plugin Name:  Plugin Install/Update Notice
Plugin URI:   #
Description:  Informs the user to not install or update plugins via the admin
Version:      1.0.0
Author:       Clique Studios
Author URI:   https://cliquestudios.com/
License:      MIT License
*/

if (!defined('DISALLOW_FILE_MODS') || DISALLOW_FILE_MODS) {
    return;
}

add_action('admin_notices', function () {
    global $pagenow;
    if ($pagenow === 'plugins.php' || $pagenow === 'plugin-install.php') {
        printf(
            "<div class='notice notice-error'><p>%s</p></div>",
            __("<strong>NOTE: </strong> Do not install or update any plugins in the admin. Only do so via composer.", 'sage'),
        );
    }
});
