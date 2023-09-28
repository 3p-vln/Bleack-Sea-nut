import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

jQuery(document).ready(function ($) {
    (function initPlayVideo() {
        $(".video-cover").on("click", function () {
            $(this).fadeOut().siblings('.video').html(
                '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt' + $(".f-video-cover").data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
        });
    })();
});

// document.querySelector(document).ready(function (document.querySelector) {
//     (function initPlayVideo() {
//         document.querySelector(".video-cover").on("click", function () {
//             document.querySelector(this).fadeOut().siblings('.video').html(
//                 '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt' + document.querySelector(".f-video-cover").data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
//             );
//         });
//     })();
// });

var swiper = new Swiper(".product-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});

var swiper = new Swiper(".block-two__swiper", {
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
        450: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        651: {
            slidesPerView: 1.4,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1041: {
            slidesPerView: 2.2,
            spaceBetween: 80,
        },
        1100: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});
