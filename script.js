$( document ).ready(function() {
    
});
$( window ).load(function() {
    
});

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