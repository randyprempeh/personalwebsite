/* Homepage animation */
const header = document.querySelector("#header");
const introduction = document.querySelector("#introductionBg");
const introductionAddition = document.querySelector("#introductionBgAddition");
const H1line = document.querySelectorAll(".line span");
const cParagraph = document.querySelector(".content-inner p");
const aboutButton = document.querySelector(".content-inner .btn-row");
const smSection = document.querySelector(".social-media");
const smIcons = document.querySelectorAll(".social-media .icons");
const profileImg = document.querySelectorAll("#arrow-img");

const introductionTL = gsap.timeline();

introductionTL
  .from([introductionAddition, introduction], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(header, {
    delay: -0.2,
    y: 15,
    opacity: 0,
    duration: 0.6,
    ease: "power3.inOut",
  })
  .from(H1line, {
    delay: -0.4,
    y: 170,
    duration: 0.9,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from([cParagraph, aboutButton], {
    delay: -0.6,
    y: -40,
    duration: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .to([smSection, smIcons], {
    delay: -0.8,
    x: 40,
    /*  y: 40, */
    skewX: 1,
    opacity: 1,
    duration: 1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  });

gsap.from(profileImg, {
  delay: 2.7,
  y: 80,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
});

//Myworks Page Animation
// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".open-edd",
  },
});

let ptl = gsap.timeline({
  defaults: { ease: "SlowMo.easeOut" },
  scrollTrigger: {
    trigger: ".intro-self .drive-in",
    toggleActions: "restart pause reverse restart",
  },
});

ptl.to("#intro-lead", { y: "0%", duration: 0.7, stagger: 0.3 });
ptl.to(".interest", { opacity: 0, duration: 1.5, delay: 0.6 });
//ptl.from(".mini-pass", { x: 300, opacity: 0, duration: 0.3 });

//ptl.fromTo(".entry", { opacity: 0 }, { opacity: 1, delay: 0.6 });

ptl
  .from(".passion-text", { y: 300, opacity: 0, duration: 1.9 }, "-=1")
  .from(".mini-pass", { x: -300, opacity: 0, duration: 1 }, "-=1");

tl.from(".rv-txt", { x: -300, opacity: 0, duration: 1 }, "-=1").from(
  ".edd-info",
  { y: 100, opacity: 0, duration: 1.3 },
  "-=1"
);

gsap.from(".social-media", {
  duration: 1.5,
  y: 20,
  /* rotateX: 5,
  rotateY: 20, */
  //ease: "power4.out",
  repeat: -1,
  yoyo: true,
  ease: "linear",
  scrollTrigger: {
    trigger: ".image-inner",
    start: "top bottom",
    toggleActions: "play pause play pause",
  },
});
gsap.to("#arrow-img", {
  duration: 1.1,
  y: 6,
  /* rotateX: 5,
  rotateY: 20, */
  ease: "power2.out",
  repeat: -1,
  yoyo: true,
  //ease: "linear",
  scrollTrigger: {
    trigger: ".introduction",
    start: "top bottom",
    toggleActions: "play pause play pause",
  },
});

// animation for the ripple effect

const images = [
  // "./img/ed.JPG",
  "./img/edd-dvv.png",
  // "./img/IMG_9405.JPG",
  //"./img/fred.png",
  //"./img/fred2.png",
  "./img/fred-dvv.png",
  "./img/floppiess-dvv.png",
  "./img/pop-dvv.png",
];
const texts = [
  ["Edwina Hartmann"],
  ["freddies plumbers"],
  ["floppiess"],
  ["Christian Pop"],
];
//const fredImages = ["./img/fred.png", "./img/fred2.png", "./img/fred-dev.png"];

rgbKineticSlider = new rgbKineticSlider({
  slideImages: images,
  itemsTitles: texts,

  backgroundDisplacementSprite:
    "http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg",
  cursorDisplacementSprite:
    "http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png",

  cursorImgEffect: true, // enable cursor effect
  cursorTextEffect: false,
  cursorScaleIntensity: 0.6,
  cursorMomentum: 0.14,

  swipe: true,
  swipeDistance: window.innerWidth * 0.4,
  swipeScaleIntensity: 2,

  slideTransitionDuration: 0.8,
  transitionScaleIntensity: 30,
  transitionScaleAmplitude: 160,

  nav: true,
  navElement: ".load-nav",

  imagesRgbEffect: false,
  imagesRgbIntensity: 4,
  navImagesRgbIntensity: 120,

  textsDisplay: true,
  textTitleSize: 12,
  textsTiltEffect: true,
  googleFonts: ["Playfair Display:900"],
  textsRgbEffect: true,
  textsRgbIntensity: 1,
});
