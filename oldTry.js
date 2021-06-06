// PLAN

// intro

// 1. DOM Elements -------------------------------------------

// 1.1 - modal
// 1.2 - input fields
// 1.3 - submit

// 2. MODAL --------------------------------------------------

// 2.1 - launch modal event
// 2.2 - Close modal event
// 2.3 - launch modal form
// 2.4 - close modal form

// 3. ERROR MESSAGES --------------------------------------------

// 3.1 - Event Listeners & Global stuffs
// 3.2 - validations functions

// 3.2.1 - first name
// 3.2.2 - last name
// 3.2.3 - email
// 3.2.4 - birthdate
// 3.2.5 - quantity
// 3.2.6 - radio btn
// 3.2.7 - error message for readAndAccept checkbox

// -----------------------------------------------------------------------------

// START

// Intro
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// 1. DOM Elements -------------------------------------------

// 1.1 - modal
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// 1.2 - input field
const allInputs = document.querySelectorAll("input");
const allErrorMessages = document.querySelectorAll(".error-message");

const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationRadioBtn = document.querySelectorAll(".checkbox-input");
const readAndAcceptCheckbox = document.getElementById("checkbox1");

// 1.3 - submit
const submitBtn = document.querySelector(".btn-submit");

// 2. MODAL --------------------------------------------------

// 2.1 - launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// 2.2 - Close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// 2.3 - launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// 2.4 - close modal form
function closeModal() {
  modalBg.style.display = "none";
}

//

// 3. ERROR MESSAGES --------------------------------------------

// 3.1 - Event Listeners & Global stuffs

firstNameInput.addEventListener("blur", () => {
  firstNameInputValidation();
});
lastNameInput.addEventListener("blur", () => {
  lastNameInputValidation();
});
emailInput.addEventListener("blur", () => {
  emailInputValidation();
});
birthdateInput.addEventListener("blur", () => {
  birthdateInputValidation();
});
quantityInput.addEventListener("blur", () => {
  quantityInputValidation();
});

submitBtn.addEventListener("click", () => {
  firstNameInputValidation();
  lastNameInputValidation();
  emailInputValidation();
  birthdateInputValidation();
  quantityInputValidation();
  radioInputValidation();
});

// allInputs.addEventListener('valid', () => {
// 	allErrorMessages.innerHTML ='';
//   });

// 3.2 - validations functions

