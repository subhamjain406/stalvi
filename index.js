$(document).ready(function () {
  var mockupSlider = $("#mockup-slider");
  var mockupSliderTitles = $("#mockup-slider-titles");

  mockupSlider.owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: false,
    pagination: false,
    mouseDrag: false,
    touchDrag: false,
  });

  mockupSliderTitles.owlCarousel({
    singleItem: true,
    autoPlay: true,
    navigation: false,
    pagination: false,
    mouseDrag: false,
    touchDrag: false,
  });

  $(".next").click(function () {
    mockupSlider.trigger("owl.next");
    mockupSliderTitles.trigger("owl.next");
  });
  $(".prev").click(function () {
    mockupSlider.trigger("owl.prev");
    mockupSliderTitles.trigger("owl.prev");
  });

  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 500) {
      $(".navbar").addClass("top-nav-collapse");
    } else {
      $(".navbar").removeClass("top-nav-collapse");
    }
  });

  $(window).scroll(function () {
    var positionTop = $(document).scrollTop();
    console.log(positionTop);
    if (positionTop > 600) {
      $(".facebook").addClass("animate__fadeInRight");
      setTimeout(() => {
        $(".linkedin").addClass("animate__fadeInRight");
      }, 100);
      setTimeout(() => {
        $(".instagram").addClass("animate__fadeInRight");
      }, 200);
      setTimeout(() => {
        $(".snapchat").addClass("animate__fadeInRight");
      }, 300);
      setTimeout(() => {
        $(".twitter").addClass("animate__fadeInRight");
      }, 400);
      setTimeout(() => {
        $(".pininterest").addClass("animate__fadeInRight");
      }, 500);
      setTimeout(() => {
        $(".youtube").addClass("animate__fadeInRight");
      }, 600);
    }
  });
});
