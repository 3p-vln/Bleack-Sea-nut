const radioBtn = document.querySelectorAll(".registration__radio-btn");
const radioItems = document.querySelectorAll(".radio__item");
radioBtn.forEach(item => {
    item.addEventListener("click", function (){
        const currentRadioBtn = item;
        const radioId = currentRadioBtn.getAttribute("data-radio");
        const currentRadio = document.querySelector(radioId);

        if (!currentRadioBtn.classList.contains('active')) {
            radioBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            radioItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentRadioBtn.classList.add('active');
            currentRadio.classList.add('active');
        }
    }
)});