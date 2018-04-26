import "../scss/general.styles.scss";

// Menu mobile toggler
let toggler = document.getElementById("menu-toggle");
toggler.addEventListener("click", function() {
  document.getElementById("main-menu").classList.toggle("active");
});

// Sticky header
window.onscroll = function() {
  checkOffset();
};

let features = document.getElementById("features");
let header = document.getElementById("header");

let sticky = features.offsetTop;

function checkOffset() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
