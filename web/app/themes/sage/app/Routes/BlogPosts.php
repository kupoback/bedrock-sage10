<?php

declare(strict_types=1);

namespace App\Routes;

# Sage Classes
use App\Routes\Traits\RestRouteTrait;
use App\Routes\Traits\RestRouteValidateTrait;

# Vendor Packages
use Exception;

# WordPress
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Server;
use WP_REST_Request;
use WP_REST_Response;
use WP_Query;

use App\Routes\Traits\RestRouteDataReturnTrait;

use function rest_ensure_response;

class BlogPosts
{

    use RestRouteDataReturnTrait;
    use RestRouteTrait;
    use RestRouteValidateTrait;

    /**
     * Post ID from API call
     *
     * @var int
     */
    protected int $postID;

    /**
     * Home constructor.
     */
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'registerRoutes',]);
    }

    /**
     * Creates the API Endpoint in WordPress
     */
    public function registerRoutes()
    :void
    {
        /**
         * Blog Posts
         */
        self::registerRoute(
            'blog-posts',
            WP_REST_Server::READABLE,
            [$this, 'getPosts'],
            '(?P<paged>[\d]+)',
            [
                [
                    'paged'          => [
                        'type'              => 'int',
                        'sanitize_callback' => 'absint',
                        'default'           => 1,
                    ],
                    's'              => [
                        'type'              => 'string',
                        'sanitize_callback' => [$this, 'sanitizeText'],

                    ],
                    'categories'       => [
                        'type'              => 'array',
                        'sanitize_callback' => [$this, 'sanitizeCats'],
                        'default'           => [],
                    ],
                    'posts_per_page' => [
                        'type'              => 'int',
                        'sanitize_callback' => [$this, 'validateIntStr'],
                        'default'           => 10,
                    ],
                ],
            ],
        );
    }

    /**
     * @param  WP_REST_Request  $request
     *
     * @return WP_Error|WP_HTTP_Response|WP_REST_Response
     */
    public function getPosts(WP_REST_Request $request)
    :WP_Error|WP_REST_Response|WP_HTTP_Response
    {
        $formatted_data = [
            'fetchErr' => true,
            'posts'    => [],
            'maxPages' => 0,
            'total'    => 0,
        ];
        $override_args  = [];
        try {
            $posts_per_page = $request->get_param('posts_per_page') ?? 5;
            $paged          = $request->get_param('paged') ?? 1;
            $categories     = $request->get_param('categories') ?? [];
            $search         = $request->get_param('s') ?? null;

            $default_args = $this->defaultQueryArgs();

            if ($paged) {
                $override_args['paged'] = $paged;
            }

            if ($posts_per_page) {
                $override_args['posts_per_page'] = $posts_per_page;
            }

            if ($search && is_string($search)) {
                $override_args['s'] = $search;
            }

            if (!empty($categories)) {
                $override_args['tax_query'] = [
                    'relation' => 'OR',
                ];

                $override_args['tax_query'][] = [
                    'taxonomy' => 'category',
                    'field'    => 'slug',
                    'terms'    => $categories,
                    'operator' => 'IN',
                ];
            }

            /**
             * Merge the defaults with the overrides
             */
            $query_args = wp_parse_args($override_args, $default_args);

            $query = new WP_Query($query_args);

            if ($query->found_posts > 0) {
                $return_data = [
                    'fetchErr' => false,
                    'maxPages' => $query->max_num_pages,
                    'posts'    => self::renderPosts($query->posts),
                    'total'    => $query->found_posts,
                ];

                $formatted_data = new WP_REST_Response($return_data, 200);
                $formatted_data->header('X-WP-Total', $query->found_posts);
                $formatted_data->header('X-WP-TotalPages', $query->max_num_pages);
            }
        } catch (Exception $exception) {
            $formatted_data = [
                'fetchErr' => true,
                'message'  => $exception->getMessage(),
                'status'   => 500,
            ];
        }

        error_log(print_r($formatted_data, true));

        return rest_ensure_response((object) $formatted_data);
    }

    /**
     * Used as a base for a WP_Query call to have the defaults already defined,
     * and can be combined with wp_parse_args($args, $defaultQueryArgs) to merge
     * them together
     *
     * @return array
     */
    protected function defaultQueryArgs()
    :array
    {
        return [
            'post_type'      => 'post',
            'posts_per_page' => 10,
            'orderby'        => 'date',
            'order'          => 'DESC',
        ];
    }
}
