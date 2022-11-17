const api_url = "data.json";
const profiles = [];
const imageArray = [];

document.addEventListener("DOMContentLoaded", () => {
  const profileName = document.querySelectorAll(".profile-name");
  const profileJob = document.querySelectorAll(".profile-job");
  const profileQuote = document.querySelectorAll(".profile-quote");
  const profilePic = document.querySelectorAll(".profile-image");

  /* DATA GETTING APP */
  async function callAPI(profiles) {
    const response = await fetch(api_url);
    const data = await response.json();
    profiles = data.profiles;

    for (let i = 0; i < profileName.length; i++) {
      profileQuote[i].children[0].textContent = profiles[i].quote[0];
      profileQuote[i].children[1].textContent = profiles[i].quote[1];
      profileJob[i].textContent = profiles[i].job;
      profileName[i].textContent = profiles[i].candidate;
      profilePic[i].src = "assets/images/" + profiles[i].portrait;
    }
  }

  callAPI();

  /* END DATA GETTING APP */

  // JS THE BUTTON BLOC SO IT'S ALWAYS AT THE END OF THE IMAGE
  const placeButtons = () => {
    const btnBlk = document.querySelector(".button-block");
    btnBlk.style.top = profilePic[0].clientWidth * 1.025 + "px";
  };

  placeButtons();

  // RESIZE - RESET CAROUSEL
  window.addEventListener("resize", () => {
    carouselSlider.style.transition = "none";
    size = carouselCards[0].clientWidth;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";

    placeButtons();
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

  const buttonControl = (counterChange) => {
    carouselSlider.style.transition = "transform 500ms ease-in-out";
    counterChange;
    carouselSlider.style.transform = "translateX(" + -size * counter + "px)";
    return counter;
  };

  const sliderShift = (cardCalc) => {
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
    "keyup",
    (e) => {
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
