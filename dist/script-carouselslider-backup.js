const api_url = "data.json";
const profiles = [];
const imageArray = [];

document.addEventListener("DOMContentLoaded", function () {
  const profileName = document.querySelectorAll(".profile-name");
  const profileJob = document.querySelectorAll(".profile-job");
  const profileQuote = document.querySelectorAll(".profile-quote");
  const profilePic = document.querySelectorAll(".profile-image");

  /* DATA GETTING APP */
  async function callAPI(profiles) {
    const response = await fetch(api_url);
    const data = await response.json();
    profiles = data.profiles;

    let i = 0;

    for (i = 0; i < profileName.length; i += 1) {
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
  const placeButtons = function () {
    const btnBlk = document.querySelector(".button-block");
    btnBlk.style.top = profilePic[0].clientWidth * 1.025 + "px";
  };

  placeButtons();

  // MECHANISM - GET THE PARTS
  const carouselSlider = document.querySelector(".slider");
  const carouselCards = document.querySelectorAll(".profile-card");
  //BUTTONS
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  //c
  let c = 1;
  // GET WIDTH OF THE DEFAULT CARD
  let sz = window.innerWidth;

  // RESIZE - RESET CAROUSEL
  window.addEventListener("resize", function () {
    carouselSlider.style.transition = "none";
    sz = carouselCards[0].clientWidth;
    carouselSlider.style.transform = "translateX(" + -sz * c + "px)";

    placeButtons();
  });

  // document.querySelector(".posCheck").value = size;

  // START ON SECOND SLIDE
  carouselSlider.style.transform = "translateX(" + -sz * c + "px)";

  const buttonControl = function (cChange) {
    carouselSlider.style.transition = "transform 200ms ease-in";
    if (cChange === "plus") {
      c += 1;
    } else if (cChange === "minus") {
      c -= 1;
    }
    carouselSlider.style.transform = "translateX(" + -sz * c + "px)";
    return c;
  };

  const sliderShift = function (cardCalc) {
    carouselSlider.style.transition = "none";
    c = cardCalc;
    carouselSlider.style.transform = "translateX(" + -sz * c + "px)";
  };

  //BUTTON LISTENERS
  nextBtn.addEventListener("click", function () {
    if (c >= carouselCards.length - 1) {
      return;
    }
    buttonControl("plus");
  });

  prevBtn.addEventListener("click", function () {
    if (c <= 0) {
      return;
    }
    buttonControl("minus");
  });

  document.addEventListener("keyup", function (e) {
    const name = e.key;
    // const code = e.code;
    //console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

    if (name === "ArrowRight") {
      if (c >= carouselCards.length - 1) {
        return;
      }
      buttonControl("plus");
    } else if (name === "ArrowLeft") {
      if (c <= 0) {
        return;
      }
      buttonControl("minus");
    }
  });

  carouselSlider.addEventListener("transitionend", function () {
    if (carouselCards[c].id === "lastClone") {
      //SLIDES RIGHT
      sliderShift(carouselCards.length - 2);
    } else if (carouselCards[c].id === "firstClone") {
      //SLIDES LEFT
      sliderShift(carouselCards.length - c);
    }
  });
});
