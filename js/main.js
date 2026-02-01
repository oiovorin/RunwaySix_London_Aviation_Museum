
(() => {

// video
const playerCon = document.querySelector("#player-container");
const player = document.querySelector("video");
const videoControls = document.querySelector("#video-controls");
const centerPlayButton = document.querySelector("#center-play-button");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const timeline = document.querySelector("#timeline");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");


if (player && playerCon && videoControls) {
player.controls = false;
videoControls.classList.remove('hidden');

function playVideo() {
    player.play();
    centerPlayButton.style.display = "none";
}

function pauseVideo () {
    player.pause();
    centerPlayButton.style.display = "block";
}

function stopVideo () {
    player.pause();
    player.currentTime = 0;
    centerPlayButton.style.display = "block";
    player.load();
}


function showCenterPlay () {
    centerPlayButton.style.display = "block";
}

function loadTimelineLength () {
    timeline.max = player.duration;
}

function updateTimeline () {
    timeline.value = player.currentTime;
}

function changeTimeline () {
    player.currentTime = timeline.value;
}

function changeVolume () {
    player.volume = volumeSlider.value;
}

function toggleFullScreen () {
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        playerCon.requestFullscreen();
    }
}

function showControls () {
    videoControls.classList.remove('hide');
}

function hideControls () {
    videoControls.classList.add('hide');
}


centerPlayButton.addEventListener("click", playVideo);
playButton.addEventListener("click", playVideo);
player.addEventListener("ended", showCenterPlay)
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("change", changeVolume);
player.addEventListener("loadedmetadata", loadTimelineLength);
player.addEventListener("timeupdate", updateTimeline)
timeline.addEventListener("change", changeTimeline)
fullScreen.addEventListener("click", toggleFullScreen);
videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);
}

})();