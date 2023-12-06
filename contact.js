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

  function sendEmail() {
    // let name = document.getElementById("input-name").value;
    // let elementEmail = document.getElementById("input-email").value;
    // let phone = document.getElementById("input-phone").value;
    // let seats = document.getElementById("seats").value;
    // let time = document.getElementById("time").value;
    // let day = document.getElementById("day").value;
    // let textarea = document.getElementById("textarea").value;

    // let body = `
    // <div>
    // <p>Name: ${name}</p>
    // <p>Email: ${elementEmail}</p>
    // <p>Phone: ${phone}</p>
    // <p>Seat: ${seats}</p>
    // <p>Time: ${time}</p>
    // <p>Day: ${day}</p>
    // <p>Message: ${textarea}</p>
    // </div>
    // `;

    let body = "You have a NEW message";

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "igunereve@gmail.com",
      Password: "39C66BCCBF545827BE10C4614840411A78B7",
      To: "cryptokitz0409@gmail.com",
      From: "igunereve@gmail.com",
      Subject: "Reservation Request",
      Body: body,
    }).then();
  }

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
      sendEmail();
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
