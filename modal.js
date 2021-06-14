// responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//
// DOM Elements
//

// general DOM elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const validationMessage = document.getElementById("validation-message");

// inputs elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const NbrOfTournament = document.getElementById("quantity");
const acceptanceCheckbox = document.getElementById("checkbox1");

//
// launch and close modal
//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

//
// listen input data
//

formData.forEach((input) => input.addEventListener("change", formValidation));

//
// form validation
//

// Regex Patterns
const textPattern = /[a-zA-Z0-9]+/;
const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const birthdatePattern =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
const numberPattern = /^[0-9]{1,3}$/;

// Show/Hide data error
function hideDataError(element) {
  formData.setAttribute("data-error-visible", false);
}

function showDataError(element) {
  formData.setAttribute("data-error-visible", true);
}

// validation action
function formValidation(formInput) {
  let validateName = isTextValid(lastName.value);
}

// validation functions
function isTextValid(text) {
  if (text.length < 2 || text === "" || !regex.textPattern(text)) {
    showDataError(lastName);
    return false;
  }
  hideDataError(lastName);
  return true;
}

function isEmailValid(email) {
  if (email === "" || !regex.emailPattern(email)) {
    return false;
  }
  return true;
}

function isBirthdateValid(birthdate) {
  if (!regex.birthdatePattern(birthdate)) {
    return false;
  }
  return true;
}

// function isNbrOfTournamentValid(nbrOfTournament) {}

// function isCitiesValid(cities) {}

// function isAcceptanceCheckboxChecked(acceptanceCheckbox) {}

//
// Succes ! Form Validation Message
//

let noErrorInForm = true;

function hideForm() {
  formData.forEach((element) => {
    element.style.display = "none";
  });
  submitBtn.style.display = "none";
}

function launchValidationMessage() {
  validationMessage.style.display = "block";
}

if (noErrorInForm) {
  hideForm();
  launchValidationMessage();
}
