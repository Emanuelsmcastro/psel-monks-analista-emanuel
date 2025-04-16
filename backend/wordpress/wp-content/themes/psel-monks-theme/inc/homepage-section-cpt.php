<?php

function register_homepage_section_cpt() {
    $labels = [
        'name' => 'Hero-LP Sections',
        'singular_name' => 'Hero-LP Sections',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'hero-lp-section'],
    ];

    register_post_type('hero-lp-section', $args);
}
add_action('init', 'register_homepage_section_cpt');
