import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

var swiper = new Swiper(".product-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});

var swiper = new Swiper(".block-2__swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});
