<?php
//custom end point com paginação
add_action('rest_api_init', function () {
    //wp-json/wp/v2/GetMidias/pagina/quantidade de posts
    register_rest_route('wp/v2', '/GetMidias/(?P<page>[1-9]{1,2})/(?P<posts>[1-9]{1,2})', array(
        'methods' => 'GET',
        'callback' => 'GetMidias',
        'args' => array(
            'page' => array(
                'required' => true
            ),
            'page' => array(
                'required' => true
            ),
        )
    ));
});
function GetMidias(WP_REST_Request $request)
{
    $page = $request['page'];
    $posts_per_page = $request['posts'];
    $args = array(
        'post_type' => "guide-midia",
        'posts_per_page' => $posts_per_page,
        'paged' => $page,
    );
    $array = get_posts($args);
    foreach ($array as $key_ => $item) {
        $array[$key_]->data_midia = get_post_meta($item->ID, 'data_midia', true);
        $array[$key_]->veiculo_midia = get_post_meta($item->ID, 'veiculo_midia', true);
        $array[$key_]->link_midia = get_post_meta($item->ID, 'link_midia', true);
        $array[$key_]->thumbnail = get_the_post_thumbnail_url($item->ID, 'full');
    }
    return $array;
}
