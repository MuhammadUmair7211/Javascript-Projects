let historyHeading = document.querySelector(".history");
let headings = document.querySelectorAll(".history-heading");
let visionHeading = document.querySelector(".vision");
let goalsHeading = document.querySelector(".goals");
let paras = document.querySelectorAll(".para");
let historyPara = document.querySelector(".history-para");
let visionPara = document.querySelector(".vision-para");
let goalPara = document.querySelector(".goal-para");

historyHeading.addEventListener("click", () => {
	headings.forEach((heading) => heading.classList.remove("select"));
	paras.forEach((para) => {
		para.classList.remove("active");
	});
	historyPara.classList.add("active");
	if (historyPara.classList.contains("active")) {
		historyHeading.classList.add("select");
	}
});
visionHeading.addEventListener("click", () => {
	headings.forEach((heading) => heading.classList.remove("select"));
	paras.forEach((para) => {
		para.classList.remove("active");
	});
	visionPara.classList.add("active");
	if (visionPara.classList.contains("active")) {
		visionHeading.classList.add("select");
	}
});
goalsHeading.addEventListener("click", () => {
	headings.forEach((heading) => heading.classList.remove("select"));
	paras.forEach((para) => {
		para.classList.remove("active");
	});
	goalPara.classList.add("active");
	if (goalPara.classList.contains("active")) {
		goalsHeading.classList.add("select");
	}
});
