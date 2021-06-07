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
const formData = document.querySelectorAll(".formData");

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
// form validation
//

// find data error in form
let errorItems = formData.find(":invalid");

// iterate through invalid fields list and check each one if there is a pattern mismatch.
errorItems.each(function (index, node) {
  let item = $(this);
  let message =
    (node.validity.patternMismatch
      ? node.dataset.patternError
      : node.dataset.error) || "Invalid value.";
  // custom validity message
  item.get(0).setCustomValidity(message);
});
