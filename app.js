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
const inputNameCookie = document.getElementById("input-name-cookie");

cookieModal.style.display = "inline";
modalCloseBtn.disabled = true;
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

  function validCookieForm() {
    function validateName(inputNameCookie) {
      return /^(?=\S)(?:(?=\S{3,})[a-zA-Z]+(?:\s[a-zA-Z]+)?|[a-zA-Z]{3}(?!\s))[\sa-zA-Z]*$/.test(
        inputNameCookie
      );
    }

    if (!validateName(name)) {
      document.getElementById(
        "input-name-cookie"
      ).placeholder = `Enter a valid name`;
      inputNameCookie.value = "";
      return false;
    } else {
      inputNameCookie.value = "";
      innerText.innerHTML = `
      <div class="inner-flex">
        <h2 class="display-name">
        Thanks <span class="modal-display-name">${name}</span>!
        </h2>
        <p class="end-message">Congratulations, 
        you just unwittingly traded your eternal soul for a coffee refill! 😄</p>
      </div>
      `;
      modalCloseBtn.disabled = false;
      return true;
    }
  }

  validCookieForm();
});

// Email Address Validation________________________________________
const subButton = document.getElementById("subscribe-btn");
const subInput = document.getElementById("email");
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

// Send email function______________________________________________________
const sendEmail = () => {
  const params = {
    name: inputNameCookie.value,
    email: subInput.value,
  };

  const serviceID = "service_we7kf8s";
  const templateID = "template_z3v6orp";

  emailjs.send(serviceID, templateID, params).then(() => {
    inputNameCookie.value = "";
    subInput.value = "";
  });
};

// Send Email Form_________________________________________________________
formValidation.addEventListener("submit", (e) => {
  e.preventDefault();

  function emailValidation() {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (subInput.value.trim() === "") {
      document.getElementById(
        "email"
      ).placeholder = `This field cannot be left empty!`;
      return false;
    } else if (!regex.test(subInput.value)) {
      document.getElementById(
        "email"
      ).placeholder = `Enter a valid email address, 'example@email.com'`;
      subInput.value = "";
      return false;
    } else {
      sendEmail();
      subButton.style.display = "none";
      subInput.style.display = "none";
      validMessage.style.display = "block";
      subInput.value = "";
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
