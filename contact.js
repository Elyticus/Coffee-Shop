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

  function validateContactEmail() {
    const regex = /\S+@\S+\.\S+/;

    if (
      (inputName.value = inputName.value) &&
      (inputEmail.value = inputEmail.value) &&
      (inputPhone.value = inputPhone.value) &&
      (messageArea.value = messageArea.value) &&
      messageArea.value.length < 50 &&
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
      ).placeholder = `Enter a valid email`;
      inputEmail.value = "";
      inputEmail.style.border = "2px solid red";
      return false;
    } else {
      reserveForm.style.display = "none";
      thankMessage.style.display = "block";
      errorMessage.style.display = "none";
      inputEmail.style.border = "none";
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
