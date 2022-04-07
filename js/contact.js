/* Gsap Animation */

const conHeader = document.querySelector("#contact-header");
const bigText = document.querySelector("h1");
const addText = document.querySelector("#contact-text");
const bigText1 = document.querySelector("#contact-heading");
const bigText2 = document.querySelectorAll(".sm-heading");

const contactTL = gsap.timeline();

contactTL
  .from(conHeader, {
    delay: -0.8,
    x: 55,
    opacity: 0,
    duration: 1.8,
    ease: "power3.inOut",
  })
  .from([bigText, addText], {
    delay: -0.4,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(bigText2, {
    delay: -0.6,
    y: 85,
    opacity: 0,
    duration: 1.7,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(bigText1, {
    delay: 1.9,
    y: 85,
    opacity: 0,
    duration: 1.7,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  });

const form = document.getElementById("contact-form");
const result = document.getElementById("sentmsg");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML =
    "<em>Thanks</em> for your message! I will definitely respond as fast as I can!";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        /*       result.classList.remove("thankyou_message");
        result.classList.add("thankyou_message"); */
      } else {
        console.log(response);
        result.innerHTML = json.message;
        /*     result.classList.remove("thankyou_message");
        result.classList.add("thankyou_message"); */
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
