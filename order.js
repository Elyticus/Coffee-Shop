// Import the products form the data array object___________________________
import { productData } from "./order-products-data.js";
console.log(productData);

// Display the products on the screen_______________________________________
const displayFeed = document.getElementById("feed");

const listItems = productData.map((item) => {
  const listItem = document.createElement("div");
  listItem.classList.add("wrapper");
  listItem.innerHTML = `

    <img class="product-image" src=${item.img} />
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <p>${item.price}</p>

    <div>
    <button id="orderBtn" class="order-btn">Add to Cart</button>
    </div>

  
  `;
  return listItem;
});

listItems.forEach((item) => {
  displayFeed.appendChild(item);
});

let counter = 0;
const countProducts = document.getElementById("count");
const orderButtonElement = document.getElementById("orderBtn");

orderButtonElement.addEventListener("click", () => {
  counter++;
  countProducts.innerHTML = counter;
});
