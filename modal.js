// responsive
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
const formData = document.querySelectorAll(".formData");

const firstNameError = document.getElementById("firstName-error-message");
const lastNameError = document.getElementById("lastName-error-message");
const emailError = document.getElementById("email-error-message");
const birthdateError = document.getElementById("birthdate-error-message");
const NbrOfTournamentError = document.getElementById("quantity-error-message");
const CitiesError = document.getElementById("cities-error-message");
const acceptanceCheckboxError = document.getElementById(
  "checkbox1-error-message"
);

const submitBtn = document.querySelector(".btn-submit");
const validationMessage = document.getElementById("validation-message");

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

// verify input data when the submit btn is clicked (and when DOM is finished loading)
document.addEventListener("DOMContentLoaded", () => {
  submitBtn.addEventListener("click", () => {
    firstNameInputValidation();
    lastNameInputValidation();
    emailInputValidation();
    birthdateInputValidation();
    nbrOfTournamentInputValidation();
    AcceptanceCheckboxInputValidation();
  });
});

// FormValidation Message launcher
submitBtn.addEventListener("click", () => {
  if (
    firstNameInputValidation &&
    lastNameInputValidation &&
    emailInputValidation &&
    birthdateInputValidation &&
    nbrOfTournamentInputValidation &&
    AcceptanceCheckboxInputValidation
  ) {
    e.preventDefault();
    hideForm();
    validationMessage.style.display = "block";
  }
});

// hide form content function
function hideForm() {
  formData.forEach((element) => {
    element.style.display = "none";
  });
  submitBtn.style.display = "none";
}

// validation functions -------------------------------------------------------

// first name
function firstNameInputValidation() {
  const firstName = document.getElementById("first");
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
  const lastName = document.getElementById("last");
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
  if (document.getElementById("birthdate").value == "") {
    birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
    return false;
  }
  birthdateError.innerHTML = "";
  return true;
}

// tournaments
function nbrOfTournamentInputValidation() {
  if (document.getElementById("quantity").value === "") {
    NbrOfTournamentError.innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez déjà participé.";
    return false;
  }
  NbrOfTournamentError.innerHTML = "";
  return true;
}

// terms acceptance
function AcceptanceCheckboxInputValidation() {
  if (document.getElementById("checkbox1").checked === false) {
    acceptanceCheckboxError.innerHTML =
      "Vous devez accepter les termes et conditions.";
    return false;
  }
  acceptanceCheckboxError.innerHTML = "";
  return true;
}
