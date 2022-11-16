document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // CREATE A VAR THAT ACTS AS A BOOLEAN SWITCH FOR LATER
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      // CONNECT WITH A SLIDES ARRAY
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      // '...' CREATES A PROPER ARRAY :) GOOD TO KNOW
      // THEN GET THE INDEXOF THE CURRENT ACTIVE SLIDE
      // UP IT BY ONE FOR THE NEXT SLIDE
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;

      // MAKE SURE THE INDEX IS NOT OUTSIDE ARRAY LENGTH
      // PREV - COUNTING DOWN
      if (newIndex < 0) newIndex = slides.children.length - 1;
      // NEXT - COUNTING UP
      if (newIndex >= slides.children.length) newIndex = 0;

      // ADDING 'data-active' TOP THE NEW SLIDE
      // ALSO SETS IN MOTION THE CSS SELECTOR ANIMATION [TRANSITION]
      slides.children[newIndex].dataset.active = true;
      // REMOVE 'data-active' FROM ANY PREVIOULSY ACTIVE SLIDES READY FOR HE NEXT CLICK
      delete activeSlide.dataset.active;

      otherAnimation();
    });

    const otherAnimation = () => {};
  });
});
