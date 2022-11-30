let menu = document.querySelector(".menu");
let burger = document.querySelector(".menu-burger");

burger.onclick = function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    burger.classList.add("active");
  } else {
    burger.classList.remove("active");
  }
};
