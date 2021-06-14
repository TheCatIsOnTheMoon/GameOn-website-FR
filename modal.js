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

// error messages elements
const firstNameError = document.getElementById("firstName-error-message");
const lastNameError = document.getElementById("lastName-error-message");
const emailError = document.getElementById("email-error-message");
const birthdateError = document.getElementById("birthdate-error-message");
const NbrOfTournamentError = document.getElementById("quantity-error-message");
const CitiesError = document.getElementById("cities-error-message");
const acceptanceCheckboxError = document.getElementById(
  "checkbox1-error-message"
);

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

// // launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

// modalCloseBtn.addEventListener("click", function () {
//   modalbg.style.display = "none";
// });

//
// listen input data
//

submitBtn.addEventListener("click", () => {
  firstNameInputValidation();
  lastNameInputValidation();
  emailInputValidation();
  birthdateInputValidation();
  nbrOfTournamentInputValidation();
  AcceptanceCheckboxInputValidation();
});

// validation functions
function firstNameInputValidation() {
  if (
    firstName.value.length < 2 ||
    firstName.value === "" ||
    !/[a-zA-Z0-9]+/.test(firstName.value)
  ) {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  } else {
    firstNameError.innerHTML = "";
    return true;
  }
}

function lastNameInputValidation() {
  if (
    lastName.value.length < 2 ||
    lastName.value === "" ||
    !/[a-zA-Z0-9]+/.test(lastName.value)
  ) {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  lastNameError.innerHTML = "";
  return true;
}

function emailInputValidation() {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    emailError.innerHTML = "Veuillez entrer un E-mail valide.";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

function birthdateInputValidation() {
  if (
    !/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(
      birthdate.value
    )
  ) {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
  birthdateError.innerHTML = "";
  return true;
}

function nbrOfTournamentInputValidation() {
  if (NbrOfTournament.value === "") {
    NbrOfTournamentError.innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez déjà participé.";
    return false;
  }
  NbrOfTournamentError.innerHTML = "";
  return true;
}

function AcceptanceCheckboxInputValidation() {
  if (acceptanceCheckbox.value !== "checked") {
    acceptanceCheckboxError.innerHTML =
      "Vous devez accepter les termes et conditions.";
    return false;
  }
  acceptanceCheckboxError.innerHTML = "";
  return true;
}

// -------------------------------------------------------------------

//
// Succes ! FormValidation Message NOT WORKING
//

// let noErrorInForm = true;

// submitBtn.addEventListener("click", launchValidationMessage());

// function hideForm() {
//   formData.forEach((element) => {
//     element.style.display = "none";
//   });
//   submitBtn.style.display = "none";
// }

// function launchValidationMessage() {
//   e.preventDefault();
//   if (noErrorInForm) {
//     hideForm();
//     validationMessage.style.display = "block";
//   }
// }
