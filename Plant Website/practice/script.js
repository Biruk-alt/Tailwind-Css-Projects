"use strict";
const lists = document.querySelectorAll(`li`);

const listObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add(`show`)
        } else {
            entry.target.classList.remove(`show`)
        }
    })
}, {threshold: 1})

lists.forEach(list => listObserver.observe(list))
