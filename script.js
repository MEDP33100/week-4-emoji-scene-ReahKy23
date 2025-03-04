document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!


    // gsap.fromTo(".left-emojis", 
    //     { x: 0 }, // Start from 500px to the right
    //     { x: 800, duration: 5, ease: "power1.inOut" } // Move left
    // );

    // gsap.fromTo(".boy", 
    //     { x: 100 }, // Start from 500px to the right
    //     { x: -400, duration: 5, ease: "power1.inOut" } // Move left
    // );

    gsap.from('.ball', {
        y: -60,
        duration: 0.6,
        repeat: -1,

    })

    var tl1 = gsap.timeline({ repeat: 2, repeatDelay: 2 });
    tl1.to(".left-emojis", { x: 800, duration: 5 });
    tl1.to(".left-emojis", { x: 600, duration: 5 });
    tl1.to(".left-emojis", { x: 725, duration: 3 });
    tl1.to(".left-emojis", { x: 3000, duration: 5 });
    tl1.addPause(">")
    // tl.to(".left-emojis", {y: 50, duration: 1});
    // tl.to(".left-emojis", {opacity: 0, duration: 1});


    var tl2 = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    tl2.to(".boy", { x: -500, duration: 5 });
    tl2.to(".boy", { x: -700, duration: 2, delay: 1});
    tl2.to(".boy", { x: -550, duration: 1, delay: 3});
    tl2.to(".boy", {  scaleX: -1, delay: 2});
    tl2.to(".boy", { x: 300, duration: 2 });

    tl2.addPause(">");



});

