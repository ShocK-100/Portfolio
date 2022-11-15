document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let header = document.getElementsByTagName("header")[0];

  menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("toggle");
  });
});
