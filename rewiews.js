// Setting Firebase______________________________________________________
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://coffee-reviews-c39c7-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const feedbackInDB = ref(database, "feedback");

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

// Set LocalStorage___________________________________________________

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();

// Build the review function__________________________________________
const textareaElement = document.getElementById("textarea");
const fromElement = document.getElementById("from_input");
const pushButton = document.querySelector(".publish");
const displayFeedback = document.getElementById("display_feedback");

textareaElement.value = "";
fromElement.value = "";

pushButton.addEventListener("click", () => {
  event.preventDefault();

  let messageObject = {
    messageText: textareaElement.value,
    messageFrom: fromElement.value ? fromElement.value : "Anon",
  };

  if (fromElement.value != "" && textareaElement.value != "") {
    push(feedbackInDB, messageObject);

    textareaElement.style.border = "none";
    textareaElement.placeholder = "Add your thought here...";

    fromElement.style.border = "none";

    clearTextArea();
  } else {
    textareaElement.style.border = "2px solid #EA3C3E";

    fromElement.style.border = "2px solid #EA3C3E";
    textareaElement.placeholder = "This cannot be empty";

    textareaElement.classList.remove("shake");

    window.requestAnimationFrame(() => {
      textareaElement.classList.add("shake");
    });
  }
});

onValue(feedbackInDB, (snapshot) => {
  if (snapshot.exists()) {
    let messageArray = Object.values(snapshot.val());
    displayFeedback.style.fontStyle = "normal";
    displayFeedback.style.color = "black";

    messageArray.reverse();
    clearMessages();

    for (let i = 0; i < messageArray.length; i++) {
      let currentMessages = messageArray[i];
      appaendMessagesList(currentMessages);
    }
  } else {
    displayFeedback.textContent = " - You have no messages... yet - ";
    displayFeedback.style.color = "#FBAC39";
    displayFeedback.style.fontStyle = "italic";
  }
});

function clearMessages() {
  displayFeedback.innerHTML = "";
}

function clearTextArea() {
  textareaElement.value = "";
  fromElement.value = "";
}

function appaendMessagesList(feedbackValue) {
  displayFeedback.innerHTML += `
     <li class="message">
       <p class="message-text">${feedbackValue.messageText}</p>
       <div class = "flex">
       <p class = "senderName"><span class = "sender">From:</span> ${feedbackValue.messageFrom}</p>
       </div>
     </li>
     `;
}

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
