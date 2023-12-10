const slides = document.querySelectorAll(".slide");
const maxSlideLength = slides.length - 1;

let currSlide = 0;

const iconLeft = document.querySelector('[data-target="left"]');
const iconRight = document.querySelector('[data-target="right"]');

function moveSlide(slideNumber) {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${105 * (index - slideNumber)}%)`)
  );
}

moveSlide(1);
iconLeft.addEventListener("click", () => {
  if (currSlide == 0) {
    currSlide = maxSlideLength - 1;
  } else {
    currSlide--;
  }
  moveSlide(currSlide);
  console.log(currSlide);
});

iconRight.addEventListener("click", () => {
  if (currSlide == maxSlideLength - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  moveSlide(currSlide);
});
