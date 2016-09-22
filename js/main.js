(function() {

	function stickyHeader() {
		var header = document.getElementById("header");

		if(window.pageYOffset > 500) {
			header.className = "sticky-header";
		} else {
			header.className = "";
		}
	}
	
	window.onscroll = stickyHeader;
})();