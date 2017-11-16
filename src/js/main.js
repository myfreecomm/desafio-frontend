(function() {
	var scrollpos = window.scrollY;
	var header = document.querySelector("header");
	function add_class_on_scroll() {
		header.classList.add("fixed");
	}
	function remove_class_on_scroll() {
		header.classList.remove("fixed");
	}
	window.addEventListener('scroll', function(){ 
		scrollpos = window.scrollY;
		if(scrollpos > 500){
			add_class_on_scroll();
		}
		else {
			remove_class_on_scroll();
		}
	});
})();