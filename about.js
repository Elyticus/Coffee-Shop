import { coffeeData } from "./about-data.js";

// About Page________________________________________________
function getHTML() {
  let feedHTML = "";

  coffeeData.forEach((coffee) => {
    feedHTML += `
    <div class="about-content d-flex justify-content-center gap-2 mb-2">
    <img class="about-img" src = "${coffee.image}"
    </div>
    `;
  });

  return feedHTML;
}

function renderHTML() {
  document.getElementById("coffee-feed").innerHTML = getHTML();
}

// renderHTML();
