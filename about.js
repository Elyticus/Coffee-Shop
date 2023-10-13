import { coffeeData } from "./about-data.js";

// About Page________________________________________________
function getHTML() {
  let feedHTML = "";

  coffeeData.forEach((coffee) => {
    feedHTML += `
    <div class="about-content">
    <img class="about-img" src = "${coffee.image}"
    </div>
    <div>
      <p>${coffee.city}</p>
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
