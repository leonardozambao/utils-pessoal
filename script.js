$( document ).ready(function() {
    
});
$( window ).load(function() {
    
});

// mascaras
$("#telefone").mask("(99) 9999-99999"); 
$("#cpf").mask("000.000.000-00");
$("#cnpj").mask("99.999.999/9999-99");

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

// controlar classe no header com base no scroll da pagina

$(window).scroll(function (e) {
    if ($(window).width() > 768) {
        var scroll = $(this).scrollTop();
        divSelect(scroll);
    }
});

var lastScrollTop = 0;
function divSelect(scroll){
    if (scroll > lastScrollTop){
        //descendo scroll
        if (scroll > $('header').innerHeight() - 160){
            $('header').removeClass('show').addClass('no-top');
        }else{
            $('header').addClass('show').removeClass('no-top');
        }
    }
    else{
        //subindo scroll
        if (scroll > $('header').innerHeight()){
            $('header').addClass('no-top');
        }else{
            $('header').removeClass('no-top');
        }
        $('header').addClass('show');
    }
    lastScrollTop = scroll;
}