var songFile = new Audio
songFile.src = "https://cdns-preview-1.dzcdn.net/stream/c-1cdfe90120447061efa70135a552152c-12.mp3"

function playPause() {
    return songFile.paused ? songFile.play() : songFile.pause();
}
function setVolume (vol) {
    songFile.volume = vol;
}