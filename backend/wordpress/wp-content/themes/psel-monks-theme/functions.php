<?php

add_theme_support('title-tag');
add_theme_support('post-thumbnails');

register_nav_menus([
    'primary' => __('Menu Principal', 'psel-monks'),
]);

require get_template_directory() . '/inc/custom-post-type.php';
require get_template_directory() . '/inc/form-endpoint.php';


add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        return $value;
    });
});
