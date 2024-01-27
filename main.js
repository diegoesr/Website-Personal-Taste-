// now lets add some animations to it

function section1() {
  let tl = gsap.timeline();

  tl.from(".header,.header .log,.header .navlinks h4,.header .lan", {
    opacity: 0,
    y: -50,
    stagger: 0.,
  });

  tl.from(
    ".text-content .left h1,.text-content .left p,.text-content .left button",
    {
      opacity: 0,
      x: -50,
      stagger: 0.1,
    }
  );

  tl.from(".text-content .right img", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
  });
}

section1();

// ========================================SECTION2 ANIMATION-=======================

function section2() {
  gsap.to(".section2 .two .center", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".section2 .two h1",
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });

  gsap.from(".section2 .two .one", {
    x: -1200,
    scrollTrigger: {
      trigger: ".section2 .two h1",
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });

  gsap.from(".section2 .two .three", {
    x: 1200,
    scrollTrigger: {
      trigger: ".section2 .two h1",
      scroller: "body",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });
}

section2();

// =======================================SECTION3 ANIMATIONS==========================

function section3() {
  gsap.from(".section3 .three .left .card", {
    opacity: 0,
    x: -500,
    scrollTrigger: {
      trigger: ".card",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

section3();



function section5() {
  gsap.to(".section5 .five .tophead h1", {
    color: "white",
    webkitTextStroke: "2px black",
    duration: 2,
    scale: 1.1,
    scrollTrigger: {
      trigger: ".section5 .five .tophead h1",
      scroller: "body",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}
section5();
