$( document ).ready(function() {
    
});
$( window ).load(function() {
    
});
//adicionar classe no menu de acordo com o scroll da pagina
var links = $('.menu a');
$(window).scroll(function () {
	var topScroll = $(window).scrollTop();
	links.each(function(){
		var href = $(this).attr('href');
		var el = $(href);
		var posSection = el.offset().top;
		var hSection = el.height();

		if(posSection <= topScroll && (posSection + hSection) > topScroll){
			links.removeClass('act');
			$(this).addClass('act');
		} else {
			$(this).removeClass('act');
		}
	})
})

// mascaras
$("#telefone").mask("(99) 9999-99999"); 
$("#cpf").mask("000.000.000-00");
$("#cnpj").mask("99.999.999/9999-99");
// Mascara de CPF e CNPJ
var CpfCnpjMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
},
    cpfCnpjpOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
        }
    };

$(function () {
    $(':input[name=docgestor]').mask(CpfCnpjMaskBehavior, cpfCnpjpOptions);
})
// efeito em elemento block

$('#my-block').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
});

//bloquear input no caso de outro estar preenchido
$('form #cnpj').on('focus', function(){
    if ( $("form #cpf").val().length == 14){
        $('#cnpj').attr("disabled", true);}
});

// adicionar classe no menu conforme scroll

function changeState(e, eClass) {
    if ($(e).hasClass(eClass)) {
        return false;
    } else {
        $('section').removeClass(eClass);
        $(e).addClass(eClass);
    }
}

var lastScrollTop = 0;
function divSelect(scroll) {

    if (scroll > lastScrollTop) {
        //descendo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').removeClass('show').addClass('no-top');
        } else {
            $('header').addClass('show').removeClass('no-top');
        }
    } else {
        //subindo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').addClass('no-top');
        } else {
            $('header').removeClass('no-top');
        }
        $('header').addClass('show')
    }
    lastScrollTop = scroll;
};
$(window).scroll(function (e) {
    var scroll = $(this).scrollTop();
    divSelect(scroll);
});

// adicionar classe na section conforme scroll da pagina

function changeState(e, eClass) {
    if ($(e).hasClass(eClass)) {
        return false;
    } else {
        $('section').removeClass(eClass);
        $(e).addClass(eClass);
    }
}

var lastScrollTop = 0;
function divSelect(scroll) {
    $('section').each(function () {
        var posDiv = $(this).offset().top;
        var divHeight = $(this).innerHeight();
        var divPosition = posDiv + divHeight;
        var windowHeight = $(window).innerHeight();
        var scrollPosition = scroll;

        if (scrollPosition > posDiv) {
            changeState($(this), 'state-one');
        }
        if (scrollPosition > posDiv - (windowHeight / 2) && scrollPosition < divPosition + (windowHeight / 2)) {
            changeState($(this), 'state-two');
        }
        if (scrollPosition > posDiv - ((windowHeight / 2) + 200) && scrollPosition < divPosition - windowHeight) {
            changeState($(this), 'state-three');
        }
    });

    if (scroll > lastScrollTop) {
        //descendo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').removeClass('show').addClass('no-top');
        } else {
            $('header').addClass('show').removeClass('no-top');
        }
    } else {
        //subindo scroll
        if (scroll > $('header').innerHeight()) {
            $('header').addClass('no-top');
        } else {
            $('header').removeClass('no-top');
        }
        $('header').addClass('show')
    }
    lastScrollTop = scroll;
};
$(window).scroll(function (e) {
    var scroll = $(this).scrollTop();
    divSelect(scroll);
});

// scroll horizontal
$(document).ready(function () {
    $('.recomendacoes .nav li').click(function () {
        if (!$(this).hasClass('act')) {
            $('.recomendacoes .nav li').removeClass('act');
            $(this).addClass('act');

            if ($(this).index() == 1) {
                $('.recomendacoes .recomendacoes-ativos').css('transform', 'translateX(-100%)');
                $('.recomendacoes .carteiras-recomendadas').css('transform', 'translateX(-100%)');
            }
            else {
                $('.recomendacoes .carteiras-recomendadas').css('transform', 'translateX(0)');
                $('.recomendacoes .recomendacoes-ativos').css('transform', 'translateX(0)');
            }
        }
    })
});

