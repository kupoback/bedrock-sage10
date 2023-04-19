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

class Search
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
            'search',
            WP_REST_Server::READABLE,
            [$this, 'getSearch'],
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
                ],
            ],
        );
    }

    /**
     * @param  WP_REST_Request  $request
     *
     * @return WP_Error|WP_HTTP_Response|WP_REST_Response
     */
    public function getSearch(WP_REST_Request $request)
    :WP_Error|WP_REST_Response|WP_HTTP_Response
    {
        $formatted_data = [];
        $query_args = collect(['post_type' => ['post', 'page'],]);
        try {
            $paged          = $request->get_param('paged') ?? 1;
            $search         = $request->get_param('s') ?? null;

            $query_args
                ->put('paged', $paged)
                ->put('s', $search ?? false)
                ->filter();

            $query = new WP_Query($query_args->filter()->toArray());

            if ($query->found_posts > 0) {
                $return_data = [
                    'posts'    => self::renderPosts($query->posts),
                    'maxPages' => $query->max_num_pages,
                    'total'    => $query->found_posts,
                ];

                $formatted_data = new WP_REST_Response($return_data, 200);
                $formatted_data->header('X-WP-Total', $query->found_posts);
                $formatted_data->header('X-WP-TotalPages', $query->max_num_pages);
            }
        } catch (Exception $exception) {
            $formatted_data = [
                'success' => false,
                'status'  => 500,
                'message' => $exception->getMessage(),
            ];
        }

        return rest_ensure_response((object) $formatted_data);
    }
}
