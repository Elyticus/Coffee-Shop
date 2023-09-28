const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

const mainPos = main.getBoundingClientRect().top;

// Navbar
window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos >= mainPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

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
