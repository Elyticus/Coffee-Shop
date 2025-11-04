// Navbar
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

if (navbar && main) {
  let mainOffsetTop = main.offsetTop;

  const toggleStickyNavbar = () => {
    if (window.scrollY >= mainOffsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", toggleStickyNavbar, { passive: true });
  window.addEventListener("resize", () => {
    mainOffsetTop = main.offsetTop;
    toggleStickyNavbar();
  });

  toggleStickyNavbar();
}

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
  if (!container) return;

  const fragment = document.createDocumentFragment();

  images.forEach((src) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gall-img";
    galleryItem.style.backgroundImage = `url(${src})`;
    fragment.appendChild(galleryItem);
  });

  container.replaceChildren(fragment);
}

renderImg();

// ______________________________________________________

// Cookie Setup
const cookieModal = document.getElementById("modal");
const bodyElement = document.getElementById("container-main");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("login-form");
const modalInner = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const choiceBtn = document.getElementById("modal-choice-btns");
const inputNameCookie = document.getElementById("input-name-cookie");

let consentedName = "";

if (
  cookieModal &&
  bodyElement &&
  modalCloseBtn &&
  consentForm &&
  modalInner &&
  declineBtn &&
  choiceBtn &&
  inputNameCookie
) {
  const NAME_PLACEHOLDER = "Enter a valid name";
  const nameRegex = /^(?=\S)(?:(?=\S{3,})[a-zA-Z]+(?:\s[a-zA-Z]+)?|[a-zA-Z]{3}(?!\s))[\sa-zA-Z]*$/;

  const renderConsentSuccess = (name) => {
    const wrapper = document.createElement("div");
    wrapper.className = "inner-flex";

    const heading = document.createElement("h2");
    heading.className = "display-name";
    heading.append("Thanks ");

    const nameHighlight = document.createElement("span");
    nameHighlight.className = "modal-display-name";
    nameHighlight.textContent = name;
    heading.appendChild(nameHighlight);
    heading.append("!");

    const message = document.createElement("p");
    message.className = "end-message";
    message.textContent =
      "Congratulations, you just unwittingly traded your eternal soul for a coffee refill! 😄";

    wrapper.append(heading, message);
    modalInner.replaceChildren(wrapper);
  };

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

  consentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formLoginData = new FormData(consentForm);
    const name = (formLoginData.get("fullName") || "").trim();

    if (!nameRegex.test(name)) {
      inputNameCookie.value = "";
      inputNameCookie.placeholder = NAME_PLACEHOLDER;
      return;
    }

    consentedName = name;
    renderConsentSuccess(name);
    modalCloseBtn.disabled = false;
    inputNameCookie.value = "";
  });
}

// Email Address Validation________________________________________
const subButton = document.getElementById("subscribe-btn");
const subInput = document.getElementById("email");
const validMessage = document.getElementById("validation");
const formValidation = document.getElementById("sub-form");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  const cartIcon = document.getElementById("count");

  if (!cartIcon) return;

  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();

// Send email function______________________________________________________
const sendEmail = (name, email) => {
  const params = {
    name,
    email,
  };

  const serviceID = "service_we7kf8s";
  const templateID = "template_z3v6orp";

  return emailjs.send(serviceID, templateID, params);
};

// Send Email Form_________________________________________________________
if (formValidation && subInput && subButton && validMessage) {
  const emailRegex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;

  formValidation.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = subInput.value.trim();

    if (!email) {
      subInput.placeholder = "This field cannot be left empty!";
      return;
    }

    if (!emailRegex.test(email)) {
      subInput.value = "";
      subInput.placeholder = "Enter a valid email address, 'example@email.com'";
      return;
    }

    const name = consentedName || (inputNameCookie ? inputNameCookie.value.trim() : "");

    sendEmail(name, email).finally(() => {
      if (inputNameCookie) {
        inputNameCookie.value = "";
      }
      subInput.value = "";
    });

    subButton.style.display = "none";
    subInput.style.display = "none";
    validMessage.style.display = "block";
  });
}

// Scroll Effect________________________________________________________
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach((element) => {
      const revealTop = element.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();
}

// Logo hover effect_____________________________________
const logo = document.getElementById("web-logo");

if (logo) {
  logo.addEventListener("mouseenter", () => {
    logo.classList.add("fa-bounce");
  });

  logo.addEventListener("mouseout", () => {
    logo.classList.remove("fa-bounce");
  });
}

// Cart click animation__________________________________________
const cartLogo = document.getElementById("shopCart");

if (cartLogo) {
  cartLogo.addEventListener("click", () => {
    cartLogo.classList.add("fa-beat");
  });
}
