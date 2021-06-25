// responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements --------------------------------------------------------
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById("form");

// Events --------------------------------------------------------------

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
    ErrorInputBorder(firstName);
    firstNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  ValidInputBorder(firstName);
  firstNameError.innerHTML = "";
  return true;
}

// last name
function lastNameInputValidation() {
  const lastName = document.getElementById("last");
  const lastNameError = document.getElementById("lastName-error-message");
  if (lastName.value.length < 2 || lastName.value === "") {
    ErrorInputBorder(lastName);
    lastNameError.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  ValidInputBorder(lastName);
  lastNameError.innerHTML = "";
  return true;
}

// email
function emailInputValidation() {
  const email = document.getElementById("email");
  const emailError = document.getElementById("email-error-message");
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email.value
    ) // Regex to match a valid email address. ex: test@test.com
  ) {
    ErrorInputBorder(email);
    emailError.innerHTML = "Veuillez entrer un E-mail valide.";
    return false;
  }
  ValidInputBorder(email);
  emailError.innerHTML = "";
  return true;
}

// birthdate
function birthdateInputValidation() {
  const birthdate = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdate-error-message");
  if (birthdate.value == "") {
    ErrorInputBorder(birthdate);
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
  ValidInputBorder(birthdate);
  birthdateError.innerHTML = "";
  return true;
}

// tournaments
function nbrOfTournamentInputValidation() {
  const nbrofTournament = document.getElementById("quantity");
  const nbrOfTournamentError = document.getElementById(
    "quantity-error-message"
  );
  if (isNaN(nbrofTournament.value) || nbrofTournament.value === "") {
    ErrorInputBorder(nbrofTournament);
    nbrOfTournamentError.innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez participé.";
    return false;
  }
  ValidInputBorder(nbrofTournament);
  nbrOfTournamentError.innerHTML = "";
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

// error border functions -------------------------------------------------------

// Add a red border to a non valid input
function ErrorInputBorder(inputID) {
  inputID.style.borderColor = "#e54858";
}

// remove border from valid input
function ValidInputBorder(inputID) {
  inputID.style.borderColor = "#ffffff";
}
