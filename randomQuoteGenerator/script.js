let textAreaInput = document.querySelector(".textarea-input");
let newQuoteButton = document.querySelector(".new-quote-button");
let authorPara = document.querySelector(".author-para");
let speakButton = document.querySelector(".speak-button");

function getQuotes() {
	fetch("https://dummyjson.com/quotes/random")
		.then((res) => res.json())
		.then((data) => {
			const body = data.quote;
			const author = data.author;
			textAreaInput.value = body;
			authorPara.innerHTML = `~ ${author}`;
		});
}
getQuotes();
newQuoteButton.addEventListener("click", () => {
	getQuotes();
});

speakButton.addEventListener("click", () => {
	let utterance = new SpeechSynthesisUtterance(textAreaInput.value);
	utterance.lang = "en-US";
	speechSynthesis.speak(utterance);
});
