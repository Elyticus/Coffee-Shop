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
