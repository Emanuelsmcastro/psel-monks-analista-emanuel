<?php

function psel_register_form_cpt() {
    $labels = [
        'name' => 'Formulários',
        'singular_name' => 'Formulário',
    ];

    $args = [
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'custom-fields'],
        'menu_icon' => 'dashicons-feedback',
    ];

    register_post_type('formulario', $args);
}
add_action('init', 'psel_register_form_cpt');
