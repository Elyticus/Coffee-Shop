import { coffeeData } from "./about-data.js";

// About Page________________________________________________
function getHTML() {
  let feedHTML = "";

  coffeeData.forEach((coffee) => {
    feedHTML += `
    <div class="about-content">
    <div><img class="about-img" src = "${coffee.image}"/></div>
    <div>
    <p class="location-title fw-bold fs-5 mt-4">${coffee.city}</p>
    </div>

    <p>${coffee.address}</p>

    </div>
    `;
  });

  return feedHTML;
}

function renderHTML() {
  document.getElementById("coffee-feed").innerHTML = getHTML();
}

renderHTML();
