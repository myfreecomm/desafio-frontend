const themeFeatures = document.querySelector('#themeFeatures')
const header = document.querySelector('#header')
const main = document.querySelector('#main')

const fixaMenu = () => {
  if (window.scrollY > 0 && window.scrollY < themeFeatures.offsetTop){
    header.classList.add('header--oculto')
    main.classList.add( 'main--relativo' )
  }else{
    console.log('entrou')
    header.classList.remove( 'header--oculto' )
    header.classList.add('header--fixo')
  }
}

window.addEventListener('scroll', fixaMenu)