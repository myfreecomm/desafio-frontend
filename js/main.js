window.Desafio = {
    modules: {}
  };

  Desafio.modules.counter = (function (){
    
     var current = 0;

	 return {
	   name: "counter",
	   next: function () {
	     return current + 1;
	     },
	     isFirst: function () {
	        return current == 0;
	      }
	 };
  })();

Desafio.modules.menssagem = (function (){
	return {
		menssagem: "Desafio Webdesign Frederick",
		talk: function(){
			return "Mundo a Descobrir";
		}
	};
})();
IndexRoute.fn.animateSvg = function() {
		var lastScrollTop = 0;
		
		if($(window).width() <= 641){
			return false;
		}

		$(window).scroll(function(event){
			var st = $(this).scrollTop();

			if (st > lastScrollTop){
				if(st >= 660){
					$('#Layer_1').find('path').attr('d', 'M2497,0.2l-251.51-0.1H2044.5h-176.99h-85.496h-220.489H1425h-52.466h-149.993h-68.997h-121.494h-205.49 H598.573H483.079H318.087L117,0.3L0,0.101v149.8h2560V0.101');
					$('.navMenu').addClass('compact animationNav');
				}
			}else{
				if(st < 660){
					$('#Layer_1').find('path').attr('d', 'M2497,0.3l-256,56l-198-40l-220,40l-44-36l-236,22L1425,0.2L1359,56h-156l-50-27.8l-122,42.2l-204-48	  l-240,46l-107-58l-133,102L117,0.4L0,88.4V150h2560V34.4');
					$('.navMenu').removeClass('compact animationNav');
				}
			}

			lastScrollTop = st;
		});
	};
