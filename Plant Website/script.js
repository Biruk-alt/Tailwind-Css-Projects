"use strict";

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");
const links = document.querySelectorAll('.link');
const backToHomeBtn = document.querySelector(`#back-to-home`);
const heroSection = document.querySelector(`#home`);
const heroContent = document.querySelector(`.hero-content`);
const heroImage  = document.querySelector(`.hero-image`);
const navBar = document.querySelector(`.nav-bar`);
const cards = document.querySelectorAll(`.card`);

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("-left-full");
    navMenu.classList.toggle("left-[0]")
    menuBtn.classList.toggle("ri-close-large-line")
})

links.forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.add("-left-full");
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


//BACK TO HOME BUTTON
const heroObserver = new IntersectionObserver( function(entries) {
  const entry = entries[0];

  if(entry.isIntersecting) {
    backToHomeBtn.classList.add(`hidden`)
  } else {
    backToHomeBtn.classList.remove(`hidden`)
  }
})

heroObserver.observe(heroSection);


// SCROLL ANIMATION

// hero content
const heroSectionObserver = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting) {
    heroContent.style.opacity = "1";
    heroContent.style.translate = "0";
  }
}, {})

heroSectionObserver.observe(heroContent)

// hero image
const heroSectionImageObserver = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting) {
   heroImage.classList.remove("scale-75", "opacity-0")
  }
}, {})

heroSectionImageObserver.observe(heroImage)

// nav bar
const navBarObserver = new IntersectionObserver(function(entries) {
  if(entries[0].isIntersecting) {
   navBar.style.opacity = "1";
    navBar.style.translate = "0";
  }
}, {})

navBarObserver.observe(navBar)

// cards
const reviewSectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const card = entry.target;

      card.style.transitionDuration = "1300ms";
      card.classList.remove("-translate-y-6", "opacity-0");

      setTimeout(function() {
        card.style.transitionDuration = "";
        card.style.transitionDelay = "";
      }, 1300)
    
    }
  })
}, {threshold: 0.4})

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 150}ms`;
  reviewSectionObserver.observe(card);
})