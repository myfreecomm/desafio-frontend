
$(document).ready(function(){
    $(window).scroll(function () {
      var $menu = $('#header');     
      var $content = $('#content');
      var scroll = $(window).scrollTop();
        if (scroll >= 665) {
            $menu.css( {
                "top" : "0px",
                "position": "fixed",
            });
            $content.css('margin-top','140px');
        } else {
            $menu.css( {
                "position": "relative",
                "top" : "0px",
            });
            $content.css('margin-top','0px');
        }
    });
});