"use strict";
const images = document.querySelectorAll("img");
const offset = 10;

images.forEach((image) => {
  image.addEventListener("click", () => showAlert(image));
});

function showAlert(image) {
  let imageName = image.dataset.name;
  alert(imageName);

  let imageHeight = image.clientHeight;

  setTimeout(function () {
    image.style.transform = "translateY(" + (imageHeight + offset) + "px)";
  }, 1000);
}
