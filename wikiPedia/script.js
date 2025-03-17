let search = document.querySelector(".search");
let searchButton = document.querySelector(".search-button");
let newsContainer = document.querySelector(".news-container");
searchButton.addEventListener("click", (e) => {
	newsContainer.innerHTML = "";
	if (search.value) {
		e.preventDefault();
		fetch(
			`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=51&format=json&origin=*&srsearch=${search.value}`
		)
			.then((res) => res.json())
			.then((data) => {
				data.query.search.forEach((search) => {
					let anchor = document.createElement("a");
					anchor.href = `https://en.wikipedia.org/?curid=${search.pageid}`;
					anchor.target = "_blank";
					anchor.innerHTML = `<div class="card">
                <h2>${search.title}</h2>
                <p>${search.snippet}</p>
                <p class="time-stamp">${search.timestamp}</p>
            </div>`;
					newsContainer.appendChild(anchor);
				});
			});
	} else {
		alert("Please enter a Value to search!");
	}
	search.value = "";
});
