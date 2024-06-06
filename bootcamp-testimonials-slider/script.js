"use strict";
const slider = document.querySelector(".slider");
const slideRight = document.querySelector("[data-right]");
const slideLeft = document.querySelector("[data-left]");
const allSlides = document.querySelectorAll(".slide");

const maxSlideLength = allSlides.length - 1;

let currSlide = 0;

const moveSlideTo = function (slideNumber) {
  allSlides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
  );
};

const nextSlide = () => {
  if (currSlide == maxSlideLength) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  moveSlideTo(currSlide);
};

const prevSlide = () => {
  if (currSlide == 0) {
    currSlide = maxSlideLength;
  } else {
    currSlide--;
  }
  moveSlideTo(currSlide);
};

moveSlideTo(0);
slideRight.addEventListener("click", nextSlide);
slideLeft.addEventListener("click", prevSlide);
