let textAreaInput = document.querySelector(".textarea-input");
let newQuoteButton = document.querySelector(".new-quote-button");
let authorPara = document.querySelector(".author-para");
let speakButton = document.querySelector(".speak-button");
let selectOption = document.querySelector(".select-option");
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	selectOption.innerHTML = "";
	voices.map((voice, index) => {
		const option = document.createElement("option");
		option.value = index;
		option.textContent = `${voice.name}  (${voice.lang})`;
		selectOption.appendChild(option);
	});
	console.log(selectOption);
};
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
	const selectedVoiceIndex = selectOption.value;
	utterance.voice = voices[selectedVoiceIndex];
	speechSynthesis.speak(utterance);
});
