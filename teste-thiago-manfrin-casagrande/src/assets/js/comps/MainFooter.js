const MainFooter = () => {
  const footerNavListItems = [
    { title: 'Documentation', link: '#' },
    { title: 'Video', link: '#' },
    { title: 'Forum', link: '#' },
    { title: 'Purchase Today', class: 'item--primary', link: '#' },
    { title: 'Demo', link: '#' }
  ];

  return(`
    <footer class="main-footer">
      <nav class="main-footer__nav">
        <ul class="navigation__list navigation__list--centered">
          ${ footerNavListItems.map((item) => `
            <a href="${ item.link }" class="navigation-list__item">
              <li ${ item.class ? `class="${ item.class }"` : '' }>
                ${ item.title }
              </li>
            </a>
          `).join('') }
        </ul>
      </nav>
      <p class="main-footer__copyright">Copyright 2014. All Rights Reserverd.</p>
    </footer>
  `);
}

export default MainFooter;
