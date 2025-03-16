let myVideo = document.querySelector("#video");
let playButton = document.querySelector(".play-button");
let pauseButton = document.querySelector(".pause-button");
let button = document.querySelector(".button");
let flag = true;
button.addEventListener("click", () => {
	if (flag) {
		myVideo.pause();
		pauseButton.classList.add("active");
		playButton.classList.remove("active");
		playButton.classList.remove("default");
		flag = false;
	} else {
		myVideo.play();
		pauseButton.classList.remove("active");
		playButton.classList.add("active");
		flag = true;
	}
});
