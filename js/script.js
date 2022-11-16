let numOfHeaderItems;

$(document).ready(() => {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(".nav-item").click(function (e) {
    $(".toggled-nav-item").removeClass("toggled-nav-item");
    $("#" + `${e.target.id}`).addClass("toggled-nav-item");
  });

  numOfHeaderItems = $(".nav-item").length;
  numOfHeaderItems--;
});

$(window).on("scroll load", function () {
  $("#menu").removeClass("fa-times");
  $("header").removeClass("toggle");

  let windowScrollTop = $(window).scrollTop();
  if (windowScrollTop > 0) {
    $(".top").show();
  } else {
    $(".top").hide();
  }
  console.log(windowScrollTop);

  let scrollablePixels =
    document.documentElement.offsetHeight - window.innerHeight;
  let aboutMinThreshold = scrollablePixels / numOfHeaderItems;
  let educationMinThreshold = (scrollablePixels / numOfHeaderItems) * 2;
  let portfolioMinThreshold = (scrollablePixels / numOfHeaderItems) * 3;
  let contactMinThreshold = (scrollablePixels / numOfHeaderItems) * 4;

  switch (true) {
    case windowScrollTop >= 0 && windowScrollTop < aboutMinThreshold:
      $(".toggled-nav-item").removeClass("toggled-nav-item");
      $("#home-nav-id").addClass("toggled-nav-item");
      break;

    case windowScrollTop >= aboutMinThreshold &&
      windowScrollTop < educationMinThreshold:
      $(".toggled-nav-item").removeClass("toggled-nav-item");
      $("#about-nav-id").addClass("toggled-nav-item");
      break;

    case windowScrollTop >= educationMinThreshold &&
      windowScrollTop < portfolioMinThreshold:
      $(".toggled-nav-item").removeClass("toggled-nav-item");
      $("#education-nav-id").addClass("toggled-nav-item");
      break;

    case windowScrollTop >= portfolioMinThreshold &&
      windowScrollTop < contactMinThreshold:
      $(".toggled-nav-item").removeClass("toggled-nav-item");
      $("#portfolio-nav-id").addClass("toggled-nav-item");
      break;

    case windowScrollTop >= contactMinThreshold:
      $(".toggled-nav-item").removeClass("toggled-nav-item");
      $("#contact-nav-id").addClass("toggled-nav-item");
      break;
  }
});

// *Smooth scrolling* - removed because it damages the scroll & nav-item click.
// Meaning that due to the smooth scroll the page scrolls differently every nav-item click
// hence the threshold for changinf the highlight is different with each click

// $('a[href*="#"]').on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: $($(this).attr("href")).offset().top,
//     },
//     500,
//     "linear"
//   );
// });
