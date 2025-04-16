<?php

add_action('rest_api_init', function () {
    register_rest_route('psel/v1', '/contact', [
        'methods' => 'POST',
        'callback' => 'psel_handle_contact_form',
        'permission_callback' => '__return_true',
    ]);
});

function psel_handle_contact_form($request) {
    $params = $request->get_json_params();

    $name = sanitize_text_field($params['name'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $message = sanitize_textarea_field($params['message'] ?? '');

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        return new WP_REST_Response(['error' => 'All fields are required.'], 400);
    }

    // Create the post
    $post_id = wp_insert_post([
        'post_type'   => 'contact_submission',
        'post_status' => 'publish',
        'post_title'  => "Contact from $name",
        'post_content'=> $message,
        'meta_input'  => [
            'name'  => $name,
            'email' => $email,
        ],
    ]);

    if (is_wp_error($post_id)) {
        return new WP_REST_Response(['error' => 'Failed to save data.'], 500);
    }

    return new WP_REST_Response(['success' => true, 'post_id' => $post_id], 200);
}
