<?php
declare(strict_types = 1);

namespace App\Routes;

use App\Helper\Helper;
use App\Helper\ImageHelper;
use App\Routes\Traits\RestRouteParams;
use App\Routes\Traits\RestRouteValidators;
use Carbon\Carbon;
use WP_REST_Server;
use WP_REST_Request;
use WP_REST_Response;
use WP_Query;

class BlogPosts
{
    
    use RestRouteValidators;
    use RestRouteParams;
    
    /**
     * Post ID from API call
     *
     * @var int
     */
    protected $postID;
    
    /**
     * Home constructor.
     */
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'registerRoutes',]);
    }
    
    /**
     * Creates the API Endpoint in Wordpress
     */
    public function registerRoutes()
    {
        $this->route = "$this->namespace/$this->version";
        /**
         * Grabs a list of blog posts and manages the search query
         */
        register_rest_route($this->route, '/blog-posts/(?P<paged>[\d]+)', [
            'methods'  => WP_REST_Server::READABLE,
            'callback' => [$this, 'getPosts'],
            'args'     => [
                [
                    'paged'    => [
                        'type'              => 'int',
                        'sanitize_callback' => 'absint',
                        'default'           => 1,
                    ],
                    's'        => [
                        'type'              => 'string',
                        'sanitize_callback' => [$this, 'sanitizeText'],
                    
                    ],
                    'category' => [
                        'type'              => 'array',
                        'sanitize_callback' => [$this, 'sanitizeCats'],
                        'default'           => [],
                    ],
                ],
            ],
        ]);
    }
    
    /**
     * @param \WP_REST_Request $request
     *
     * @return mixed|\WP_REST_Response
     */
    public function getPosts(WP_REST_Request $request)
    {
        $formatted_data = [];
        $args           = [];
        try {
            $posts_per_page = $request->get_param('posts_per_page') ?? '';
            $page           = $request->get_param('paged') ?? 1;
            $cat_id         = $request->get_param('catId') ?? '';
            $search         = $request->get_param('s') ?? null;
            
            $default_args = $this->defaultQueryArgs();
            
            $page ? $args['paged'] = $page : null;
            $posts_per_page ? $args['posts_per_page'] = $posts_per_page : null;
            $search && is_string($search) ? $args['s'] = $search : null;
            
            if (!empty($cat_id) && $cat_id !== 0) {
                $args['tax_query'] = [
                    'relation' => 'AND'
                ];
            
                $args['tax_query'][] = [
                    'taxonomy' => 'category',
                    'field' => 'term_id',
                    'terms' => [$cat_id],
                    'operator' => 'IN'
                ];
            }
            
            /**
             * Merge the defaults with the overrides
             */
            $query_args = wp_parse_args($args, $default_args);
            
            $query = new \WP_Query($query_args);
            
            if (!is_wp_error($query)) {
                $max_pages            = $query->max_num_pages;
                $total                = $query->found_posts;
                $posts                = $query->posts;
                $return_data['posts'] = [];
                
                if ($total > 0) {
                    $return_data['posts'] = self::renderRosts($posts);
                }
                
                $return_data['total']    = $total;
                $return_data['maxPages'] = $max_pages;
                $formatted_data          = new WP_REST_Response($return_data, 200);
                $formatted_data->header('X-WP-Total', $total);
                $formatted_data->header('X-WP-TotalPages', $max_pages);
            }
        } catch (\Exception $e) {
            $formatted_data = [
                'success' => false,
                'status'  => 500,
            ];
        }
        
        return \rest_ensure_response((object) $formatted_data);
    }
    
    /**
     * Our return loop of post data
     *
     * @param $posts
     *
     * @return \Illuminate\Support\Collection|void
     */
    public function renderRosts($posts)
    {
        if (!$posts) {
            return;
        }
        
        return collect($posts)
            ->map(function ($post) {
                $post_date  = new Carbon($post->post_date);
                $image      = has_post_thumbnail($post) ? (object) ImageHelper::generateImgData(get_post_thumbnail_id($post)) : [];
                $excerpt    = (!empty($post->post_excerpt) ? $post->post_excerpt : $post->post_content);
                $categories = wp_get_post_categories($post->ID, ['fields' => 'names']);
            
                return [
                    'author'     => get_the_author_meta('display_name', $post->post_author),
                    'categories' => $categories && !is_wp_error($categories) ? collect($categories)->first() : '',
                    'date'       => $post_date->format('m-d-Y'),
                    'excerpt'    => html_entity_decode(Helper::grabExcerpt($excerpt, 25)),
                    'id'         => $post->ID,
                    'image'      => $image,
                    'permalink'  => get_the_permalink($post),
                    'title'      => $post->post_title,
                ];
            });
    }
}

new BlogPosts();
