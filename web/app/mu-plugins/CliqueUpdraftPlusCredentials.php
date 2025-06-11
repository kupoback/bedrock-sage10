<?php
/**
 * Plugin Name: Cliques UpdraftPlus ENV Credentials
 * Plugin URI: https://cliquestudios.com
 * Description: A mu-plugin aimed to pull credentials from the .env file and use those as opposed to databased saved credentials
 * Version: 1.0.0
 * Author: Clique Studios
 * Author URI: https://cliquestudios.com
 * License: MIT License
 */

require_once ABSPATH . 'wp-admin/includes/plugin.php';

use function Env\env;

class CliqueUpdraftPlusCredentials
{
    /**
     * CliqueUpdraftPlusCredentials __construct
     */
    public function __construct()
    {
        if (is_plugin_active('updraftplus/updraftplus.php')) {
            add_filter('updraftplus_get_option', [$this, 'setUpdraftCredentials'], 10, 3,);
            add_filter('updraftplus_update_option', [$this, 'stopSavingOfUpdraftCredentials'], 10, 3,);
        }
    }

    /**
     * Iterates through UpdraftPlus' settings and hooks into the loop where we set
     * S3's values pulling them from the .env file
     *
     * @param  mixed   $ret      The Updraft Settings
     * @param  string  $option   The Updraft settings field name
     * @param  mixed   $default  The default settings field name value
     *
     * @return mixed
     */
    public function setUpdraftCredentials(
        #[\SensitiveParameter]
        mixed $ret,
        string $option,
        mixed $default
    ): mixed
    {
        if ('updraft_s3' !== $option || empty($ret['settings'])) {
            return $ret;
        }

        foreach ($ret['settings'] as $instance => $options) {
            $ret['settings'][$instance]['accesskey'] = env('S3_ACCESS_KEY', '');
            $ret['settings'][$instance]['secretkey'] = env('S3_SECRET_KEY', '');
            $ret['settings'][$instance]['path']      = env('S3_BUCKET', '');
            $ret['settings'][$instance]['server_side_encryption'] = 1;
        }

        return $ret;
    }

    /**
     * Stops UpdraftPlus from saving the values from the .env file in the database
     *
     * @param  mixed   $value      The value saved in UpdraftPlus to update
     * @param  string  $option     The option to pull the value from
     * @param  bool    $use_cache  Whether to cache the values
     *
     * @return mixed
     */
    public function stopSavingOfUpdraftCredentials(
        #[\SensitiveParameter]
        mixed $value,
        string $option,
        bool $use_cache
    ): mixed
    {
        if ('updraft_s3' !== $option || empty($value['settings'])) {
            return $value;
        }

        foreach ($value['settings'] as $instance => $options) {
            $value['settings'][$instance]['accesskey'] = '';
            $value['settings'][$instance]['secretkey'] = '';
            $value['settings'][$instance]['path'] = '';
        }

        return $value;
    }
}


if (is_blog_installed()) {
    new CliqueUpdraftPlusCredentials();
}
