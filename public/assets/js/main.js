(function(doc, win) {
  const app = (function() {
    const $element = doc.querySelector('[data-js="header"]');

    function fixedHeader() {
      if (win.pageYOffset >= 80) {
        $element.classList.add('fixed-effects');
      } else {
        return $element.classList.remove('fixed-effects');
      }
    }

    win.onscroll = fixedHeader;

    return {
      fixedHeader
    }

  })();

  app.fixedHeader();

})(document, window);