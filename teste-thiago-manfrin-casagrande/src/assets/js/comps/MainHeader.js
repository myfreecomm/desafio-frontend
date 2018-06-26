const MainHeader = () => {
  const headerNavListItems = [
    { title: 'Video', link: '#' },
    { title: 'Forum', link: '#' },
    { title: 'Purchase Today', link: '#' },
    { title: 'Demo', link: '#' }
  ];

  return(`
    <header class="main-header">
      <div class="main-header__logo">
        <span class="logo">Web Designer</span>
        <span class="logo--small">Ninja</span>
      </div>
      <nav class="main-header__nav">
        <ul class="navigation__list">
          ${ headerNavListItems.map((item) => `
              <a href="${ item.link }" class="navigation-list__item">
                <li>
                  ${ item.title }
                </li>
              </a>
            `).join('') }
        </ul>
      </nav>
    </header>
  `);
}

export default MainHeader;
