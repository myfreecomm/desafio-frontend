$( document ).ready(function() {
   onScrollUpOrDown();
});


function onScrollUpOrDown(){
   var lastScrollTop = 0;
   var flag = $('#theme-features').offset().top;
   $(window).scroll(function(event){
      var currentScroll = $(this).scrollTop();
      if( currentScroll >= (flag - 20) )
      {
         $('#ro-header').removeClass('bounceOutUp');
         $('#ro-header').addClass('ro-header-fixed');
         $('#ro-header').addClass('bounceInDown');
         $('body').css({'paddingTop':70});
      }
      else{
         $('#ro-header').removeClass('bounceInDown');
         $('#ro-header').removeClass('ro-header-fixed');
         $('body').css({'paddingTop':0});
      }
   });
}