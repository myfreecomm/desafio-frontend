$(function () {
    var fixTop = $('#theme-features').offset().top;       // pega posição inicial do elemento

    $(window).scroll(function() {                  // cria o event listener do scroll

        var currentScroll = $(window).scrollTop(); // pega posição atual do elemento

        if (currentScroll >= fixTop) {           // aplica position: fixed se usar
            $('#header-fix').css({                      // scroll a partir do elemento
                position: 'fixed',
                top: '0',
                left: '0'
            });
        } else {                                   // aplica position: static
            $('#header-fix').css({                      // se usar scroll para cima do elemento
                position: 'static'
            });
        }

    });
});