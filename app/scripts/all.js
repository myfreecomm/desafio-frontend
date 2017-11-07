'use strict';

var themeFeatures = document.querySelector('#themeFeatures');
var header = document.querySelector('#header');
var main = document.querySelector('#main');

var fixaMenu = function fixaMenu() {
  if (window.scrollY > 0 && window.scrollY < themeFeatures.offsetTop) {
    header.classList.add('header--oculto');
    main.classList.add('main--relativo');
  } else {
    console.log('entrou');
    header.classList.remove('header--oculto');
    header.classList.add('header--fixo');
  }
};

window.addEventListener('scroll', fixaMenu);