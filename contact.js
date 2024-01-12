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

// Send email function______________________________________________________

const sendEmail = () => {
  const params = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    seats: selectSeats.value,
    time: selectTime.value,
    day: selectDay.value,
    message: messageArea.value,
  };

  const serviceID = "service_v4xi5hi";
  const templateID = "template_cwn9adg";

  emailjs.send(serviceID, templateID, params).then(() => {
    inputName.value = "";
    inputEmail.value = "";
    inputPhone.value = "";
    selectSeats.value = "";
    selectTime.value = "";
    selectDay.value = "";
    messageArea.value = "";
  });
};

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.getElementById("input-name");
  const inputPhone = document.getElementById("input-phone");
  const inputEmail = document.getElementById("input-email");

  function validateName(inputName) {
    return /^(?=\S)(?:(?=\S{3,})[a-zA-Z]+(?:\s[a-zA-Z]+)?|[a-zA-Z]{3}(?!\s))[\sa-zA-Z]*$/.test(
      inputName.value
    );
  }

  function validatePhone(inputPhone) {
    return /^\+?\d{10,}$/.test(inputPhone.value);
  }

  function validateContactEmail() {
    const regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

    if (
      !validateName(inputName) ||
      inputEmail.value === "" ||
      !regex.test(inputEmail.value) ||
      !validatePhone(inputPhone)
    ) {
      if (!validateName(inputName)) {
        inputName.placeholder = "Enter a valid name*";
        inputName.value = "";
      }

      if (inputEmail.value === "" || !regex.test(inputEmail.value)) {
        inputEmail.placeholder = "Enter a valid email*";
        inputEmail.value = "";
      }

      if (!validatePhone(inputPhone)) {
        inputPhone.placeholder = "Enter a valid phone*";
        inputPhone.value = "";
      }

      return false;
    } else {
      sendEmail();
      reserveForm.style.display = "none";
      thankMessage.style.display = "block";
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
