$(document).ready(function(){

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 500) {
	       $('.bx-topo').addClass('fixed-header');
	    }
	    else {
	       $('.bx-topo').removeClass('fixed-header');
	    }
	});

});