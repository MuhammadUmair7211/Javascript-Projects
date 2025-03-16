let openModalButton = document.querySelector(".open-modal-btn");
let close = document.querySelector(".fa-xmark");
let modal = document.querySelector(".modal");
openModalButton.addEventListener("click", () => {
	modal.classList.add("active");
});
close.addEventListener("click", () => {
	modal.classList.remove("active");
});
