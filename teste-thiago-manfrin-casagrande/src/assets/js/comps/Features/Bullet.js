const Bullet = (title, icon, text) => {
  return(`
    <div class="bullet">
      <header class="bullet__header">
        <h2 class="bullet__title">${ title }</h2>
      </header>
      <div class="bullet__body">
        <div class="bullet__icon">
          <div class="bullet__icon--${ icon }"></div>
        </div>
        <p class="bullet__text">${ text }</p>
      </div>
    </div>
  `);
}

export default Bullet;
