const stickyHeader = () => {
  if (window.matchMedia('(min-width: 640px)').matches) {
    const header = document.querySelector('.header');
    const theme = document.querySelector('.features');

    window.addEventListener('scroll', () => {
      if (window.scrollY >= theme.offsetHeight - 80) {
        header.classList.add('header--fixed');
        header.getBoundingClientRect(); // Força o reflow do DOM
        header.classList.add('header--fixed--show');
      } else {
        if (header.classList.contains('header--fixed--show')) {
          header.classList.add('header--fixed--hide');
          header.classList.remove('header--fixed--show');
        }
        if (
          header.classList.contains('header--fixed') &&
          window.scrollY <= 150
        ) {
          header.classList.remove('header--fixed');
          header.classList.remove('header--fixed--hide');
        }
      }
    });
  }
};

export default stickyHeader;
