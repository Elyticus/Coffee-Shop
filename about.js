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

// Canvas Drawing_______________________________________________________
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

<<<<<<< HEAD
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
=======
let number = "" + 15;
let newNum = new Array();
>>>>>>> parent of 8444d65 (recover files)

ctx.strokeStyle = "#BEDF55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

<<<<<<< HEAD
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = 1; // 1 for increasing hue, -1 for decreasing

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  // Adjust the starting point to be in the middle of the cursor
  ctx.beginPath();
  ctx.moveTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );

  ctx.lineTo(lastX, lastY);
  ctx.stroke();

  [lastX, lastY] = [
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top,
  ];

  hue += direction;
  if (hue >= 360 || hue <= 0) {
    direction *= -1; // Reverse the direction when hue reaches the limits
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [
    e.offsetX - ctx.lineWidth / 2,
    e.offsetY - ctx.lineWidth / 2,
  ];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  clearCanvas();
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
  clearCanvas();
});
=======
console.log(
  number.split("").map((n) => {
    newNum.push(n ** 2);
  })
);
>>>>>>> parent of 8444d65 (recover files)
