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

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData input");

const submitBtn = document.querySelector(".btn-submit");

//
// Regex Patterns
//
let textPattern = /[a-zA-Z0-9]+/;
let emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let birthdatePattern =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

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

function dataErrorVisibility() {}

//
// form validation
//

function isTextValid(text) {
  if (text.length < 2) {
  }
  if (text === "") {
  }
  if (!regex.textPattern(text)) {
  }
}

function isEmailValid(email) {}

function isBirthdateValid(birthdate) {}

function isNbrOfTournamentValid(nbrOfTournament) {}

function isCitiesValid(cities) {}

function isAcceptanceCheckboxChecked(acceptanceCheckbox) {}

//
// Succes Modal Launch and Close
//

// function getCodeValidation() {
//   return document.getElementById("code-validation");
// }

// document.getElementById("code").addEventListener("input", function (e) {
//   if (/^CODE-/.test(e.target.value)) {
//     getCodeValidation().innerText = "Code valide";
//   } else {
//     getCodeValidation().innerText = "Code invalide";
//   }
// });

//
// form validation test 2 -
//

// if (formData.test()) {
//   formData.setCustomValidity("");
// } else {
//   formData.setCustomValidity(node.dataset.error);
// }

//
// form validation test 1 - n0t working
//

// submitBtn.addEventListener("click", () => {
//   formData.setCustomValidity("");
// });

// find data error in form
// let errorItems = formData.find(":invalid");

// // iterate through invalid fields list and check each one if there is a pattern mismatch.
// errorItems.each(function (index, node) {
//   let item = $(this);
//   let message =
//     (node.validity.patternMismatch
//       ? node.dataset.patternError
//       : node.dataset.error) || "Invalid value.";
//   // custom validity message
//   item.get(0).setCustomValidity(message);
// });
