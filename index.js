$(() => {
  // $(document).ready(function () {
  //   $('.parallax').parallax()
  // })
  $(document).ready(function () {
    $(".button-collapse").sideNav()
    $('.parallax').parallax()
  })
  // fuctions to add scroll animation when clickin on nav bar buttons.
  $('.about-me-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.about-me').offset().top
    }, 1000)
  })
  $('.skills-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.skills').offset().top
    }, 1000)
  })
  $('.resume-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.resume').offset().top
    }, 1000)
  })
  $('.projects-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.projects').offset().top
    }, 1000)
  })
  $('.contact-me-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('.page-footer').offset().top
    }, 1000)
  })
})
