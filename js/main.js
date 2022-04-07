/* DOM variables */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

/* initial state */
let menuShow = false;

menuBtn.addEventListener("click", revealMenu);

function revealMenu() {
  if (!menuShow) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    /* set state */
    menuShow = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    /* reset state */
    menuShow = false;
  }
}

/* scroll animation fade*/
let aboutHead = document.getElementById("about-heading");
let workHead = document.getElementById("work-heading");
let contactHead = document.getElementById("contact-heading");

/* console.log(aboutHead.getBoundingClientRect()); */

function inView(element) {
  let elementBox = element.getBoundingClientRect();
  let distanceFromTop = -200;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}

function showScroll() {
  let divList = document.querySelectorAll(".hidden");
  divList.forEach(function (div) {
    if (inView(div)) {
      div.classList.remove("hidden");
    }
  });
}

document.addEventListener("scroll", _.throttle(showScroll, 200));

let contactBody = document.getElementById("contact-body");
function fadeinDetails() {
  const personalDetails = document.querySelectorAll(".boxes");
  for (let i = 0; i < personalDetails.length; i++) {
    setTimeout(function () {
      personalDetails[i].classList.add("personal-infobox");
    }, 1000);
  }
}

contactBody = window.onload = function () {
  fadeinDetails();
};
