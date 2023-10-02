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
  "imgs/1.png",
  "imgs/3.png",
  "imgs/4.png",
  "imgs/2.png",
  "imgs/5.png",
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
      <p>We just sold the rights to your eternal soul.</p>
    </div>
    `;

    modalCloseBtn.disabled = false;
  }, 0);
});

// _____________________________________________________