// trabalhando com index de elementos
$(document).ready(function () {
    $('.menu-vertical li').click(function () {
        $('.menu-vertical li').removeClass('act');
        $(this).addClass('act');
        var position = ($(this).index()) * 1;
        var div = $('.investimento > div')[position];
        $('.investimento div').removeClass('act');
        $(div).addClass('act');
    })
});


//verificando se tem elemento vazio + usando each
$('.header .submenu .box').each(function () {
    if ($(this).is(':empty')) {
        $(this).parent().parent().addClass('empty');
    }
})

// pegando tamanho da tela 
var width = screen.width;

// verificando sistema operacional

var OSNome = "";
if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSNome = "Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSNome = "Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSNome = "Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSNome = "Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSNome = "Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSNome = "Windows 2000";
if (window.navigator.userAgent.indexOf("Mac") != -1) OSNome = "Mac/iOS";
if (window.navigator.userAgent.indexOf("X11") != -1) OSNome = "UNIX";
if (window.navigator.userAgent.indexOf("Linux") != -1) OSNome = "Linux";
console.log('Seu Sistema Operacional: ' + OSNome);

// browser update

//<![CDATA[
navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		
		M[0].trim();
		M[1].trim();
		
		if(M[0]=="MSIE" && M[1]<="8")  {
			window.location.replace('http://www.updateyourbrowser.net/pt');
		}
		
		else if (M[0]=="Firefox" && M[1]<="30") {
			window.location.replace('http://www.updateyourbrowser.net/pt');
		}
		
		else if (M[0]=="Chrome" && M[1]<="45") {
		}
})();

// scroll até elemento + calculo com pixels
$([document.documentElement, document.body]).animate({
    scrollTop: $(".timeline .active").offset().top - 300
}, 1000);

//descobrir qual elemento está gerando scroll horizontal na pagina

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

//função para voltar ao topo
function returnTop(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
}

//iframe do youtube proporcional
 jQuery(document).ready(function () {

            if (window.innerWidth < 1067) {
                window.onresize = resizeIframeYoutube;
                resizeIframeYoutube();
            }

            function resizeIframeYoutube () {
                valorAltura = parseInt(jQuery('.liveYoutube iframe').innerWidth() * 0.56);
                jQuery('.liveYoutube iframe').css('height', String(valorAltura) + 'px')
            }

        });

function accordeon(el) {
            if ($(el).parent().hasClass('open')) {
                $(el).next('section').slideToggle();
                $(el).parent().toggleClass('open');
            } else {
                $('.accordeon section').slideUp();
                $('.accordeon article').removeClass('open');
                $(el).next('section').slideToggle();
                $(el).parent().toggleClass('open');
                scrollToElement(el, 400, '', 15);
            }
        }
/* html 
<div class="accordeon">
	<article>
	    <header class="flex-between flex-align-center" title="Expandir/Recolher" onclick="accordeon(this);">
		<h3>Como funciona?</h3>
		<span class="arrow"></span>
	    </header>
	    <section class="hide">
		<p>
		    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat soluta culpa tempora fugit vitae eligendi, est quo, assumenda facere doloribus porro eaque quos officia nulla maiores voluptatum vel. Modi?
		</p>
	    </section>
	</article>
</div> 
//css
.accordeon{
        h3{
            font-size: 2.8rem;
            color: #343A40;
            font-weight: normal;
        }
        .arrow{
            display: block;
            width: 13px;
            height: 13px;
            border: solid 2px #000;
            border-bottom: 0;
            border-left: 0;
            transition: all 400ms ease;
            transform: rotate(135deg);
            top: -3px
        }
        header{
            padding: 3.2rem 2.9rem;
            background-color: #fff;
            cursor: pointer;
            border-bottom: solid 1px #F2F4EF;
        }
        section{
            background-color: #F9FAF7;
            padding: 4.8rem 2.9rem;
            p{
                @extend %font2;
            }
        }
        .open{
            .arrow{
                transform: rotate(-45deg);
                top: 1px;
            }
        }
    }
    
    */
	   
