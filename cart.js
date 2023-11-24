import { productData } from "./order-products-data.js";

// Navbar
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");

let mainPos = main.getBoundingClientRect().top;
let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

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

// Local Storage____________________________________________
let basket = JSON.parse(localStorage.getItem("data")) || [];

const generateCartItem = () => {
  if (basket.length !== 0) {
    shoppingCart.innerHTML = basket
      .map((e) => {
        const { id, item } = e;
        const search = productData.find((e) => e.id === id) || [];

        return `
        <div class="cart-item">
            <img class="image-cart" width="150px" 
            src=${search.img} alt="Images with products from the shop"/>
            <div class="details">
                <div class="card-product">
                  <div id=${id} class="title-price-close">
                      <div class="product-details">
                          <p class="product-info">${search.title}</p>
                          <p class="product-info">$ ${search.price}</p>
                      </div>
                      <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div class="cart-btn">
                  <i id=${id} class="fa-solid fa-minus"></i>
                  <div id="quantity-id-${id}" class="quantity">${item}</div>
                  <i id=${id} class="fa-solid fa-plus"></i>
                  </div>
                </div>

                <div class="subtotal">
                    <div class="subtotal-product-details">
                      <p class="subtotal-text">Subtotal</p>
                      <h5>$ ${Math.floor(item * search.price).toFixed(2)}</h5>
                    </div>
                </div>

            </div>
        </div>
        `;
      })
      .join("");
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <div class="emptyCart">
        <h2>Cart is Empty</h2>
        <a href="order.html">
        <button class="orderBtn">Go back to Order page</button>
        </a>
    </div>
    `;
  }

  document.querySelectorAll(".fa-plus").forEach((plus) => {
    plus.addEventListener("click", () => increment(plus.id));
  });

  document.querySelectorAll(".fa-minus").forEach((minus) => {
    minus.addEventListener("click", () => decrement(minus.id));
  });

  document.querySelectorAll(".title-price-close").forEach((close) => {
    close.addEventListener("click", () => removeItem(close.id));
  });
};

generateCartItem();

const increment = (id) => {
  let selectedItem = id;
  let search = basket.find((e) => e.id === selectedItem);

  if (search === undefined) {
    basket.push({ id: selectedItem, item: 1 });
  } else {
    search.item += 1;
  }

  generateCartItem();
  update(id);
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

const decrement = (id) => {
  let search = basket.find((e) => e.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(id);
  basket = basket.filter((e) => e.item !== 0);
  generateCartItem();
  localStorage.setItem("data", JSON.stringify(basket));
};

const update = (id) => {
  let search = basket.find((e) => e.id === id);
  document.getElementById(`quantity-id-${id}`).innerHTML = search.item;
  calculation();
  totalAmount();
};

let calculation = () => {
  let cartIcon = document.getElementById("count");
  cartIcon.innerHTML = basket
    .map((e) => e.item)
    .reduce((total, currentItem) => total + currentItem, 0);
};

calculation();

let removeItem = (id) => {
  basket = basket.filter((e) => e.id !== id);
  generateCartItem();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let totalAmount = (id) => {
  if (basket.length !== 0) {
    let amount = basket
      .map((e) => {
        let { id, item } = e;
        const search = productData.find((e) => e.id === id) || [];
        return item * search.price;
      })
      .reduce((total, currentItem) => total + currentItem, 0);
    label.innerHTML = `
      <h2 class="total-bill">Total Bill : 
      <span class="amount-bill">$ ${amount.toFixed(2)}</span></h2>
      <button id=${id} class="checkout">Checkout</button>
      <button id="remove-all" class="removeAll">Clear Cart</button>
      `;

    document.querySelectorAll(".removeAll").forEach((clear) => {
      clear.addEventListener("click", () => clearCart(clear.id));
    });
  } else return;
};

totalAmount();

let clearCart = () => {
  basket = [];
  generateCartItem();
  calculation();

  localStorage.setItem("data", JSON.stringify(basket));
};
