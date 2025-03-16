let sideBar = document.querySelector(".side-bar");
let closeButton = document.querySelector(".close");
let openBar = document.querySelector(".bars");
openBar.addEventListener("click", () => {
	sideBar.classList.toggle("show-sidebar");
});
closeButton.addEventListener("click", () => {
	sideBar.classList.remove("show-sidebar");
});
