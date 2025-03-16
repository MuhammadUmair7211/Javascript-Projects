let accordionParas = document.querySelectorAll(".accordion");

accordionParas.forEach((paras) => {
	let plusButton = paras.querySelector(".fa-plus-square");
	plusButton.addEventListener("click", function () {
		accordionParas.forEach((para) => {
			para.classList.remove("show-para");
		});
		plusButton.classList.remove("fa-minus-square");
		plusButton.classList.add("fa-plus-square");

		let parent = plusButton.closest(".accordion");
		let para = parent.querySelector(".accordion-para");
		para.classList.toggle("show-para");

		if (para.classList.contains("show-para")) {
			plusButton.classList.add("fa-minus-square");
			plusButton.classList.remove("fa-plus-square");
		} else {
			plusButton.classList.remove("fa-minus-square");
			plusButton.classList.add("fa-plus-square");
		}
	});
});
