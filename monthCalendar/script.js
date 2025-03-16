let calendarBody = document.querySelector(".calendar-body");
let monthHeading = document.querySelector(".month-heading");
let currentDate = new Date();
let date = currentDate.toLocaleString("default", {
	month: "long",
	year: "numeric",
});
monthHeading.innerHTML = date;

function createCalendar(year, month) {
	let firstDay = new Date(year, month, 1).getDate();
	let lastDay = new Date(year, month + 1, 0).getDate();
}
createCalendar(currentDate.getFullYear(), currentDate.getMonth());
let arr = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31,
];

arr.map((date) => {
	let row = document.createElement("tr");
	row.innerHTML = `<td>${date}</td>`;
	calendarBody.appendChild(row);
});
