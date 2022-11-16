$(document).ready(() => {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  let navigationItem = $("header")
    .find(".navbar")
    .find("ul")
    .find("li")
    .find("a");

  navigationItem.click(function (e) {
    navigationItem.each(function () {
      console.log($(this));
      $(this).removeClass("toggle-nav-item");
    });
    let navID = e.target.id;
    navigationItem
      .parent()
      .find("#" + `${navID}`)
      .toggleClass("toggle-nav-item");
  });
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

  // if (windowScrollTop >= 0 && windowScrollTop < 691.2000122070312) {
  //   console.log("true");
  //   console.log($("header").find("nav").find("ul").find("nav-home"));
  //   $("header")
  //     .find("nav")
  //     .find("ul")
  //     .find("#nav-home")
  //     .toggleClass("toggle-nav-item");
  // }
});

// smooth scrolling

$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500,
    "linear"
  );
});
