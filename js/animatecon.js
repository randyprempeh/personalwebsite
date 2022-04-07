
/* contact page animation */
const ConIntroduction = document.querySelector("#con-introductionBg");
const ConIntroductionAddition = document.querySelector("#con-introductionBgAddition");

const ContactTL = gsap.timeline();

contactTL
 gsap.from([ConIntroductionAddition, ConIntroduction], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
   });
     