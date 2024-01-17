"use strict";

let vpt = document.querySelector('.vpt'),
    builtAppliances = document.querySelector('.built_appliances'),
    tv = document.querySelector('.tv'),
    menubarVpt = document.querySelector('.menubar_vpt'),
    menubarBuilt = document.querySelector('.menubar_built'),
    menubarTv = document.querySelector('.menubar_tv'),
    closedModal = document.querySelector('.closed_modal'),
    closedModal1 = document.querySelector('.closed__modal'),
    closedModal2 = document.querySelector('.closed___modal'),
    sliderContainer = document.querySelector('.slider_container'),
    slider = document.querySelector('.slider'),
    sliderItems = document.querySelectorAll('.slider_items'),
    sliderBtn = document.querySelectorAll('.slider_btn');

let div_btn = document.querySelectorAll('.div_btn'),
    open_container = document.querySelectorAll('.open_container');

for (let i = 0; i < div_btn.length; i++) {
    div_btn[i].addEventListener("click", function() {
        this.classList.toggle('open_container_active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    });
}

let sliderCount = 0,
    sliderWidth = sliderContainer.offsetWidth;

function rollSlider() {
    slider.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

setInterval(() => {
    function nextSlide() {
        sliderCount++;

        if (sliderCount >= sliderItems.length) {
            sliderCount = 0;
        }

        rollSlider();
    };
    nextSlide();
}, 3000);
