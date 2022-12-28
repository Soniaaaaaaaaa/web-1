let input = document.querySelector("input");
if (input.type === email) {
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");
  let checkEmail = document.querySelector("#checkEmail");
  let checkNumber = document.querySelector("#checkNumber");
  let text = document.querySelector("textarea");
  let submit = document.querySelector(".form-btn");
  let error1 = document.querySelector("#error1");
  let error2 = document.querySelector("#error2");
  let body = document.querySelector("body");
  submit.style.cursor = "not-allowed";

  function checkMail(event) {
    event.preventDefault();
    let mask = /^[\w-\.]+@[\w-]+\.[a-z]/;
    let valid = mask.test(email.value);
    if (valid) {
      error1.innerHTML = "Email is correct!";
      submit.removeAttribute("disabled");
      submit.style.cursor = "pointer";
    } else if (email.value == "") {
      error1.innerHTML = "Enter your email!";
    } else {
      error1.innerHTML = "Check your email!";
    }
  }

  function checkNumb(event) {
    event.preventDefault();
    let mask = /^\+380\d{9}/;
    let valid = mask.test(number.value);
    let notValid = "+380000000000";
    if (number.value == notValid) {
      error2.innerHTML = "Number can't consist only of 0!";
    } else if (number.value == "") {
      error2.innerHTML = "Enter your number!";
    } else if (valid) {
      error2.innerHTML = "Number is correct!";
      submit.removeAttribute("disabled");
      submit.style.cursor = "pointer";
    } else {
      error2.innerHTML = "Check your number!";
    }
  }

  function submitForm(event) {
    event.preventDefault();
    text.value = "";
    email.value = "";
    number.value = "";
    alert("Form was sent! Thanks!");
  }

  function checkAll(event) {
    event.preventDefault();
    let mask1 = /^[\w-\.]+@[\w-]+\.[a-z]\d{2-10}/;
    let valid1 = mask1.test(email.value);
    let mask2 = /^\+380\d{9}/;
    let valid2 = mask2.test(number.value);
    if (
      text.value != "" &&
      email.value != "" &&
      number.value != "" &&
      valid1 &&
      valid2 &&
      number.value != "+380000000000"
    ) {
      submit.removeAttribute("disabled");
      submit.style.cursor = "pointer";
    } else {
      submit.setAttribute("disabled", "");
      submit.style.cursor = "not-allowed";
    }
  }

  checkEmail.addEventListener("click", checkMail);
  checkNumber.addEventListener("click", checkNumb);
  submit.addEventListener("click", submitForm);
  body.addEventListener("mouseover", checkAll);
}
