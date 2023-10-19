import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

if (document.querySelector('.video-cover')) {
    var video = document.querySelectorAll('.video-cover');

    video.forEach(b => b.addEventListener('click', function () {
        b.insertAdjacentHTML("afterbegin", '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
    }));

}

if (document.querySelector('.product-swiper')) {
    new Swiper(".product-swiper", {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: true,
    });
}

if (document.querySelector('.block-two__swiper')) {
    new Swiper(".block-two__swiper", {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: true,
    });
}

if (document.querySelector('.news__swiper')) {
    new Swiper(".news__swiper", {
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
}

if (document.querySelector('.short-about-nut__swiper')) {
    new Swiper(".short-about-nut__swiper", {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: true,
    });
}

let zoom = document.querySelector('.short-about-nut');
let zoomBtn = document.querySelector('.short-about-nut .zoom');
if (zoom && zoomBtn) {
    zoomBtn.addEventListener('click', function () {
        zoom.classList.toggle('active');
    });
}

let basket = document.querySelector(".second-line__basket");
let basketBtn = document.querySelector(".second-line__basket img");

basketBtn.addEventListener("click", function () {
    basket.classList.toggle('active');
});

const numMinus = document.querySelectorAll(".arr-left")
    , numPlus = document.querySelectorAll(".arr-right")
    , num = document.querySelectorAll(".num__bar");
let b = [];
function el() {
    num.forEach(((e, t) => {
        e.textContent = b[t]
    }
    ))
}
num.forEach(((e, t) => {
    b[t] = 0,
        e.textContent = b[t]
}
)),
    numMinus.forEach(((e, t) => {
        e.addEventListener("click", (() => {
            b[t]--,
                el()
        }
        ))
    }
    )),
    numPlus.forEach(((e, t) => {
        e.addEventListener("click", (() => {
            b[t]++,
                el()
        }
        ))
    }
    ));

// let add = document.querySelectorAll(".arr-right");
// let subract = document.querySelectorAll(".arr-left");
// let output = document.querySelectorAll(".num__bar");

// add.addEventListener("click", function () {
//   let result = Number(output.innerText) + 1;

//   if (result > 100) {
//     result = 0;
//   }

//   output.innerText = result;
// });

// subract.addEventListener("click", function () {
//   let output = document.querySelector(".num__bar");
//   let result = Number(output.innerText) - 1;

//   if (result < 0) {
//     result = 0;
//   }

//   output.innerText = result;
// });