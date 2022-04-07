/* Animation text on Works */

gsap
  .timeline({
    defaults: { ease: "power1.out" },
    scrollTrigger: {
      trigger: ".work-ethics .motivate",

      toggleActions: "restart pause reverse restart",
    },
  })

  .to("#stop-two #stop-one", { y: "400", duration: 0.7, stagger: 0.3 })
  .to(".do-it", { opacity: 0, duration: 1.5, delay: 0.6 })
  .from(
    ".finish-line",
    { y: 200, opacity: 0, duration: 1.7, delay: 1.3 },
    "-=1"
  );
