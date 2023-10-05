import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

// let zoomBtn = document.querySelector('.short-about-nut .zoom');
// let zoom = document.querySelector('.short-about-nut');
// zoomBtn.addEventListener('click', function () {
//     zoom.classList.toggle('active');
// });

function initPlayVideo() {
    $(".video-cover").on("click", function () {
        $(this).fadeOut().siblings('.video').html(
            '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt' + $(".f-video-cover").data("video") + '?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    });
};

initPlayVideo();

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
        375: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


var swiper = new Swiper(".short-about-nut__swiper", {
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
});
