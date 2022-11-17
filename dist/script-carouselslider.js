document.addEventListener("DOMContentLoaded", () => {
  // RESIZE - RESET CAROUSEL
  window.addEventListener("resize", () => {
    carouselSlider.style.transition = "none";
    size = carouselCards[0].clientWidth;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  });

  // MECHANISM - GET THE PARTS
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

  const buttonControl = counterChange => {
    carouselSlider.style.transition = "transform 500ms ease-in-out";
    counterChange;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
    return counter;
  };

  // const prevControl = () => {
  //   if (counter <= 0) return;
  //   carouselSlider.style.transition = "transform 500ms ease-in-out";
  //   counter--;
  //   carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  // };

  const sliderShift = cardCalc => {
    carouselSlider.style.transition = "none";
    counter = cardCalc;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
  };

  //BUTTON LISTENERS
  nextBtn.addEventListener("click", () => {
    if (counter >= carouselCards.length - 1) return;
    buttonControl(counter++);
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    buttonControl(counter--);
  });

  document.addEventListener(
    "keydown",
    e => {
      const name = e.key;
      // const code = e.code;
      //console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

      if (name === "ArrowRight") {
        if (counter >= carouselCards.length - 1) return;
        buttonControl(counter++);
      } else if (name === "ArrowLeft") {
        if (counter <= 0) return;
        buttonControl(counter--);
      }
    },
    false
  );

  carouselSlider.addEventListener("transitionend", () => {
    if (carouselCards[counter].id === "lastClone") {
      //SLIDES RIGHT
      sliderShift(carouselCards.length - 2);
    } else if (carouselCards[counter].id === "firstClone") {
      //SLIDES LEFT
      sliderShift(carouselCards.length - counter);
    }
  });
});

const api_url = "data.json";

async function callAPI() {
  // call API, save response as id, advice
  // create function to parse advice to HTML
  const response = await fetch(api_url);
  const data = await response.json();
  const profiles = data.profiles;
  const {name, job} = profiles;

  console.log(profiles);

  // const nameSpace = document.querySelector(".name");
  // nameSpace.textContent = name;
}

callAPI();
