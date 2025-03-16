let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let nameInput = document.getElementById("name-input");
  if (nameInput.value == 0) {
    nameError.innerHTML = "*full name is required";
    nameError.style.color = "red";
  } else if (!nameInput.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "*please write full name";
    nameError.style.color = "red";
  } else {
    nameError.style.color = "green";
    nameError.innerHTML = "Valid";
  }
}

function validatePhone() {
  let phoneInput = document.getElementById("phone-input");
  if (phoneInput.value.length == 0) {
    phoneError.innerHTML = "*phone number is required";
    phoneError.style.color = "red";
  } else if (!phoneInput.value.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "*phone number should be 11 digits";
    phoneError.style.color = "red";
  } else {
    phoneError.style.color = "green";
    phoneError.innerHTML = "Valid";
  }
}

function validateEmail() {
  let emailInput = document.getElementById("email-input");
  if (!emailInput.value.match(/^^[^@]+@[^@]+\.[^@]+$/)) {
    emailError.innerHTML = "*email is required";
    emailError.style.color = "red";
  } else {
    emailError.style.color = "green";
    emailError.innerHTML = "Valid";
  }
}

function validateMessage() {
  let messageInput = document.getElementById("message-input");
  console.log(messageInput.value);
  let required = 100;
  let left = required - messageInput.value.length;
  if (left >= 0) {
    messageError.innerHTML = left + " " + "more characters required";
  } else {
    messageInput.setAttribute("disabled", true);
  }
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    submitError.innerHTML = "*Error form Submission!";
  }
}
