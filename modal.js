// responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements ----------------------------------------------------------------
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("form");

// Events ---------------------------------------------------------------

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
document.getElementById("close").addEventListener("click", function () {
  modalbg.style.display = "none";
});

// initialize variables to stock verification results
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isBirthdateValid = false;
let isNbrOfTournamentValid = false;
let isAcceptanceCheckboxValid = false;

// verify input data when the submit btn is clicked (and when DOM is finished loading)
// stock the verification into variables
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-submit").addEventListener("click", () => {
    isFirstNameValid = firstNameInputValidation();
    isLastNameValid = lastNameInputValidation();
    isEmailValid = emailInputValidation();
    isBirthdateValid = birthdateInputValidation();
    isNbrOfTournamentValid = nbrOfTournamentInputValidation();
    isAcceptanceCheckboxValid = AcceptanceCheckboxInputValidation();
  });
});

// function to lauch the succes message and hide the form
// with condition that all the variables are true and prevent default form submit action
function LaunchSuccesMessage(event) {
  if (
    isFirstNameValid === true &&
    isLastNameValid === true &&
    isEmailValid === true &&
    isBirthdateValid === true &&
    isNbrOfTournamentValid === true &&
    isAcceptanceCheckboxValid === true
  ) {
    event.preventDefault();
    form.style.display = "none";
    return (document.getElementById("validation-message").style.display =
      "flex");
  }
}

// attach event listener to lauch the succes message (needs to be after the related function)
form.addEventListener("submit", LaunchSuccesMessage, true);

// close modal with the succes message
document
  .getElementById("close-btn-validation-message")
  .addEventListener("click", function () {
    modalbg.style.display = "none";
  });

// validation functions -------------------------------------------------------

// first name
function firstNameInputValidation() {
  const firstName = document.getElementById("first");
  const firstNameError = document.getElementById("firstName-error-message");
  if (firstName.value.length < 2 || firstName.value === "") {
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  firstNameError.innerHTML = "";
  return true;
}

// last name
function lastNameInputValidation() {
  const lastName = document.getElementById("last");
  const lastNameError = document.getElementById("lastName-error-message");
  if (lastName.value.length < 2 || lastName.value === "") {
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  lastNameError.innerHTML = "";
  return true;
}

// email
function emailInputValidation() {
  const emailError = document.getElementById("email-error-message");
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      document.getElementById("email").value
    ) // Regex to match a valid email address. ex: test@test.com
  ) {
    emailError.innerHTML = "Veuillez entrer un E-mail valide.";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

// birthdate
function birthdateInputValidation() {
  const birthdateError = document.getElementById("birthdate-error-message");
  if (document.getElementById("birthdate").value == "") {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
  birthdateError.innerHTML = "";
  return true;
}

// tournaments
function nbrOfTournamentInputValidation() {
  const NbrOfTournamentError = document.getElementById(
    "quantity-error-message"
  );
  // alert(document.getElementById("quantity").value);
  if (
    isNaN(document.getElementById("quantity").value) ||
    document.getElementById("quantity").value === ""
  ) {
    NbrOfTournamentError.innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez déjà participé.";
    return false;
  }
  NbrOfTournamentError.innerHTML = "";
  return true;
}

// terms acceptance
function AcceptanceCheckboxInputValidation() {
  const acceptanceCheckboxError = document.getElementById(
    "checkbox1-error-message"
  );
  if (document.getElementById("checkbox1").checked === false) {
    acceptanceCheckboxError.innerHTML =
      "Vous devez accepter les termes et conditions.";
    return false;
  }
  acceptanceCheckboxError.innerHTML = "";
  return true;
}
