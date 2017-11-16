window.onscroll = function() {pinMenu()};

function pinMenu() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        document.getElementById("fix").className = "fixed";
    } else {
        document.getElementById("fix").className = "";
    }
}