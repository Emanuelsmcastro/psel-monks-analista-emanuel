<?php

function psel_register_form_cpt()
{
    $labels = [
        'name' => 'Contact Submissions',
        'singular_name' => 'Contact Submission',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'custom-fields'],
        'menu_icon' => 'dashicons-feedback',
    ];

    register_post_type('contact_submission', $args);
}

add_action('init', 'psel_register_form_cpt');

add_action('rest_api_init', function () {
    register_rest_route('psel/v1', '/security-challenge', [
        'methods' => 'GET',
        'callback' => 'generate_security_challenge',
        'permission_callback' => '__return_true',
    ]);
});

function generate_security_challenge()
{
    if (!session_id()) {
        session_start();
    }

    $a = rand(100, 999);
    $b = rand(100, 999);

    $_SESSION['security_sum'] = $a + $b;

    return [
        'a' => $a,
        'b' => $b,
    ];
}
