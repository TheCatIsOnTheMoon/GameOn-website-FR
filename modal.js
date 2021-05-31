function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements -------------------------------------------

// modal
const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelectorAll('.close');
const formData = document.querySelectorAll('.formData');

// input field
const allInputs = document.querySelectorAll('input');
const allErrorMessages = document.querySelectorAll('.error-message');

const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const locationRadioBtn = document.querySelectorAll('.checkbox-input');
const readAndAcceptCheckbox = document.getElementById('checkbox1');

// submit
const submitBtn = document.querySelector('.btn-submit');



// MODAL --------------------------------------------------

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// Close modal event
modalClose.forEach((btn) => btn.addEventListener('click', closeModal));

// launch modal form
function launchModal() {
	modalBg.style.display = 'block';
}

// close modal form
function closeModal() {
	modalBg.style.display = "none";
  }

// 


// ERROR MESSAGES --------------------------------------------

// TODO error message for first name
firstNameInput.addEventListener('invalid', () => {
	  if(firstNameInput.value === '') {
	    document.getElementById('firstName-error-message').innerHTML ='Veuillez entrer votre prénom.';
	  } else {
	    document.getElementById('firstName-error-message').innerHTML ='Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
	  }
	});

// TODO error message for last name
	lastNameInput.addEventListener('invalid', () => {
	  if(lastNameInput.value === '') {
	    document.getElementById('lastName-error-message').innerHTML ='Veuillez entrer votre nom.';
	  } else {
	    document.getElementById('lastName-error-message').innerHTML ='Veuillez entrer 2 caractères ou plus pour le champ du nom.';
	  }
	});

// TODO error message for email


// TODO error message for birthdate


// TODO error message for quantity 


// TODO error message for required radio btn
submitBtn.addEventListener('click', function () {
	if (locationRadioBtn != "checked") {
		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
	} if (locationRadioBtn == "checked") {
		document.getElementById('radio-error-message').innerHTML = '';
	}
	})

// TODO error message for readAndAccept checkbox


// VALID FORM

//   TODO submit btn becomes red when form is complete and valid, stay gry if not




// NOTES - TESTS - OTHER

// allInputs.addEventListener('valid', () => {
// 	allErrorMessages.innerHTML ='';
//   });

// IDEE 1

// error message for first name
// submitBtn.addEventListener('click', function () {
// 	if (firstNameInput != "valid" && firstNameInput.value === '') {
// 		document.getElementById('firstName-error-message').innerHTML = 'Veuillez entrer votre prénom.';
// 	} if (firstNameInput != "valid" && firstNameInput.value !== '') {
// 		document.getElementById('firstName-error-message').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
// 	} else {
// 		document.getElementById('firstName-error-message').innerHTML = '';
// 	}
// })

// error message for last name
// submitBtn.addEventListener('click', function () {
// 	if (lastNameInput != "valid" && lastNameInput.value === '') {
// 		document.getElementById('lastName-error-message').innerHTML = 'Veuillez entrer votre nom.';
// 	} if (lastNameInput != "valid" && lastNameInput.value !== '') {
// 		document.getElementById('lastName-error-message').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
// 	} else {
// 		document.getElementById('lastName-error-message').innerHTML = '';
// 	}
// })

// error message for email
// submitBtn.addEventListener('click', function () {
// 	if (emailInput != "valid" && emailInput.value === '') {
// 		document.getElementById('email-error-message').innerHTML = 'Veuillez entrer votre E-mail.';
// 	} if (emailInput != "valid" && emailInput.value !== '') {
// 		document.getElementById('email-error-message').innerHTML = 'Veuillez entrer un E-mail valide.';
// 	} else {
// 		document.getElementById('email-error-message').innerHTML = '';
// 	}
// })

// error message for required radio btn
// submitBtn.addEventListener('click', function () {
// 	if (locationRadioBtn != "checked") {
// 		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
// 	} if (locationRadioBtn == "checked") {
// 		document.getElementById('radio-error-message').innerHTML = '';
// 	}
// })

// IDEE 2

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



// error message for last name

// lastNameInput.addEventListener('input', () => {
// 	lastNameInput.setCustomValidity('');
// 	lastNameInput.checkValidity();
// });

// inputListener (lastNameInput);

// lastNameInput.addEventListener('invalid', () => {
//   if(lastNameInput.value === '') {
//     document.getElementById('lastName-error-message').innerHTML ='Veuillez entrer votre nom.';
//   } else {
//     document.getElementById('lastName-error-message').innerHTML ='Veuillez entrer 2 caractères ou plus pour le champ du nom.';
//   }
// });

// required radio button test 1

// locationRadioBtn.onInvalid = function () {
// 	this.setCustomValidity('Vous devez choisir une option.')
// }

// required radio button test 2
// function valid() {
// 	if (locationRadioBtn.not.checked) {
// 		alert('Vous devez choisir une option.');
// }
// }

// required radio button test 3
// locationRadioBtn.addEventListener('invalid', function (event) {
// 	if (event.target.validity.valueMissing) {
// 	  event.target.setCustomValidity('Vous devez choisir une option.');
// 	}
//   })
  
//   submitBtn.addEventListener('change', function (event) {
// 	event.target.setCustomValidity('');
//   })

// required radio button test 4
// locationRadioBtn.addEventListener('input', () => {
// 	locationRadioBtn.setCustomValidity('');
// 	locationRadioBtn.checkValidity();
//   });
  
//   locationRadioBtn.addEventListener('invalid', () => {
// 	locationRadioBtn.setCustomValidity('Vous devez choisir une option.');
// 	});

// required radio button test 5

// submitBtn.addEventListener('click', function (event) {
// 	if (locationRadioBtn != "checked") {
// 		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
// 	};
// })

// required radio button test 6

// submitBtn.addEventListener('click', function (event) {
// 	if (locationRadioBtn.target.validity.valueMissing) {
// 		err.message= 'Vous devez choisir une option.';
// 	};
// })
