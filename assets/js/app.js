$("document").ready(() => {
  // Carousel
  $(".carousel").carousel({
    interval: 3000,
  });

  $(".carousel-control-prev").click(function (e) {
    e.preventDefault();
    $("#pvCarousel").carousel("prev");
  });

  $(".carousel-control-next").click(function (e) {
    e.preventDefault();
    $("#pvCarousel").carousel("next");
  });

  // Scroll de Menu
  $(".navbar a").click(function (e) {
    e.preventDefault();
    const goto = this.hash;
    $("html").animate(
      {
        scrollTop: $(goto).offset().top,
      },
      600
    );
  });

  // Tooltip en cards
  $('[data-toggle="tooltip"]').tooltip();
});
