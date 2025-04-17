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
        $origin = get_option('cors_allowed_origin', 'http://localhost:5173');
        header("Access-Control-Allow-Origin: $origin");
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

add_action('admin_menu', function () {
    add_options_page(
        'CORS Settings',
        'CORS Settings',
        'manage_options',
        'cors-settings',
        'render_cors_settings_page'
    );
});

add_action('admin_init', function () {
    register_setting('cors_settings_group', 'cors_allowed_origin');

    add_settings_section(
        'cors_main_section',
        'Configuração de CORS',
        null,
        'cors-settings'
    );

    add_settings_field(
        'cors_allowed_origin_field',
        'Access-Control-Allow-Origin',
        function () {
            $value = get_option('cors_allowed_origin', 'http://localhost:5173');
            echo "<input type='text' name='cors_allowed_origin' value='" . esc_attr($value) . "' class='regular-text' />";
        },
        'cors-settings',
        'cors_main_section'
    );
});

function render_cors_settings_page() {
    ?>
    <div class="wrap">
        <h1>Configurações de CORS</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('cors_settings_group');
            do_settings_sections('cors-settings');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

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
