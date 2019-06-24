$( document ).ready(function() {
    
});
$( window ).load(function() {
    
});

// mascaras
$("#telefone").mask("(99) 9999-99999");

// efeito em elemento block

$('#my-block').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','inline-block');
});
