// Navbar
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

let mainPos = main.getBoundingClientRect().top;

function updateNavbar() {
  const scrollPos = window.scrollY;

  if (scrollPos >= mainPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  requestAnimationFrame(updateNavbar);
}

window.addEventListener("scroll", () => {
  mainPos = main.getBoundingClientRect().top;
});

updateNavbar();

// __________________________________________________

// Gallery
const images = [
  "imgs/1.webp",
  "imgs/3.webp",
  "imgs/4.webp",
  "imgs/2.webp",
  "imgs/5.webp",
];

const container = document.getElementById("container");

function renderImg() {
  for (let i = 0; i < images.length; i++) {
    container.innerHTML += `<div class="gall-img" style="background-image: url(${images[i]})">`;
  }
}

renderImg();

// ______________________________________________________

// Cookie Setup
const cookieModal = document.getElementById("modal");
const bodyElement = document.getElementById("container-main");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("login-form");
const innerText = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const choiceBtn = document.getElementById("modal-choice-btns");
const inputEmailCookie = document.getElementById("input-email-cookie");
const inputNameCookie = document.getElementById("input-name-cookie");

cookieModal.style.display = "inline";
modalCloseBtn.disabled = true;
inputEmailCookie.value = "";
inputNameCookie.value = "";

modalCloseBtn.addEventListener("click", () => {
  cookieModal.style.display = "none";
  bodyElement.classList.remove("blur");
});

declineBtn.addEventListener("mouseover", () => {
  choiceBtn.classList.toggle("reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formLoginData = new FormData(consentForm);
  const name = formLoginData.get("fullName");

  function validCookieEmail() {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (inputEmailCookie.value.trim() === "") {
      return false;
    } else if (!regex.test(inputEmailCookie.value)) {
      document.getElementById(
        "input-email-cookie"
      ).placeholder = `Enter a valid email address`;
      inputEmailCookie.value = "";
      return false;
    } else {
      inputEmailCookie.value = "";
      inputNameCookie.value = "";
      subInput.value = "";
      innerText.innerHTML = `
      <div class="inner-flex">
        <h2 class="display-name">
        Thanks <span class="modal-display-name">${name}</span>!
        </h2>
        <p class="end-message">Congratulations, you just unwittingly traded your eternal soul for a coffee refill! 😄</p>
      </div>
      `;
      modalCloseBtn.disabled = false;

      return true;
    }
  }

  validCookieEmail();
});

// Email Address Validation________________________________________
const subButton = document.getElementById("subscribe-btn");
const subInput = document.getElementById("subscribe-input");
const validMessage = document.getElementById("validation");
const formValidation = document.getElementById("sub-form");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();

// Send Email Form_________________________________________________________
formValidation.addEventListener("submit", (e) => {
  e.preventDefault();

  function sendEmail() {
    // let elementEmail = document.getElementById("subscribe-input").value;
    let message = "You have a new subscriber";
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "igunereve@gmail.com",
      Password: "39C66BCCBF545827BE10C4614840411A78B7",
      To: "cryptokitz0409@gmail.com",
      From: "igunereve@gmail.com",
      Subject: "Creamy Cup - Subscirbe",
      Body: message,
    }).then();
  }

  function emailValidation() {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (subInput.value.trim() === "") {
      document.getElementById(
        "subscribe-input"
      ).placeholder = `This field cannot be left empty!`;
      return false;
    } else if (!regex.test(subInput.value)) {
      document.getElementById(
        "subscribe-input"
      ).placeholder = `Enter a valid email address, 'example@email.com'`;
      subInput.value = "";
      return false;
    } else {
      subButton.style.display = "none";
      subInput.style.display = "none";
      validMessage.style.display = "block";
      subInput.value = "";
      sendEmail();
      return true;
    }
  }

  emailValidation();
});

// Scroll Effect________________________________________________________
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Logo hover effect_____________________________________
const logo = document.getElementById("web-logo");

logo.addEventListener("mouseenter", () => {
  logo.classList.add("fa-bounce");
});

logo.addEventListener("mouseout", () => {
  logo.classList.remove("fa-bounce");
});

// Cart click animation__________________________________________
const cartLogo = document.getElementById("shopCart");

cartLogo.addEventListener("click", () => {
  cartLogo.classList.add("fa-beat");
});
