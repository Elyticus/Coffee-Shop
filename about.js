import { coffeeData } from "./about-data.js";

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

// About Page________________________________________________
function getHTML() {
  let feedHTML = "";

  coffeeData.forEach((coffee) => {
    feedHTML += `
    <div class="about-content">
    <div>
    <img class="about-img reveal" src = "${coffee.image}" alt="Image with the restaurant location"/>
    </div>
    <div>
    <p class="location-title fw-bold fs-5 mt-4 reveal">${coffee.city}</p>
    </div>

    <p class="reveal">${coffee.address}</p>

    </div>
    `;
  });

  return feedHTML;
}

function renderHTML() {
  document.getElementById("coffee-feed").innerHTML = getHTML();
}

renderHTML();

// Cards Effect_______________________________________________________
const cardElement = document.getElementsByClassName("cards")[0];
const cardElement1 = document.getElementsByClassName("cards")[1];
const cardElement2 = document.getElementsByClassName("cards")[2];
const cardElement3 = document.getElementsByClassName("cards")[3];

const historyBook = document.getElementById("history-book");

cardElement.addEventListener("click", () => {
  historyBook.innerHTML = `
  Integer suspendisse
  volutpat viverra pellentesque eget sed. Odio quisque egestas. Lorem
  ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolor a
  necessitatibus, ea optio, culpa error iusto modi esse officiis,
  porro corrupti? Non doloribus vitae voluptatem asperiores nam eos
  magnam, tenetur enim. Minus illo similique ipsa quaerat illum.
  Corrupti, incidunt voluptatem! Molestiae, delectus? Officia sequi
  architecto doloremque quibusdam sit non.
  `;
});

cardElement1.addEventListener("click", () => {
  historyBook.innerHTML = `
  Lorem ipsum dolor sit amet consectetur. Et orci urna mollis
  tincidunt non donec amet laoreet. Integer suspendisse volutpat
  viverra pellentesque eget sed. Odio quisque egestas ipsum pretium
  facilisis viverra enim. Purus condimentum ultricies porta diam. Mi
  diam feugiat arcu pretium. amet consectetur. Et orci urna mollis
  tincidunt non donec amet laoreet.
  `;
});

cardElement2.addEventListener("click", () => {
  historyBook.innerHTML = `
  Ab voluptatibus eius laboriosam tempora non error enim. Beatae, non nihil sint iusto incidunt officia alias quas similique. 
  Sequi officia, cupiditate, fugiat mollitia temporibus libero, 
  repellat veniam quos eveniet ullam officiis. Repudiandae minus dolore pariatur 
  quia dicta ipsa excepturi consequatur consectetur perferendis, 
  ea sapiente vel eaque facere, doloremque eum, dolorem aut velit illo quo sequi fugiat fuga quod odit possimus. 
  Accusantium, recusandae ipsam!
  `;
});

cardElement3.addEventListener("click", () => {
  historyBook.innerHTML = `
  Et orci urna mollis
  tincidunt non donec amet laoreet. Integer suspendisse volutpat
  viverra pellentesque eget sed. Odio quisque egestas. Et orci urna
  mollis tincidunt non donec amet laoreet.
  Repudiandae minus dolore pariatur 
  quia dicta ipsa excepturi consequatur consectetur perferendis, 
  ea sapiente vel eaque facere, doloremque eum, dolorem aut velit illo quo sequi fugiat fuga quod odit possimus. 
  Accusantium, recusandae ipsam!
  `;
});

// _________________________________________________________________

<<<<<<< HEAD
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
=======
=======
>>>>>>> parent of 8444d65 (recover files)
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 8444d65 (recover files)
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 4f8c0db (Revert "recover files")

console.log(typeof number);
console.log(newNum);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = 1; // 1 for increasing hue, -1 for decreasing
>>>>>>> acc03266a408ce5ac1ed25c71ede7c7ea6e49e95

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
=======
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
console.log(
  number.split("").map((n) => {
    newNum.push(n ** 2);
  })
);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 8444d65 (recover files)
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 8444d65 (recover files)
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
=======
>>>>>>> parent of 4f8c0db (Revert "recover files")
