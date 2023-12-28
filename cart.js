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

            <div class="details-card">
                <div class="card-product">
                  <div id=${id} class="title-price-close">
                      <div class="product-details">
                          <p class="product-info">${search.title}</p>
                          <p class="product-info cart-price">$ ${
                            search.price
                          }</p>
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
                      <h5>$ ${(item * search.price).toFixed(2)}</h5>
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
        <h2 id="errorCart">Ooops... the cart is empty</h2>
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

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((e) => {
        let { id, item } = e;
        const search = productData.find((e) => e.id === id) || [];
        return item * search.price;
      })
      .reduce((total, currentItem) => total + currentItem, 0);
    label.innerHTML = `
      <h2 class="total-bill">Total to pay : 
      <span class="amount-bill">$ ${amount.toFixed(2)}</span></h2>
      <button id="check-out-btn" class="checkout">Checkout</button>
      <button id="remove-all" class="removeAll">Clear Cart</button>
      `;

    document.querySelectorAll(".removeAll").forEach((clear) => {
      clear.addEventListener("click", () => clearCart(clear.id));
    });

    document.querySelectorAll(".checkout").forEach((check) => {
      check.addEventListener("click", () => handleChechout(check.id));
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

// Logo hover effect____________________________________________
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

// Checkout button_______________________________________________
const closeBtn = document.getElementById("closeBtn");
const divElement = document.getElementById("checkoutDisplay");
const checkoutBG = document.getElementById("checkoutBackground");
const totalBill = document.getElementById("totalBill");

closeBtn.style.display = "none";

let handleChechout = () => {
  divElement.classList.toggle("display-message");
  checkoutBG.classList.toggle("checkout-display");
  closeBtn.style.display = "block";

  let amount = basket
    .map((e) => {
      let { id, item } = e;
      const search = productData.find((e) => e.id === id) || [];
      return item * search.price;
    })
    .reduce((total, currentItem) => total + currentItem, 0);

  totalBill.innerHTML = `
  <span class="checkout-bill">Total bill: 
  $${amount.toFixed(2)}</span>
  <form id="checkoutForm" class="checkout-form">
    <label>Cardholder Name:</label>
    <input id="name" type="text" />
    <p id="displayError" class="display-error">error</p>

    <label>Card Number:</label>
    <input id="cardNumber" type="number" />
    <p id="displayError" class="display-error">error</p>

    <div class="label-expirationCVC">
      <label>Exp. Date (MM/YY)</label>
      <label>CVC</label>
    </div>

    <div class="expiration-date">
      <input id="expDateMonth" type="number" />
      <input id="expDateYear" type="number" />

      <input id="cvc" type="number" />
    </div>
    <p id="displayError" class="display-error">error</p>

    <button id="paymentBtn" class="payment-btn">Confirm payment</button>
  </form>

  `;

  document.querySelectorAll(".payment-btn").forEach((clear) => {
    const inputName = document.getElementById("name");
    const inputCard = document.getElementById("name");
    const inputDate = document.getElementById("name");
    const inputCVC = document.getElementById("name");

    const form = document.getElementById("checkoutForm");

    form.addEventListener("click", (e) => {
      const regex =
        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      const errorMessage = document.getElementById("displayError");
      e.preventDefault();

      if (
        (inputName.value = inputName.value) &&
        (inputCard.value = inputCard.value) &&
        (inputDate.value = inputDate.value) &&
        (inputCVC.value = inputCVC.value)
      ) {
        errorMessage.style.display = "block";
        return false;
      } else if (!regex.test(inputCard.value)) {
        errorMessage.style.display = "block";
        return false;
      } else {
        clear.addEventListener("click", () => clearCart(clear.id));
        errorMessage.style.display = "none";
        return true;
      }
    });
  });
};

closeBtn.addEventListener("click", () => {
  divElement.classList.remove("display-message");
  checkoutBG.classList.remove("checkout-display");
  totalBill.innerHTML = "";
  closeBtn.style.display = "none";
});
