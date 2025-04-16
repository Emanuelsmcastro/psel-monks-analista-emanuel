<?php

function psel_register_form_cpt() {
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
