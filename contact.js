const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const messageArea = document.getElementById("textarea");

const selectSeats = document.getElementById("seats");
const selectTime = document.getElementById("time");
const selectDay = document.getElementById("day");

const reserveForm = document.getElementById("form");
const thankMessage = document.getElementById("thank-message");
const errorMessage = document.querySelector(".error-message");

inputName.value = "";
inputPhone.value = "";
inputEmail.value = "";
messageArea.value = "";
selectSeats.value = "";
selectTime.value = "";
selectDay.value = "";

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

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  function validateName(inputName) {
    return /^[a-zA-Z ]{3,}$/.test(inputName.value);
  }

  function validateContactEmail() {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (
      validateName(inputName) &&
      (inputEmail.value = inputEmail.value) &&
      (inputPhone.value = inputPhone.value) &&
      (messageArea.value = messageArea.value) &&
      (selectSeats.value = selectSeats.value) &&
      (selectTime.value = selectTime.value) &&
      (selectDay.value = selectDay.value) &&
      inputEmail.value.trim() === ""
    ) {
      messageArea.value = messageArea.value.slice(0, 50);
      errorMessage.style.display = "block";
      return false;
    } else if (!regex.test(inputEmail.value)) {
      document.getElementById(
        "input-email"
      ).placeholder = `Enter a valid email*`;
      inputEmail.value = "";
      return false;
    } else {
      reserveForm.style.display = "none";
      thankMessage.style.display = "block";
      errorMessage.style.display = "none";
      inputName.value = "";
      inputPhone.value = "";
      inputEmail.value = "";
      messageArea.value = "";
      selectSeats.value = "";
      selectTime.value = "";
      selectDay.value = "";
      return true;
    }
  }

  validateContactEmail();
});

// Scroll Effect________________________________________________________
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 10;

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
