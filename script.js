let menu = document.querySelector(".menu");
let burger = document.querySelector(".menu-burger");
let menuItems = document.querySelectorAll(".menu__item");
let main = document.querySelector(".main");
let likes = document.querySelectorAll(".like");

//------ Меню Бургер

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

// ------ likes

for (let like of likes) {
  like.nextElementSibling.innerHTML = Math.floor(Math.random() * 5000);
  like.onclick = function () {
    like.classList.toggle("active");
    if (like.classList.contains("active")) {
      like.nextElementSibling.innerHTML++;
    } else {
      like.nextElementSibling.innerHTML--;
    }
  };
}

// ------ Sliders

new Swiper(".recommends__swiper", {
  navigation: {
    nextEl: ".recommends__swiper-button-next",
    prevEl: ".recommends__swiper-button-prev",
  },

  pagination: {
    el: ".recommends__slider-pagination",
    clickable: true,
  },

  autoHeight: true,

  spaceBetween: 300,

  speed: 1000,

  loop: true,
});

const reviewsSlider = new Swiper(".reviews__swiper", {
  navigation: {
    nextEl: ".reviews__swiper-button-next",
    prevEl: ".reviews__swiper-button-prev",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".review__slider-pagination",
    type: "progressbar",
  },

  autoHeight: true,

  spaceBetween: 300,

  speed: 1000,

  loop: true,
});

let currentSlide = document.querySelector(".swiper-num");

reviewsSlider.on("slideChange", function () {
  let currentSlidefunc = "0" + ++reviewsSlider.realIndex;
  currentSlide.innerHTML = currentSlidefunc;
});
