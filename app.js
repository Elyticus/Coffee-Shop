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

// Start the animation loop
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

// Deactivate the cookies when the page is lodded

// if (!localStorage.getItem("visitedBefore")) {
//   const cookieModal = document.getElementById("modal");
//   const bodyElement = document.getElementById("container-main");

//   if (cookieModal) {
//     cookieModal.style.display = "block";
//   }

//   localStorage.setItem("visitedBefore", "true");
// }

setTimeout(() => {
  cookieModal.style.display = "inline";
}, 1000);

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

  setTimeout(() => {
    innerText.innerHTML = `
    <div class="inner-flex">
      <h2 class="display-name">
      Thanks <span class="modal-display-name">${name}</span>!
      </h2>
      <p class="end-message">Congratulations, you just unwittingly traded your eternal soul for a coffee refill! 😄</p>
    </div>
    `;

    modalCloseBtn.disabled = false;
  }, 0);
});

// Email Address Validation________________________________________
const subButton = document.getElementById("subscribe-btn");
const subInput = document.getElementById("subscribe-input");
const validMessage = document.getElementById("validation");

function emailValidation() {
  const regex = /\S+@\S+\.\S+/;

  if (subInput.value.trim() === "") {
    document.getElementsByName(
      "Email"
    )[0].placeholder = `This field cannot be empty!`;
    return false;
  } else if (!regex.test(subInput.value)) {
    document.getElementsByName(
      "Email"
    )[0].placeholder = `You need email address format!`;
    subInput.value = "";
    return false;
  } else {
    subButton.style.display = "none";
    subInput.style.display = "none";
    validMessage.style.display = "block";
    subInput.value = "";
    return true;
  }
}

subButton.addEventListener("click", emailValidation);
