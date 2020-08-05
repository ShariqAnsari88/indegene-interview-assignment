$(document).ready(function () {
  let resultTest = {

    range: $("input[type=range]"),
    mbSlider: $(".mb-slider"),
    isMobile: window.innerWidth <= 800,

    triggerRange: function () {

      $(".trigger-left").click(() => resultTest.range.val(1))
      $(".trigger-right").click(() => resultTest.range.val(3))

    },

    timeIconAnim: function () {

      $(".time-icon").hover(
        function () {
          $(this).siblings().addClass("disabled")
        },
        function () {
          $(this).siblings().removeClass("disabled")
        }
      )

      $(".time-icon").click(function () {
        $(this).addClass("active")
        $(this).parent().addClass("has-active")
        $(this).siblings().addClass("disabled")
        $(this).siblings().removeClass("active")
      })

    },

    reset: function () {

      $(".reset").click(function (e) {
        e.preventDefault()
        resultTest.range.val(1)
        $(".time-icon").removeClass("active")
        $(".time-icons-section").removeClass("has-active")
      })

    },

    slick: function(el, slidesToShow, slidesToScroll, arrows, dots, centerMode, infinite, centerPadding){

      $(".time-icon").each(function(ind, elm){
        $(elm).children().wrapAll("<div class='mb flex justify-content-center align-items-center flex-flow-column'>")
      })

      el.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        arrows: arrows,
        dots: dots,
        centerMode: centerMode,
        infinite: infinite,
        centerPadding: centerPadding
      });

    },

    init: function () {

      let windowHeight = window.innerHeight
      $("body").css({"min-height":windowHeight})

      resultTest.triggerRange()
      if(resultTest.isMobile !== true) resultTest.timeIconAnim()
      if(resultTest.isMobile === true) resultTest.slick(resultTest.mbSlider, 1, 1, false, true, true, true, '60px')
      resultTest.reset()

    }
  }
  resultTest.init()
})
