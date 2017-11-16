//MAIN
var header = (($) => {
  //functions privates
  const functions = {
    setFixed(elScroll, elFixed) {
      const scrollTop = elScroll.scrollTop()
        , offset = $(`[data-ref='${elFixed}']`).offset().top
        , inOffset = () => scrollTop >= offset
        , setFixed = () => inOffset()
          ? $(elFixed).attr('data-active', 'true')
          : $(elFixed).attr('data-active', 'false')

        //set fixed if necessary
        setFixed()
    }
  }

  //all events
  const events = () => {
    $(document).ready(() => {
      //call when ready document
      functions.setFixed(
        $(window),
        '.header'
      )

      //call on scroll event
      $(window).on('scroll', (e) => {
        functions.setFixed(
          $(e.currentTarget),
          '.header'
        )
      })
    })
  }

  return {
    //init header
    init() {
      events()
    }
  }
})(jQuery)

//init object
header.init()
