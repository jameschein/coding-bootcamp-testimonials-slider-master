document.addEventListener("DOMContentLoaded", () => {
  // RESIZE - RESET CAROUSEL
  window.addEventListener("resize", () => {
    carouselSlider.style.transition = "none";
    size = carouselCards[0].clientWidth;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  // MECHANISM
  const carouselSlider = document.querySelector(".slider");
  const carouselCards = document.querySelectorAll(".profile-card");

  //BUTTONS
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  //COUNTER
  let counter = 1;

  // GET WIDTH OF THE DEFAULT CARD
  let size = carouselCards[0].clientWidth;

  // START ON SECOND SLIDE
  carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

  //BUTTON LISTENERS
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselCards.length - 1) return;
    carouselSlider.style.transition = "transform 500ms ease-in-out";
    counter++;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselSlider.style.transition = "transform 500ms ease-in-out";
    counter--;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  carouselSlider.addEventListener("transitionend", () => {
    //SLIDES RIGHT
    if (carouselCards[counter].id === "lastClone") {
      carouselSlider.style.transition = "none";
      counter = carouselCards.length - 2;
      carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
    }

    //SLIDES LEFT
    if (carouselCards[counter].id === "firstClone") {
      carouselSlider.style.transition = "none";
      counter = carouselCards.length - counter;
      carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
    }
  });
});
