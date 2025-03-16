let checkboxLists = document.querySelectorAll(".checkbox");
let inputFields = document.querySelectorAll(".goal-input");
let errorMessage = document.querySelector(".error-label");
checkboxLists.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    let allFieldsValue = [...inputFields].every((input) => {
      return input.value;
    });
    if (allFieldsValue) {
      checkbox.parentElement.classList.toggle("completed");
    } else {
      errorMessage.style.display = "block";
    }
  });
});
inputFields.forEach((input) => {
  input.addEventListener("focus", function () {
    errorMessage.style.display = "none";
  });
});
