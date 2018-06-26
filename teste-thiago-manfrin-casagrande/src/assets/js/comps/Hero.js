const Hero = () => {
  const compImgs = [ 'iPad', 'iphone-horizontal', 'iphone-vertical', 'iMac', 'green-objects' ];

  return(`
    <section class="hero">
      <div class="hero__composition">
        ${ compImgs.map((img) => `<div class="hero-comp__${ img }"></div>`).join('') }
      </div>
      <div class="page-section__action">
        <h1 class="page-section-action__title"><span class="text--primary">Spotlight</span>, a Wordpress Theme for Creatives, Agencies & Small Businesses.</h1>
        <p class="page-section-action__text">
          Creativio is the perfect theme for the creative individual, agencies, freelancers, or small businesses. It comes
          packed full of goodies and comes with a world class design.
        </p>
        <a href="#" class="btn btn--primary">View Demo</a>
      </div>
    </section>
  `);
}

export default Hero;
