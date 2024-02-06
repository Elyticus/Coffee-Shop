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

<<<<<<< HEAD
  if (
    (inputName.value = inputName.value) &&
    (inputEmail.value = inputEmail.value) &&
    (inputPhone.value = inputPhone.value) &&
    (messageArea.value = messageArea.value) &&
    messageArea.value.length < 50 &&
    (selectSeats.value = selectSeats.value) &&
    (selectTime.value = selectTime.value) &&
    (selectDay.value = selectDay.value)
  ) {
    messageArea.value = messageArea.value.slice(0, 50);
    errorMessage.style.display = "block";
  } else {
    reserveForm.style.display = "none";
    thankMessage.style.display = "block";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    errorMessage.style.display = "none";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 8444d65 (recover files)
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 8444d65 (recover files)
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
=======
>>>>>>> parent of 74d5f29 (Revert "recover files")
=======
    errorMessage.style.display = "none";
>>>>>>> df0e8b293498c3befc50b9ac963cb02bc524bb9a
=======
  function validateName(inputName) {
    return /^(?=\S)(?:(?=\S{3,})[a-zA-Z]+(?:\s[a-zA-Z]+)?|[a-zA-Z]{3}(?!\s))[\sa-zA-Z]*$/.test(
      inputName.value
    );
>>>>>>> ed75509f935288f667b6ded105d0b81399ff7bf3
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 74d5f29 (Revert "recover files")
=======
>>>>>>> parent of 74d5f29 (Revert "recover files")
=======
=======
>>>>>>> parent of bb30c67 (recover files)
>>>>>>> df0e8b293498c3befc50b9ac963cb02bc524bb9a
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
