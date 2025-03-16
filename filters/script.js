import products from "./products.js";
let cardContainer = document.querySelector(".card-container");
let inputSearch = document.querySelector(".input-search");
let list = document.querySelector(".list");
products.forEach((product) => {
	let card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;

	cardContainer.appendChild(card);
});
inputSearch.addEventListener("input", (e) => {
	cardContainer.innerHTML = "";
	let filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(e.target.value.toLowerCase());
	});
	filteredProducts.forEach((product) => {
		let card = document.createElement("div");
		card.classList.add("card");
		card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;
		cardContainer.appendChild(card);
	});
});
list.addEventListener("click", (e) => {
	if (e.target.matches(".list")) return;
	cardContainer.innerHTML = "";
	if (e.target.innerHTML == "All") {
		products.forEach((product) => {
			let card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;

			cardContainer.appendChild(card);
		});
	} else if (e.target.innerHTML == "Ikea") {
		let filteredProducts = products.filter((product) => {
			return product.company.toLowerCase() === e.target.innerHTML.toLowerCase();
		});
		filteredProducts.forEach((product) => {
			let card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;
			cardContainer.appendChild(card);
		});
	} else if (e.target.innerHTML == "Marcos") {
		let filteredProducts = products.filter((product) => {
			return product.company.toLowerCase() === e.target.innerHTML.toLowerCase();
		});
		filteredProducts.forEach((product) => {
			let card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;
			cardContainer.appendChild(card);
		});
	} else if (e.target.innerHTML == "Caressa") {
		let filteredProducts = products.filter((product) => {
			return product.company.toLowerCase() === e.target.innerHTML.toLowerCase();
		});
		filteredProducts.forEach((product) => {
			let card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;
			cardContainer.appendChild(card);
		});
	} else if (e.target.innerHTML == "Liddy") {
		let filteredProducts = products.filter((product) => {
			return product.company.toLowerCase() === e.target.innerHTML.toLowerCase();
		});
		filteredProducts.forEach((product) => {
			let card = document.createElement("div");
			card.classList.add("card");
			card.innerHTML = `<img src=${product.image} alt="">
                    <div class="card-details">
                        <h3>${product.title}</h3>
                        <p>Company: ${product.company}</p>
                        <p>${product.price}</p>
                    </div>`;
			cardContainer.appendChild(card);
		});
	}
});
