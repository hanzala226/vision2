const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const nav = document.querySelector("nav");
const head = document.querySelector(".s1");
const head2 = document.querySelector(".s2");
const head3 = document.querySelector(".s3");
const im = document.querySelector(".im");
const order = document.querySelector(".order");

window.addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,  // Adjusted duration for smoother movement
        ease: "power2.out"  // Added easing for smoother animation
    });
});

nav.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        opacity: 0
    });
});

nav.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        opacity: 1
    });
});

im.addEventListener("mouseenter", function() {
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        opacity: 0,
    });
});

im.addEventListener("mouseleave", function() {
    document.body.style.cursor = ''; // Reset to custom cursor
    gsap.to(cursor, {
        opacity: 1,
    });
});
head.addEventListener("mouseenter", function() {
    console.log('mouseenter on head');
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,
        ease: "power2.out"
    });
});

head.addEventListener("mouseleave", function() {
    console.log('mouseleave on head');
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });
});

head2.addEventListener("mouseenter", function() {
    console.log('mouseenter on head2');
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,
        ease: "power2.out"
    });
});

head2.addEventListener("mouseleave", function() {
    console.log('mouseleave on head2');
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });
});

head3.addEventListener("mouseenter", function() {
    console.log('mouseenter on head3');
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        duration: 1,
        ease: "power2.out"
    });
});

head3.addEventListener("mouseleave", function() {
    console.log('mouseleave on head3');
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        duration: 1,
        ease: "power2.out"
    });
});

Shery.textAnimate("#h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

Shery.textAnimate("#h2" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});
Shery.textAnimate("#h3" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});


order.addEventListener("mouseenter", function() {
    console.log('mouseenter on order');
    document.body.style.cursor = 'none';
    gsap.to(cursor, {
        scale: 7,
        backgroundImage: 'url(or.jpg)',
    });
});

order.addEventListener("mouseleave", function() {
    console.log('mouseleave on order');
    document.body.style.cursor = 'auto';
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        backgroundImage: '',
    });
});
