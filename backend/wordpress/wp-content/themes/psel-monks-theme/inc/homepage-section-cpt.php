<?php

function register_homepage_section_cpt() {
    // Register a Hero-LP for homepage sections
    $labels = [
        'name' => 'Hero-LP Sections',
        'singular_name' => 'Hero-LP Section',
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

    // Register a Hero-LP for homepage sections
    $labels = [
        'name' => 'Products Sections',
        'singular_name' => 'Product Section',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'products-section'],
    ];

    register_post_type('products-section', $args);

    // Register a Simple Gallery for homepage sections
    $labels = [
        'name' => 'Simple Gallery',
        'singular_name' => 'Simple Gallery',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'simple-gallery'],
    ];

    register_post_type('simple-gallery', $args);

    // Register a Categories for homepage sections
    $labels = [
        'name' => 'Category Section',
        'singular_name' => 'Categories Section',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'categories-section'],
    ];

    register_post_type('categories-section', $args);

    // Register a Cards Section for homepage sections
    $labels = [
        'name' => 'Cards Section',
        'singular_name' => 'Cards Section',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-screenoptions',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'has_archive' => false,
        'rewrite' => ['slug' => 'cards-section'],
    ];

    register_post_type('cards-section', $args);
}
add_action('init', 'register_homepage_section_cpt');
