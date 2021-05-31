function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// DOM Elements -------------------------------------------

const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const modalClose = document.querySelectorAll('.close');
const formData = document.querySelectorAll('.formData');

const locationRadioBtn = document.querySelectorAll('.checkbox-input');

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


// FORM VALIDITY --------------------------------------------


nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});

submitBtn.addEventListener('click', function (event) {
	if (locationRadioBtn != "checked") {
		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
	};
})

// TODO error message for required radio btn : 'Vous devez choisir une option.'

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

submitBtn.addEventListener('click', function (event) {
	if (locationRadioBtn != "checked") {
		document.getElementById('radio-error-message').innerHTML = 'Vous devez choisir une option.';
	};
})

// required radio button test 6

// submitBtn.addEventListener('click', function (event) {
// 	if (locationRadioBtn.target.validity.valueMissing) {
// 		err.message= 'Vous devez choisir une option.';
// 	};
// })


//   TODO submit btn becomes red when form is complete and valid, stay gry if not
