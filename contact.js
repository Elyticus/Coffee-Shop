const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const messageArea = document.getElementById("textarea");

const selectSeats = document.getElementById("seats");
const selectTime = document.getElementById("time");
const selectDay = document.getElementById("day");

const reserveForm = document.getElementById("form");
const thankMessage = document.getElementById("thank-message");

reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    (inputName.value = inputName.value) &&
    (inputEmail.value = inputEmail.value) &&
    (inputPhone.value = inputPhone.value) &&
    (messageArea.value = messageArea.value) &&
    (selectSeats.value = selectSeats.value) &&
    (selectTime.value = selectTime.value) &&
    (selectDay.value = selectDay.value)
  ) {
    reserveForm.style.display = "none";
    thankMessage.style.display = "block";
  }
});
