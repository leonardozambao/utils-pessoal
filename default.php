<?php 

//contar post do array
$size = count($queryPosts->posts);
?>
<!-- forçar arquivo sem cache -->
<link type="text/css" rel="stylesheet" href="<?php bloginfo('template_directory')?>/landing_page_plano_expansao/style.css?=<?php echo date('dmyhis'); ?>" />



<?php the_title( '<h3>', '</h3>' ); ?>
<h3><?php echo get_the_title() ?></h3>

//pegar ultima string
array_pop(explode('/', $string));














