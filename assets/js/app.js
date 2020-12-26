jQuery(function ($) {
  // Dynamic Copyright year
  $("#year").text(new Date().getFullYear());

  // Toggler Menu
  $(".toggler").on("click", function (e) {
    e.preventDefault();
    $("span", this).toggleClass("lnr-menu lnr-cross");
    $(".menu ul").toggleClass("show");
  });

  // Clients Logo
  $(".clients-logo").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  
  // Portfolio Carousel
  $(".portfolio-carousel").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    
  });

});
