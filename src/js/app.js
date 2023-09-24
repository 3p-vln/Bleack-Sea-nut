import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

// let videoBtn = document.querySelector('.play-block');
// videoBtn.addEventListener('click', function () {
//     videoBtn.classList.toggle('active');
// })

// let videoBtnSwiper = document.querySelector('.block-2__background');
// videoBtnSwiper.addEventListener('click', function () {
//     videoBtnSwiper.classList.toggle('active');
// })

// let videoBtn_2 = document.querySelector('.play-block-2');
// videoBtn_2.addEventListener('click', function () {
//     videoBtn_2.classList.toggle('active');
// })

// let videoBtn_new = document.querySelector('.card__video');
// videoBtn_new.addEventListener('click', function () {
//     videoBtn_new.classList.toggle('active');
// })

jQuery(document).ready(function ($) {
    (function initPlayVideo() {
        $(".video-cover").on("click", function () {
            $(this).fadeOut().siblings('.video').html(
                '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt' + $(".f-video-cover").data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
        });
    })();
});

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
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    breakpoints: {
        450:{
            slidesPerView: 1,
            spaceBetween: 0, 
        },
        651:{
            slidesPerView: 1.4,
            spaceBetween: 50,
        },
        1024:{
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1030:{
            slidesPerView: 2.2,
            spaceBetween: 70,
        },
        1040:{
            slidesPerView: 2.2,
            spaceBetween: 80,
        },
        1100: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },
        1400:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
