const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const messageArea = document.getElementById("textarea");

const selectSeats = document.getElementById("seats");
const selectTime = document.getElementById("time");
const selectDay = document.getElementById("day");

const reserveForm = document.getElementById("form");
const thankMessage = document.getElementById("thank-message");
const errorMessage = document.querySelector(".error-message");

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    (inputName.value = inputName.value) &&
    (inputEmail.value = inputEmail.value) &&
    (inputPhone.value = inputPhone.value) &&
    (messageArea.value = messageArea.value) &&
    messageArea.value.length < 50 &&
    (selectSeats.value = selectSeats.value) &&
    (selectTime.value = selectTime.value) &&
    (selectDay.value = selectDay.value)
  ) {
    messageArea.value = messageArea.value.slice(0, 50);
    errorMessage.style.display = "block";
  } else {
    reserveForm.style.display = "none";
    thankMessage.style.display = "block";
<<<<<<< HEAD
=======
    errorMessage.style.display = "none";
>>>>>>> parent of 8444d65 (recover files)
  }
});
