let panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
	panel.addEventListener("mouseover", () => {
		removeClasslist();
		panel.classList.add("active");
	});
});
function removeClasslist() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
