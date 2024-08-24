var submit = document.querySelector(".btn");
var inp = document.querySelector(".input-field");
var err = document.querySelector(".error-msg");
var errIcon = document.querySelector(".error");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click", function () {
  if (inp.value.length === 0 || !inp.value.match(emailValidation)) {
    err.style.display = "inline";
    errIcon.style.display = "inline";
    err.style.color = "red";
    err.style.textContent = "Please provide a valid email address";
  } else {
    err.style.display = "inline";
    err.style.color = "green";
    errIcon.style.display = "none";
    err.textContent = "Thank you for subscribing to our newsletter!";
  }
});

//
// const sendBtn = document.querySelector(".btn");
// const errorMsg = document.querySelector(".error-msg");
// const errorIcon = document.querySelector(".error");
// const inputEl = document.querySelector(".input-field");
// const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// sendBtn.addEventListener("click", function () {
//   if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
//     errorMsg.style.display = "inline";
//     errorIcon.style.display = "inline";
//     errorMsg.style.color = "red";
//     errorMsg.textContent = "Please provide a valid email address";
//   } else {
//     errorMsg.style.display = "inline";
//     errorMsg.style.color = "green";
//     errorIcon.style.display = "none";
//     errorMsg.textContent = "Thank you for subscribing to our newsletter!";
//   }
// });
//
