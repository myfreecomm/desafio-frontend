const nav = document.getElementsByTagName('nav')[0];

init();

function init() {
    scrollMenu();
    menuMobile();
}

function scrollMenu() {
    document.addEventListener("scroll", function () {
        const pageForum = document.getElementsByClassName('page-forum')[0];

        if (pageForum.offsetTop < (window.scrollY + 50) && (window.innerWidth > 714)) {
            nav.classList.add('menu-fixed');
        }
        else if (nav.className.indexOf('menu-fixed') !== -1 && (window.innerWidth > 714)) {
            nav.classList.add('menu-fixed-disabled');

            setTimeout(function () {
                nav.classList.remove('menu-fixed');
                nav.classList.remove('menu-fixed-disabled');
            }, 300);
        }

    });
}

function menuMobile() {
    const menu = document.getElementsByClassName('icon-menu')[0];
    const backgroundMenu = document.getElementsByClassName('background-menu')[0];
    const menuMobile = document.getElementsByTagName('a');

    menu.addEventListener("click", function () {
        nav.classList.add('menu-mobile-active');
    });

    for (let i = 0; menuMobile.length > i; i++) {

        menuMobile[i].addEventListener("click", function () {
            nav.classList.add('menu-mobile-disabled');

            setTimeout(function () {
                nav.classList.remove('menu-mobile-active');
                nav.classList.remove('menu-mobile-disabled');
            }, 300);
        });
    }

    backgroundMenu.addEventListener("click", function () {
        nav.classList.add('menu-mobile-disabled');

        setTimeout(function () {
            nav.classList.remove('menu-mobile-active');
            nav.classList.remove('menu-mobile-disabled');
        }, 300);
    });
}