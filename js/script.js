$(document).ready(function () {
  // when the doc/page is ready this code will execute
  $("#slides").superslides({
    animation: "fade",
    play: "5000", // every 5 seconds the slide will change auto,
    pagination: false, // at bottom centre those 3 dots will be removed
  });

  var typed = new Typed(".typed", {
    strings: ["Student of BIT MESRA", "Flutter Developer", "Full Stack Developer", "Swimmer"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: false,
    items: 5,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
      938: {
        items: 5,
      },
    },
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  // console.log(skillsTopOffset)

  $(window).scroll(function () {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false, //removes those marks on pie charts
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }
  });

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });

  $("#filters a").click(function () {
    $("#filters .current").removeClass("current"); //first remove the current class
    $(this).addClass("current"); // this refers to current button we will click

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector, // here we are retrieving the data filtered value for the button's currently clicked
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });

    return false;
  });

  $("#navigation li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top; //this is the position we use to decide when to add with the class

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      // scrollTop() -- jquery function
      body.css("padding-top", nav.outerHeight() + "px"); //padding ---- background  jumping issue
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
