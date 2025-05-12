let gameBoxContainer = document.querySelector(".game-box-container");
let resetButton = document.querySelector(".reset-button");
let arr = new Array(9).fill(null);
let currentPlayer = "X";
let winnerSituation = document.querySelector(".wins-situation");

arr.forEach((_, index) => {
	const div = document.createElement("div");
	div.classList.add("box");
	div.dataset.index = index;
	gameBoxContainer.appendChild(div);
});
function checkWinner() {
	if (
		(arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
		(arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
		(arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
		(arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
		(arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
		(arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
		(arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
		(arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
	) {
		winnerSituation.textContent = `${currentPlayer} wins`;
		gameBoxContainer.style.pointerEvents = "none";
		return;
	}
	if (!arr.some((item) => item === null)) {
		winnerSituation.textContent = "It's a Draw";
		gameBoxContainer.style.pointerEvents = "none";
		return;
	}
}
gameBoxContainer.addEventListener("click", (event) => {
	if (
		event.target.classList.contains("box") &&
		event.target.textContent === ""
	) {
		const index = event.target.dataset.index;
		arr[index] = currentPlayer;
		event.target.textContent = currentPlayer;
		checkWinner();
		currentPlayer = currentPlayer === "X" ? "O" : "X";
	}
});

resetButton.addEventListener("click", () => {
	document.querySelectorAll(".box").forEach((box) => (box.textContent = ""));
	arr.fill(null);
	currentPlayer = "X";
	winnerSituation.textContent = "";
	gameBoxContainer.style.pointerEvents = "auto";
});
