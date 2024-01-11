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
    <img class="coffee-order" src="./assets/Coffee Cart.jpg" alt="Coffee Shop Illustration" />
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
const divElement = document.getElementById("checkoutDisplay");
const checkoutBG = document.getElementById("checkoutBackground");
const totalBill = document.getElementById("totalBill");

let handleChechout = () => {
  divElement.classList.toggle("display-message");
  checkoutBG.classList.toggle("checkout-display");

  let amount = basket
    .map((e) => {
      let { id, item } = e;
      const search = productData.find((e) => e.id === id) || [];
      return item * search.price;
    })
    .reduce((total, currentItem) => total + currentItem, 0);

  totalBill.innerHTML = `
  <div id="bill" class="bill">
    <p id="checkoutBill"" class="checkout-bill">Total bill:
    $${amount.toFixed(2)}</p>
    <button id="closeBtn" class="close-btn"></button>
  </div>
  
  <form id="checkoutForm" class="checkout-form">
    <label for="name" >Cardholder Name</label>
    <input name="name" id="name" type="text" required />

    <label for="cardNumber">Card Number</label>
    <input name="cardNumber" maxlength="19" id="cardNumber" type="text" required />

    <div class="label-expirationCVC">
      <label>Exp. Date (<label for="expDateMonth">MM</label>/
      <label for="expDateYear" class="me-5">YY<span>)</label>
      <label for="cvc">CVC</label>
    </div>

    <div class="expiration-date">
      <input name="expDateMonth" min="1" max="12" maxlength="2" id="expDateMonth" type="" required />
      <input name="expDateYear" maxlength="2" id="expDateYear" type="" required />

      <input name="cvc" maxlength="3" id="cvc" type="" required />
    </div>
    <p id="errorMessage" class="error-message">Please verify your card details</p>

    <img class="cards" src="./assets/products/Visa MasterCard.png" />

    <button class="payment-btn">Confirm payment</button>
  </form>
`;

  function validateName(inputName) {
    return /^(?=\S)(?:(?=\S{3,})[a-zA-Z\s]+|[a-zA-Z]{2}(?!\s))[\sa-zA-Z]*$/.test(
      inputName.value
    );
  }

  function validateCard(inputCard) {
    return /^[45]\d{3}(\s?\d{4}){3}$/.test(inputCard.value);
  }

  function validateCVC(inputCVC) {
    return /^\d{3}$/.test(inputCVC.value);
  }

  function validateMonth(inputMonth) {
    const monthValue = parseInt(inputMonth.value, 10);
    return !isNaN(monthValue) && monthValue >= 1 && monthValue <= 12;
  }

  function validateYear(inputYear) {
    const yearValue = parseInt(inputYear.value, 10);
    return !isNaN(yearValue) && yearValue >= 24 && yearValue <= 99;
  }

  document.querySelectorAll(".payment-btn").forEach(() => {
    const inputName = document.getElementById("name");
    const inputCard = document.getElementById("cardNumber");
    const inputMonth = document.getElementById("expDateMonth");
    const inputYear = document.getElementById("expDateYear");
    const inputCVC = document.getElementById("cvc");
    const form = document.getElementById("checkoutForm");
    const totalBill = document.getElementById("checkoutBill");
    const errorMessage = document.getElementById("errorMessage");

    inputCard.addEventListener("input", function (event) {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/\D/g, "");
      inputValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
      event.target.value = inputValue;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (
        validateName(inputName) &&
        validateCard(inputCard) &&
        validateCVC(inputCVC) &&
        validateMonth(inputMonth) &&
        validateYear(inputYear)
      ) {
        clearCart();
        form.innerHTML = `
        <h2 class="thankMessage">
        Thank you for your purchase. You will receive your order soon
        </h2>
        `;
        totalBill.style.visibility = "hidden";
        return true;
      } else if (
        inputName.value !== validateName(inputName) ||
        inputCard.value !== validateCard(inputCard) ||
        inputMonth.value !== validateMonth(inputMonth) ||
        inputYear.value !== validateYear(inputYear) ||
        inputCVC.value !== validateCVC(inputCVC)
      ) {
        errorMessage.style.display = "block";
      }
    });
  });

  const closeBtn = document.getElementById("closeBtn");

  closeBtn.addEventListener("click", () => {
    divElement.classList.remove("display-message");
    checkoutBG.classList.remove("checkout-display");
    totalBill.innerHTML = "";
    closeBtn.style.display = "none";
  });
};
