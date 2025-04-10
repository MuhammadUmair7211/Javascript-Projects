let addButton = document.getElementById("add-item");
let groceryList = document.querySelector(".grocery-list");
let alert = document.querySelector(".alert");
let groceryItem = document.querySelector(".grocery-item");
let deleteButton = document.querySelector(".fa-trash");
let inputElement = document.querySelector("#grocery");
let clearAllButton = document.querySelector(".clear-all-button");
let flag = false;
clearAllButton.addEventListener("click", (e) => {
	e.preventDefault();
	groceryList.innerHTML = "";
	alert.style.display = "block";
	clearAllButton.style.display = "none";
	alert.innerHTML = "All items deleted from the list";
	alert.classList.add("error");
	setTimeout(() => {
		alert.style.display = "none";
		alert.classList.remove("error");
	}, 1500);
	saveToLocalStorage();
});

groceryList.addEventListener("click", (e) => {
	let groceryItem = e.target.closest(".grocery-item");
	if (e.target.classList.contains("fa-pen-to-square")) {
		inputElement.value = groceryItem.textContent.trim();
		addButton.textContent = "Update Item";
		groceryItem.remove();
		flag = true;
	} else if (e.target.classList.contains("fa-trash")) {
		groceryItem.remove();
		alert.style.display = "block";
		alert.innerHTML = "Item deleted from the list";
		alert.classList.add("error");
		setTimeout(() => {
			alert.style.display = "none";
			alert.classList.remove("error");
		}, 1500);
	}
	saveToLocalStorage();
});
addButton.addEventListener("click", (e) => {
	let inputElement = document.querySelector("#grocery");
	let inputField = inputElement.value;
	e.preventDefault();
	if (inputField === "") {
		alert.style.display = "block";
		alert.innerHTML = "Please enter a grocery item.";
		alert.classList.add("error");
		clearAllButton.style.display = "none";
		setTimeout(() => {
			alert.style.display = "none";
			alert.classList.remove("error");
		}, 1500);
		return;
	} else if (!flag) {
		clearAllButton.style.display = "block";
		alert.style.display = "block";
		alert.innerHTML = "Item added to the list";
		alert.classList.add("success");
		addButton.innerHTML = "Add Item";
		setTimeout(() => {
			alert.style.display = "none";
			alert.classList.remove("success");
		}, 1500);
		let list = document.createElement("li");
		list.classList.add("grocery-item");
		list.innerHTML = `${inputField}<div class="edit-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>`;
		groceryList.appendChild(list);
		inputElement.value = "";
		saveToLocalStorage();
	} else {
		alert.style.display = "block";
		alert.innerHTML = "Value changed";
		alert.classList.add("success");
		addButton.innerHTML = "Add Item";
		flag = false;
		setTimeout(() => {
			alert.style.display = "none";
			alert.classList.remove("success");
		}, 1500);
		let list = document.createElement("li");
		list.classList.add("grocery-item");
		list.innerHTML = `${inputElement.value}<div class="edit-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>`;
		groceryList.appendChild(list);
		inputElement.value = "";
		saveToLocalStorage();
	}
});

function saveToLocalStorage() {
	let groceryItems = [];
	let listItems = document.querySelectorAll(".grocery-item");
	listItems.forEach((item) => {
		groceryItems.push(item.textContent.trim());
	});
	localStorage.setItem("groceryList", JSON.stringify(groceryItems));
}

document.addEventListener("DOMContentLoaded", () => {
	let storedGroceryItems = getFromLocalStorage();
	if (storedGroceryItems.length === 0) {
		clearAllButton.style.display = "none";
	} else {
		clearAllButton.style.display = "block";
	}
	storedGroceryItems.forEach((item) => {
		let list = document.createElement("li");
		list.classList.add("grocery-item");
		list.innerHTML = `${item}<div class="edit-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>`;
		groceryList.appendChild(list);
	});
});
function getFromLocalStorage() {
	let groceryItems = localStorage.getItem("groceryList");
	if (groceryItems) {
		clearAllButton.style.display = "block";
		return JSON.parse(groceryItems);
	}
	return [];
}
