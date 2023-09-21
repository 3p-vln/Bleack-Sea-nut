import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

let videoBtn = document.querySelector('.play-block');
videoBtn.addEventListener('click', function () {
    videoBtn.classList.toggle('active');
})

let videoBtnSwiper = document.querySelector('.block-2__background');
videoBtnSwiper.addEventListener('click', function () {
    videoBtnSwiper.classList.toggle('active');
})

let videoBtn_2 = document.querySelector('.play-block-2');
videoBtn_2.addEventListener('click', function () {
    videoBtn_2.classList.toggle('active');
})

let videoBtn_new = document.querySelector('.card__video');
videoBtn_new.addEventListener('click', function () {
    videoBtn_new.classList.toggle('active');
})

var swiper = new Swiper(".product-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

var swiper = new Swiper(".block-2__swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

var swiper = new Swiper(".news__swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    breakpoints: {
        1920:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }
});
