import * as flsFunctions from "./modules/functions.js";

flsFunctions.testWebP();

document.querySelectorAll('.select__content').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.select__btn');
    const dropDownTitle = dropDownWrapper.querySelector('.select__btn_p');
    const dropDownAfter = dropDownWrapper.querySelector('.select__btn_after');
    const dropDownList = dropDownWrapper.querySelector('.select__list');
    const dropDownListItems = dropDownList.querySelectorAll('.select__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.select__input-hidden');

    dropDownBtn.addEventListener('click', function (e) {
        dropDownList.classList.toggle('select__list--visible');
        dropDownAfter.classList.toggle('select__btn_after--active')
        this.classList.add('select__button--active');
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownTitle.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('select__btn--active');
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('select__btn--active');
            dropDownAfter.classList.remove('select__btn_after--active');
            dropDownList.classList.remove('select__list--visible');
        }
    });
});


let menuBtn = document.querySelector('.burger-menu__button');
let menu = document.querySelector('.burger-menu__content');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});

if (document.querySelector('.video-cover')) {
    var video = document.querySelectorAll('.video-cover');

    video.forEach(b => b.addEventListener('click', function () {
        if (!b.classList.contains('active')) {
            b.classList.toggle('active');
            b.insertAdjacentHTML("afterbegin", '<iframe src="https://www.youtube.com/embed/hT4O8VI__XE?si=oyVRl9Byye2mLfrt?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            );
            console.log('sdfg');
        }
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
    const swiper = new Swiper(".block-two__swiper", {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: true,
    });

    swiper.on('slideChange', function () {
        document.getElementsByTagName('iframe')[0].remove();
        const video = document.querySelector('.about-the-manufacturer__block-two .video-cover');
        if(video.classList.contains('active')){
            video.classList.remove('active');
        }
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