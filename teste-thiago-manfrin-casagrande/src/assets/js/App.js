// # MAIN SASS
import '../scss/app.scss';

// # COMPS
import MainHeader from './comps/MainHeader';
import Hero from './comps/Hero';
import Features from './comps/Features/Features';
import Purchase from './comps/Purchase';
import MainFooter from './comps/MainFooter';

const App = () => {
  return(`
    ${ MainHeader() }
    ${ Hero() }
    ${ Features() }
    ${ Purchase() }
    ${ MainFooter() }
  `);
}

export default App;
