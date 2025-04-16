<?php

add_theme_support('title-tag');
add_theme_support('post-thumbnails');

register_nav_menus([
    'primary' => __('Menu Principal', 'psel-monks'),
]);

require get_template_directory() . '/inc/custom-post-type.php';
require get_template_directory() . '/inc/form-endpoint.php';
require get_template_directory() . '/inc/homepage-section-cpt.php';


add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header("Access-Control-Allow-Origin: http://localhost:5173");
        header("Access-Control-Allow-Credentials: true");
        return $value;
    });
});

add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/media/(?P<id>\d+)', [
        'methods'  => 'GET',
        'callback' => 'get_public_media',
        'permission_callback' => '__return_true',
        'args' => [
            'context' => [
                'default' => 'view',
            ],
        ],
    ]);
}, 1);

function get_public_media($request)
{
    $id = (int) $request['id'];
    $post = get_post($id);

    if (empty($post) || $post->post_type !== 'attachment') {
        return new WP_Error('not_found', 'Media not found', ['status' => 404]);
    }

    // Reaproveita o controller oficial para manter o padrão de resposta
    $controller = new WP_REST_Attachments_Controller('attachment');
    $response = $controller->prepare_item_for_response($post, $request);
    return rest_ensure_response($response);
}
