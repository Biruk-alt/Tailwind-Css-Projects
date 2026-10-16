"use strict";
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");
const links =document.querySelectorAll('.link')

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("left-[0]")
    menuBtn.classList.toggle("ri-close-large-line")
})

links.forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.toggle("left-[0]")
    })
})

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
        slidesPerView: 1
    },

    768: {
        slidesPerView: 2
    },

    1024: {
        slidesPerView: 3
    },
  },

  grabCursor: true
});