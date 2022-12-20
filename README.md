# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

For this challenge I wanted to focus on building something scalable that would work for as many candidates as one needs in the slide carousel while also increasing my experience of data handling and DOM Manipulation to build out a dynamic page when loading. The solution also takes in hammer.js (http://hammerjs.github.io/) for mobile gesture simulation in web apps.

Note - For this challenge I have only prepared two views in respect of media queries/breakpoints - mobile and desktop.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](screenshot.jpg)

### Links

- Solution URL: [Testimonials Slider Challenge - Github](https://github.com/jameschein/coding-bootcamp-testimonials-slider-master)
- Live Site URL: [Testimonials Slider Challenge - Live](https://testimonials-slider-challenge.netlify.app/)

## My process

A return to breaking the task into clearly smaller parts where I felt I could really improve certain skill-sets towards more intermediate competence.

- Buildling the UI structure is always a lovely place to start.
- Looking deeper into handling JSON data and the Fetch structure for getting data correctly - I have found this such a struggle in the past but things have improved since I directed focus to just that part through better multi-function structuring in my javascript.
- Slide carousel next [resource for the method I used is listed below].
- DOM Manipulation with Data injection - I feel I have retrieved a lot of knowledge here that I picked up many years ago but had forgotten. Now new profiles could be injected automatically into the slide deck.
- With the slide app in place and the profile-cards created and injected into the slide-container via a forEach loop I was able to focus on touch gesture for the mobile version moving beyond the basic button functionality and keyboard activation.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox/ CSS Grid
- Mobile-first workflow
- Hammer.js fro mobile gestures
- Fetch and DOM manipulation

### What I learned

Beyond what has already been mentioned, I took in some useful introductions in the process which have yet to be implemented - Typescript, a couple of CSS layout frameworks Bootstrap/ Materialze, and a brief dip into IntersectionObserver and Greensock for CSS animation. I hope to use this knowledge in future challenges.

<!-- ```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉")
}
``` -->

### Continued development

API handling and DOM Manipulation - This task really got me looking at youtube frontend interview question videos. These have shown me what I need to do to work faster on-the-fly when presented with a new problem.

More disciplined refactoring sessions for my code are another aspect on the list of desirable competences.

### Useful resources

For the slideshow -

- [How To Create An Image Slider In HTML, CSS & Javascript - Developed By Ed](https://www.youtube.com/watch?v=KcdBOoK3Pfw) - Four years old but a good expose of coding a solid infinite slide carousel.

For the API/Data handling and DOM Manipulation -

- [Google Frontend Interview With A Frontend Expert - Clément Mihailescu](https://www.youtube.com/watch?v=ai1zmNO5Z3E) - alternative methods for handling and deconstructing data arrays in a pressured setting - very enlightening on the distance I am removed from acheiving the same goal. In no way detered however.

## Author

- Website - [Schein](https://www.schein.co.uk)
- Frontend Mentor - [@jameschein](https://www.frontendmentor.io/profile/jameschein)
- Twitter - [@scheincouk](https://www.twitter.com/scheincouk)

## Acknowledgments

Along with those in the resources above, credit must goes to -

- WebDevSimplified - code refactoring tutorial
- Coding With Chaime - Closures and Hoisting explained for the record
- The Coding Train - fetch in full in fun
