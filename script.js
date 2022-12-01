let menu = document.querySelector(".menu");
let burger = document.querySelector(".menu-burger");
let menuItems = document.querySelectorAll(".menu__item");
let wrapper = document.querySelector(".wrapper");
let main = document.querySelector(".main");

burger.onclick = function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    burger.classList.add("active");
  } else {
    burger.classList.remove("active");
  }
};

for (let menuItem of menuItems) {
  menuItem.onclick = function () {
    menu.classList.remove("active");
    burger.classList.remove("active");
  };
}

main.onclick = function () {
  menu.classList.remove("active");
  burger.classList.remove("active");
};
