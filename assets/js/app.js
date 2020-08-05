$(document).ready(function () {
  let resultTest = {
    range: $("input[type=range]"),
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
    init: function () {
      resultTest.triggerRange()
      resultTest.timeIconAnim()
      resultTest.reset()
    }
  }
  resultTest.init()
})
