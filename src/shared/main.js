var slideIndex = 1;

window.onload = function () {
  loadSlides(slideIndex);
};

function changeSlidePage(n) {
  loadSlides((slideIndex += n));
}

function loadSlides(slidePage) {
  var slidesElement = document.getElementsByClassName("slide-img");
  if (slidePage > slidesElement.length) {
    slideIndex = 1;
  }
  if (slidePage < 1) {
    slideIndex = slidesElement.length;
  }

  for (let index = 0; index < slidesElement.length; index++) {
    slidesElement[index].classList.remove("active");
  }
  slidesElement[slideIndex - 1].classList.add("active");
}
