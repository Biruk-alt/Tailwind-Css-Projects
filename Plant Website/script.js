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