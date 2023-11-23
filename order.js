// Import the products form the data array object___________________________
import { productData } from "./order-products-data.js";

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

// Display the products on the screen_______________________________________
const displayFeed = document.getElementById("feed");

let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateShop = () => {
  displayFeed.innerHTML = productData
    .map((item) => {
      const { id, img, title, description, price } = item;
      return `
     <div id="product-id-${id}" class="wrapper">
      <img class="product-image" src=${img} alt="This is a product image" />
      <h3>${title}</h3>
      <p>${description}</p>
      <p>$ ${price}</p>

      <div>
        <button id=${id} class="order-btn">
          Add to Cart
        </button>
      </div>
    </div>`;
    })
    .join("");

  // Attach event listeners to each "Add to Cart" button
  document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.id));
  });
};

generateShop();

// ADD to Cart_____________________________________________________________
const addToCart = (id) => {
  let selectedItem = id;
  let search = basket.find((e) => e.id === selectedItem);

  if (search === undefined) {
    basket.push({ id: selectedItem, item: 1 });
  } else {
    search.item += 1;
  }
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();