// TODO 3.2.1 - first name
function firstNameInputValidation() {
  if (firstNameInput.validity.valueMissing) {
    document.getElementById("firstName-error-message").innerHTML =
      "Veuillez entrer votre prénom.";
  } else if (
    firstNameInput.validity.tooShort ||
    firstNameInput.validity.tooLong
  ) {
    document.getElementById("firstName-error-message").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else if (firstNameInput.validity.valid) {
    document.getElementById("firstName-error-message").innerHTML = "";
  }
}

// function inputListener (inputField) {
// 	inputField.addEventListener('input', () => {
// 		inputField.setCustomValidity('');
// 		inputField.checkValidity();
// 	});
// }

// error message for first name
// firstNameInput.addEventListener('input', () => {
// 	firstNameInput.setCustomValidity('');
// 	firstNameInput.checkValidity();
// });

// inputListener (firstNameInput);

// firstNameInput.addEventListener('invalid', () => {
//   if(firstNameInput.value === '') {
//     document.getElementById('firstName-error-message').innerHTML ='Veuillez entrer votre prénom.';
//   } else {
//     document.getElementById('firstName-error-message').innerHTML ='Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
//   }
// });

// submitBtn.addEventListener('click', function () {
// 	if (firstNameInput != "valid" && firstNameInput.value === '') {
// 		document.getElementById('firstName-error-message').innerHTML = 'Veuillez entrer votre prénom.';
// 	} if (firstNameInput != "valid" && firstNameInput.value !== '') {
// 		document.getElementById('firstName-error-message').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
// 	} else {
// 		document.getElementById('firstName-error-message').innerHTML = '';
// 	}
// })

// TODO 3.2.2 - last name
function lastNameInputValidation() {
  if (lastNameInput.validity.valueMissing) {
    document.getElementById("lastName-error-message").innerHTML =
      "Veuillez entrer votre nom.";
  } else if (
    lastNameInput.validity.tooShort ||
    lastNameInput.validity.tooLong
  ) {
    document.getElementById("lastName-error-message").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else if (lastNameInput.validity.valid) {
    document.getElementById("lastName-error-message").innerHTML = "";
  }
}

// TODO 3.2.3 - email
function emailInputValidation() {
  if (emailInput.validity.valueMissing) {
    document.getElementById("email-error-message").innerHTML =
      "Veuillez entrer votre E-mail.";
  } else if (emailInput.validity.typeMismatch) {
    document.getElementById("email-error-message").innerHTML =
      "Veuillez entrer un E-mail valide.";
  } else if (emailInput.validity.valid) {
    document.getElementById("email-error-message").innerHTML = "";
  }
}

// TODO 3.2.4 - birthdate - NOT WORKING
function birthdateInputValidation() {
  if (birthdateInput.validity.valid) {
    document.getElementById("birthdate-error-message").innerHTML = "";
  } else {
    document.getElementById("birthdate-error-message").innerHTML =
      "Veuillez entrer votre date de naissance.";
  }
}

// TODO 3.2.5 - quantity
function quantityInputValidation() {
  if (quantityInput.validity.valid) {
    document.getElementById("quantity-error-message").innerHTML = "";
  } else if (quantityInput.validity.valueMissing) {
    document.getElementById("quantity-error-message").innerHTML =
      "Veuillez indiquer à combien de tournois GameOn vous avez déjà participé.";
  }
}

// TODO 3.2.6 - radio btn - NOT WORKING
function radioInputValidation() {
  if (locationRadioBtn.not.checked) {
    document.getElementById("radio-error-message").innerHTML =
      "Vous devez choisir une option.";
  } else if (locationRadioBtn.checked) {
    document.getElementById("radio-error-message").innerHTML = "";
  }
}

// submitBtn.addEventListener("click", function (event) {
//   if (locationRadioBtn.validity.valid) {
//     document.getElementById("radio-error-message").innerHTML = "";
//   } else if (locationRadioBtn.validity.valueMissing) {
//     document.getElementById("radio-error-message").innerHTML =
//       "Vous devez choisir une option.";
//   }
// });

// submitBtn.addEventListener('click', function () {
// 	if (locationRadioBtn != "checked") {
// 		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
// 	} if (locationRadioBtn == "checked") {
// 		document.getElementById('radio-error-message').innerHTML = '';
// 	}
// })

// locationRadioBtn.onInvalid = function () {
// 	this.setCustomValidity('Vous devez choisir une option.')
// }

// function valid() {
// 	if (locationRadioBtn.not.checked) {
// 		alert('Vous devez choisir une option.');
// }
// }

// locationRadioBtn.addEventListener('invalid', function (event) {
// 	if (event.target.validity.valueMissing) {
// 	  event.target.setCustomValidity('Vous devez choisir une option.');
// 	}
//   })

// locationRadioBtn.addEventListener('input', () => {
// 	locationRadioBtn.setCustomValidity('');
// 	locationRadioBtn.checkValidity();
//   });

//   locationRadioBtn.addEventListener('invalid', () => {
// 	locationRadioBtn.setCustomValidity('Vous devez choisir une option.');
// 	});

// submitBtn.addEventListener('click', function (event) {
// 	if (locationRadioBtn != "checked") {
// 		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
// 	};
// })

// submitBtn.addEventListener('click', function (event) {
// 	if (locationRadioBtn.target.validity.valueMissing) {
// 		err.message= 'Vous devez choisir une option.';
// 	};
// })

// TODO 3.2.7 - error message for readAndAccept checkbox
