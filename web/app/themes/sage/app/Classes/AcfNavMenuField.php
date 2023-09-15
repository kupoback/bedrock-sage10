<?php

namespace App\Classes;

use acf_field;
use stdClass;

class AcfNavMenuField extends acf_field
{
    /**
     * Sets up some default values and delegates work to the parent constructor.
     * This function shows nav menu field into the acf field type.
     */
    public function __construct()
    {
        $this->name     = 'nav_menu';
        $this->label    = esc_html__('Nav Menu', 'sage');
        $this->category = 'choice';
        $this->defaults = [
            'return_format' => 'menu',
            'allow_null'  => 0,
            'container'   => 'nav',
        ];

        parent::__construct();
    }

    /**
     * Renders the ACF Nav Menu Field options seen when editing a Nav Menu Field.
     *
     * @param  array  $field  The array representation of the current Nav Menu Field.
     */
    public function render_field_settings(array $field)
    :void
    {
        // Register the Return Value format setting
        acf_render_field_setting($field, [
            'label'        => esc_html__('Return Value', 'sage'),
            'instructions' => esc_html__('Specify the returned value on front end', 'sage'),
            'type'         => 'radio',
            'name'         => 'return_format',
            'layout'       => 'horizontal',
            'choices'      => [
                'menu'   => esc_html__('Nav Menu HTML', 'sage'),
                'object' => esc_html__('Nav Menu Object', 'sage'),
                'id'     => esc_html__('Nav Menu ID', 'sage'),
            ],
        ]);

        // Register the Menu Container setting
        acf_render_field_setting($field, [
            'label'        => esc_html__('Menu Container', 'sage'),
            'instructions' => esc_html__("What to wrap the Menu's ul with (when returning HTML only)", 'sage'),
            'type'         => 'select',
            'name'         => 'container',
            'choices'      => $this->get_allowed_nav_container_tags(),
        ]);

        // Register the Allow Null setting
        acf_render_field_setting($field, [
            'label'   => esc_html__('Allow Null?', 'sage'),
            'type'    => 'radio',
            'name'    => 'allow_null',
            'layout'  => 'horizontal',
            'choices' => [
                1 => esc_html__('Yes', 'sage'),
                0 => esc_html__('No', 'sage'),
            ],
        ]);
    }

    /**
     * Get the allowed wrapper tags for use with wp_nav_menu().
     *
     * @return array An array of allowed wrapper tags.
     */
    private function get_allowed_nav_container_tags()
    :array
    {
        return [
            '0' => 'None',
            ...collect(apply_filters('wp_nav_menu_container_allowedtags', ['div', 'nav']))
                ->map(fn ($tag) => ucfirst($tag))
                ->toArray()
        ];
    }

    /**
     * Renders the ACF Nav Menu Field.
     *
     * @param  array  $field  The array representation of the current Nav Menu Field.
     */
    public function render_field(array $field)
    :void
    {
        $allow_null = $field['allow_null'];
        $nav_menus  = $this->get_nav_menus($allow_null);
        if (empty($nav_menus)) {
            return;
        }
        ?>
        <div class="custom-acf-nav-menu">
            <select id="<?php esc_attr($field['id']); ?>" class="<?php echo esc_attr($field['class']); ?>" name="<?php echo esc_attr($field['name']); ?>">
                <?php foreach ($nav_menus as $nav_menu_id => $nav_menu_name) : ?>
                    <option value="<?php echo esc_attr($nav_menu_id); ?>" <?php selected($field['value'], $nav_menu_id); ?>>
                        <?php echo esc_html($nav_menu_name); ?>
                    </option>
                <?php endforeach; ?>
            </select>
        </div>
        <?php
    }

    /**
     * Gets a list of ACF Nav Menus indexed by their Nav Menu IDs.
     *
     * @param  bool  $allow_null  If true, prepends the null option.
     *
     * @return array An array of Nav Menus indexed by their Nav Menu IDs.
     */
    private function get_nav_menus(bool $allow_null = false)
    :array
    {
        $navs      = collect(get_terms(['taxonomy' => 'nav_menu', 'hide_empty' => false]));
        $nav_menus = collect();
        if ($allow_null) {
            $nav_menus->prepend(esc_html__('- Select -', 'sage'));
        }

        $navs
            ->map(fn ($nav) => $nav_menus->put($nav->term_id, $nav->name));

        if ($nav_menus->isEmpty()) {
            $nav_menus->push(['No Existing Navs']);
        }

        return $nav_menus
            ->toArray();
    }

    /**
     * Renders the ACF Nav Menu Field.
     *
     * @param  int    $value    The Nav Menu ID selected for this Nav Menu Field.
     * @param  mixed  $post_id  The Post ID this $value is associated with.
     * @param  array  $field    The array representation of the current Nav Menu Field.
     *
     * @return stdClass|string|int|bool The Nav Menu ID, or the Nav Menu HTML, or the Nav Menu Object, or false.
     */
    public function format_value(int $value, mixed $post_id, array $field)
    :stdClass|string|int|bool
    {
        // bail early if no value
        if (empty($value)) {
            return false;
        }
        $container = $field['container'] ?? 'nav';

        // check format
        if ('object' == $field['return_format']) {
            $wp_menu_object = wp_get_nav_menu_object($value);
            if (empty($wp_menu_object)) {
                return false;
            }
            $menu_object        = new stdClass;
            $menu_object->ID    = $wp_menu_object->term_id;
            $menu_object->name  = $wp_menu_object->name;
            $menu_object->slug  = $wp_menu_object->slug;
            $menu_object->count = $wp_menu_object->count;

            return $menu_object;
        } elseif ('menu' == $field['return_format']) {
            ob_start();
            wp_nav_menu(
                [
                    'menu'            => $value,
                    'container_class' => 'acf-nav-menu',
                    'container'       => $container,
                    'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                ]
            );

            return ob_get_clean();
        }

        // Just return the Nav Menu ID
        return $value;
    }

    function load_value($value, $post_id, $field)
    {
        return $value;
    }
}

new AcfNavMenuField();
