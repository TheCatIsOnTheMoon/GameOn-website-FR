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

// // close modal event
// modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// // // launch modal form
// function closeModal() {
//   modalbg.style.display = "none";
// }

document.getElementById("close").addEventListener("click", function () {
  modalbg.style.display = "none";
});

//
// listen input data
//

// formData.addEventListener("input", () => {
//   firstNameInputValidation();
//   lastNameInputValidation();
//   emailInputValidation();
//   birthdateInputValidation();
//   nbrOfTournamentInputValidation();
//   AcceptanceCheckboxInputValidation();
// });

submitBtn.addEventListener("click", () => {
  firstNameInputValidation();
  lastNameInputValidation();
  emailInputValidation();
  birthdateInputValidation();
  nbrOfTournamentInputValidation();
  AcceptanceCheckboxInputValidation();
});

//
// validation functions
//

// first name
function firstNameInputValidation() {
  if (
    firstName.value.length < 2 ||
    firstName.value === "" ||
    !/[a-zA-Z0-9]+/.test(firstName.value) // regex
  ) {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  } else {
    firstNameError.innerHTML = "";
    return true;
  }
}

// last name
function lastNameInputValidation() {
  if (
    lastName.value.length < 2 ||
    lastName.value === "" ||
    !/[a-zA-Z0-9]+/.test(lastName.value) // regex
  ) {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  lastNameError.innerHTML = "";
  return true;
}

// email
function emailInputValidation() {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email.value
    ) // Regex to match a valid email address. ex: test@test.com
  ) {
    emailError.innerHTML = "Veuillez entrer un E-mail valide.";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

// birthdate  !!! NON WORKING PROPERLY !!!
function birthdateInputValidation() {
  if (
    !/(?:(09|04|06|11)(\/|-|\.)(0[1-9]|[12]\d|30)(\/|-|\.)((?:19|20)\d\d))|(?:(01|03|05|07|08|10|12)(\/|-|\.)(0[1-9]|[12]\d|3[01])(\/|-|\.)((?:19|20)\d\d))|(?:02(\/|-|\.)(?:(?:(0[1-9]|1\d|2[0-8])(\/|-|\.)((?:19|20)\d\d))|(?:(29)(\/|-|\.)((?:(?:19|20)(?:04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96))|2000))))/.test(
      birthdate.value
    ) // regex mm/dd/yyyy
  ) {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
  birthdateError.innerHTML = "";
  return true;
}

// tournaments
function nbrOfTournamentInputValidation() {
  if (NbrOfTournament.value === "") {
    NbrOfTournamentError.innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez déjà participé.";
    return false;
  }
  NbrOfTournamentError.innerHTML = "";
  return true;
}

// terms acceptance !!! NON WORKING PROPERLY !!!
function AcceptanceCheckboxInputValidation() {
  if (acceptanceCheckbox.checked === false) {
    acceptanceCheckboxError.innerHTML =
      "Vous devez accepter les termes et conditions.";
    return false;
  }
  acceptanceCheckboxError.innerHTML = "";
  return true;
}

// -------------------------------------------------------------------

//
// Succes ! FormValidation Message !!! NON WORKING PROPERLY !!!
//

// let noErrorInForm

// submitBtn.addEventListener("click", () => {
//   if (
//     firstNameInputValidation &&
//     lastNameInputValidation &&
//     emailInputValidation &&
//     birthdateInputValidation &&
//     nbrOfTournamentInputValidation &&
//     AcceptanceCheckboxInputValidation
//   ) {
//     noErrorInForm = true;
//   }
//   noErrorInForm = false;
// });

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
