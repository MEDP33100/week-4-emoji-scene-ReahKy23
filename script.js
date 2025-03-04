document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!


    gsap.fromTo(".left-emojis", 
        { x: 0 }, // Start from 500px to the right
        { x: 800, duration: 5, ease: "power1.inOut" } // Move left
    );

    gsap.fromTo(".boy", 
        { x: 100 }, // Start from 500px to the right
        { x: -400, duration: 5, ease: "power1.inOut" } // Move left
    );

    gsap.from('.ball', {
        y: -60,
        duration: 0.6,
        repeat: -1,

    })
   });