document.addEventListener("DOMContentLoaded", function () {
  // HELPER FUNCTIONS
  // Helper for setting multiple attributes
  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key])
    }
  }
  // Helper for creating sets of elements
  const addElements = function (array, content, elToCreate, parent) {
    array.forEach(function callback(value, index) {
      elToCreate.classList.add(`${value}`)
      elToCreate.innerText = content[index]
      parent.append(elToCreate.cloneNode(`${value}`))
      elToCreate.classList.remove(`${value}`)
    })
  }

  // DATA SOURCE
  const api_url = "data.json"
  let carouselSlider = {}

  // -------------------------------------------------------
  // -------------------------------------------------------
  // INIT
  fetchAndAppendProfiles()

  async function fetchAndAppendProfiles() {
    // GET THE DATA
    const allProfiles = await fetchProfiles()
    // BUILD THE CARD [NECCESSARY WHEN WORKING WITH DATA]
    makeAndAppendProfileCards(allProfiles)
    // MAKE FAKE NODES CARDS
    addFakeNodes()
    // CREATE SLIDER MECHANISM
    createSliderMechanism()
  }

  // GET THE DATA
  async function fetchProfiles() {
    const response = await fetch(api_url)
    // REMEMBER - THE JSON RESPONSE IS AN ARRAY OF OBJECTS
    // THE NAME OF THE ARRAY IS THE TOP VARIABLE FOR THE  DATA
    const profiles = response.json()
    // NO ERROR CATCHING HERE YET

    // RETURN THE DATA
    return profiles
  }

  // BUILD THE CARD [NECCESSARY WHEN WORKING WITH DATA]
  const makeAndAppendProfileCards = function (profiles) {
    const paras = ["profile-quote-first", "profile-quote-body"]
    let paraContent = ""
    let profileCard = ""
    let picSection = ""
    let picSectionFigure = ""
    let picSectionFigureImg = ""
    let quoteSection = ""
    let quoteSectionHgroup = ""
    let quoteSectionHgroupH2 = ""
    let quoteSectionHgroupH3 = ""
    let quoteSectionBlockquote = ""

    const makeParts = function () {
      profileCard = document.createElement("li")
      picSection = document.createElement("section")
      picSectionFigure = document.createElement("figure")
      picSectionFigureImg = document.createElement("img")
      quoteSection = document.createElement("section")
      quoteSectionHgroup = document.createElement("hgroup")
      quoteSectionHgroupH2 = document.createElement("h2")
      quoteSectionHgroupH3 = document.createElement("h3")
      quoteSectionBlockquote = document.createElement("blockquote")
    }

    // CARD CONSTRUCTION LOOP
    profiles.forEach(profile => {
      makeParts()

      profileCard.classList.add("profile-card")
      profileCard.setAttribute("id", profile.candidate)
      picSection.classList.add("pic")

      setAttributes(picSectionFigureImg, {
        src: `assets/images/${profile.portrait}`,
        alt: `${profile.candidate}`,
        width: 300,
        height: 300,
        "aria-placeholder": "Awaiting Image",
      })

      picSectionFigureImg.classList.add("profile-image")

      quoteSection.classList.add("quote")

      quoteSectionBlockquote.classList.add("profile-quote")
      paraContent = [`${profile.quote[0]}`, `${profile.quote[1]}`]

      picSectionFigure.append(picSectionFigureImg)
      picSection.append(picSectionFigure)

      quoteSection.append(quoteSectionHgroup)
      quoteSectionHgroup.append(quoteSectionHgroupH2)
      quoteSectionHgroupH2.classList.add("profile-name")
      quoteSectionHgroupH2.innerText = `${profile.candidate}`
      quoteSectionHgroup.append(quoteSectionHgroupH3)
      quoteSectionHgroupH3.classList.add("profile-job")
      quoteSectionHgroupH3.innerText = `${profile.job}`

      quoteSection.append(quoteSectionBlockquote)

      profileCard.append(picSection)
      profileCard.append(quoteSection)

      // RUN A FOREACH LOOP THAT APPENDS TO THE BLOCKQUOTE
      // [IMPORTED HELPER FROM HAMBURGER MENU CODE TO DO THIS :)]
      addElements(
        paras,
        paraContent,
        document.createElement("p"),
        quoteSectionBlockquote
      )

      carouselSlider = document.querySelector(".slider")
      carouselSlider.append(profileCard)
      // END CARD CONSTRUCTION LOOP
    })
  }

  // MAKE FAKE NODES CARDS
  const addFakeNodes = function () {
    // COPY THE FIRST CARD NODE
    let allNodes = document.querySelectorAll(".profile-card")
    let frontNode = allNodes[0].cloneNode(true)
    frontNode.setAttribute("id", "firstClone")
    let nodeLength = allNodes.length
    // APPEND TO END OF SLIDER CAROUSEL
    carouselSlider.append(frontNode)
    // COPY THE LAST CARD NODE
    const lastNode = allNodes[nodeLength - 1].cloneNode(true)
    lastNode.setAttribute("id", "lastClone")
    // PREPEND TO FRONT OF SLIDER CAROUSEL
    carouselSlider.prepend(lastNode)
  }

  // CREATE SLIDER MECHANISM
  const createSliderMechanism = function () {
    const profilePics = document.querySelector(".profile-image")

    // JS THE BUTTON BLOC SO IT'S ALWAYS AT THE END OF THE IMAGE
    const placeButtons = function () {
      const btnBlk = document.querySelector(".button-block")
      btnBlk.style.top = profilePics.clientWidth * 1.025 + "px"
    }
    placeButtons()
    const carouselCards = document.querySelectorAll(".profile-card")

    // BUTTONS
    const prevBtn = document.querySelector(".prev")
    const nextBtn = document.querySelector(".next")
    // c
    let c = 1

    //   GET WIDTH OF THE DEFAULT CARD
    let sz = window.innerWidth

    //   RESIZE - RESET CAROUSEL
    window.addEventListener("resize", function () {
      carouselSlider.style.transition = "none"
      sz = carouselCards[0].clientWidth
      carouselSlider.style.transform = "translateX(" + -sz * c + "px)"

      placeButtons()
    })

    // NOT NEEDED FOR FINAL PRESENTATION
    // document.querySelector(".posCheck").value = size

    // START ON SECOND SLIDE
    carouselSlider.style.transform = "translateX(" + -sz * c + "px)"

    const buttonControl = function (cChange) {
      carouselSlider.style.transition = "transform 200ms ease-in"
      if (cChange === "plus") {
        c += 1
      } else if (cChange === "minus") {
        c -= 1
      }
      carouselSlider.style.transform = "translateX(" + -sz * c + "px)"
      return c
    }

    const sliderShift = function (cardCalc) {
      carouselSlider.style.transition = "none"
      c = cardCalc
      carouselSlider.style.transform = "translateX(" + -sz * c + "px)"
    }

    //BUTTON LISTENERS
    nextBtn.addEventListener("click", function () {
      if (c >= carouselCards.length - 1) {
        return
      }
      buttonControl("plus")
    })

    prevBtn.addEventListener("click", function () {
      if (c <= 0) {
        return
      }
      buttonControl("minus")
    })

    document.addEventListener("keyup", function (e) {
      const name = e.key
      // const code = e.code;
      //console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

      if (name === "ArrowRight") {
        if (c >= carouselCards.length - 1) {
          return
        }
        buttonControl("plus")
      } else if (name === "ArrowLeft") {
        if (c <= 0) {
          return
        }
        buttonControl("minus")
      }
    })

    carouselSlider.addEventListener("transitionend", function () {
      if (carouselCards[c].id === "lastClone") {
        //SLIDES RIGHT
        sliderShift(carouselCards.length - 2)
      } else if (carouselCards[c].id === "firstClone") {
        //SLIDES LEFT
        sliderShift(carouselCards.length - c)
      }
    })
  }

  const myElement = document.querySelector(".profile-card")
  // FINALLY MOBILE/TABLET SWIPING JS
  var hammertime = new Hammer(myElement, myOptions)
  hammertime.on("pan", function (ev) {
    console.log(ev)
  })
})
