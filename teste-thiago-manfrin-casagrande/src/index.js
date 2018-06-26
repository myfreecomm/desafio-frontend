// # SASS
import './assets/scss/app.scss';

// # FLASH LIB
import Flash from './assets/js/flash';

// # COMPS
import App from './assets/js/App';


// # RENDER
const appContainer = document.querySelector('#app');
const flash = new Flash();
flash.renderApp(appContainer, App());


// Handle Header Scroll
window.onscroll = () => {
  const mainHeader = document.querySelector('.main-header');
  let scrollPos = window.pageYOffset;

  if (scrollPos > 1000) {
    mainHeader.classList.add('main-header--sticky');
  } else {
    mainHeader.classList.remove('main-header--sticky');
  }
}


// # FEATHER ICONS
feather.replace();
