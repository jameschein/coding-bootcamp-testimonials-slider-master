document.addEventListener('DOMContentLoaded', ()=> {

    const buttons = document.querySelectorAll('[data-carousel-button]')

    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            // CREATE A VAR THAT ACTS AS A BOOLEAN SWITCH FOR LATER
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1
            // CONNECT WITH A SLIDES ARRAY
            const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

            const activeSlide = slides.querySelector('[data-active]')
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active



        })
    });








})
            
   



    
