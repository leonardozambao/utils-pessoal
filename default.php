<?php 
//debugar no console
function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

//contar post do array
$size = count($queryPosts->posts);
?>
<!-- forçar arquivo sem cache -->
<link type="text/css" rel="stylesheet" href="<?php bloginfo('template_directory')?>/landing_page_plano_expansao/style.css?=<?php echo date('dmyhis'); ?>" />



<?php the_title( '<h3>', '</h3>' ); ?>
<h3><?php echo get_the_title() ?></h3>

//pegar ultima string
array_pop(explode('/', $string));

//pegar id do vídeo do youtube e montar player 

<div class="modal-video" style="display: none;">
    <div class="contentPopup">
        <div class="title">
        <?php echo $BlocoConteudo['text1'] ?>
            <svg onclick="$('.modal-video').fadeOut();player1.pauseVideo();" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" style="position: absolute;top:20px;right:20px;cursor: pointer">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1464 19.8535L6.14644 6.85356L6.85355 6.14645L19.8535 19.1464L19.1464 19.8535ZM12.1348 14.5723L6.85355 19.8535L6.14644 19.1464L11.4277 13.8652L12.1348 14.5723ZM19.8535 6.85356L14.5723 12.1348L13.8652 11.4277L19.1464 6.14645L19.8535 6.85356Z" fill="white"></path>
        </div>
        <div class="context">
            <div id="player1"></div>
        </div>
    </div>
</div>
<?php 
preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $BlocoConteudo['link1'], $match);
$youtube_id = $match[1];
?>
<script>
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
            videoId: '<?php echo $youtube_id ?>',
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            player1.pauseVideo();
        }
    }
</script>

//criar função para lsitar paginas do site em array 
  
function custom_rewrite_basic()
{
    add_rewrite_rule(
        '^fundos/([^/]+)/?',
        'index.php?page_id=1029&fundos=$matches[1]',
        'top'
    );
}
add_action( 'init',  'custom_rewrite_basic' );
function wdm_add_queryvars( $query_vars ) {
    $query_vars[] = 'fundos';
    return $query_vars;
}
add_filter( 'query_vars', 'wdm_add_queryvars');

function wp_get_pages($args = '') {
	if ( is_array($args) )
	  $r =  &$args;
	else
	  parse_str($args, $r);
   
	$defaults = array('depth' => 0, 'show_date' => '', 'date_format' => get_option('date_format'),
	  'child_of' => 0, 'exclude' => "", 'title_li' => __('Pages'), 'echo' => 1, 'authors' => '', 'sort_column' => 'menu_order, post_title');
	$r = array_merge($defaults, $r);
   
	$output = '';
	$current_page = 0;
   
	// sanitize, mostly to keep spaces out
	$r['exclude'] = preg_replace('[^0-9,]', '', $r['exclude']);
   
	// Allow plugins to filter an array of excluded pages
	$r['exclude'] = implode(',', apply_filters('wp_list_pages_excludes', explode(',', $r['exclude'])));
   
	// Query pages.
	$pages = get_pages($r);
   
	return $pages;
  }
	
//adicionar classe ao submenu padrão
function new_submenu_class($menu) {    
    $menu = preg_replace('/ class="sub-menu"/','/ class="sub-menu animated fadeInDown" /',$menu);        
    return $menu;      
}

add_filter('wp_nav_menu','new_submenu_class'); 
  











