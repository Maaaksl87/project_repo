let trackNum = 0;

document.querySelector('.play-pause').addEventListener('click', function () {
    const context = new AudioContext();
    const audio = document.querySelectorAll('audio')[trackNum];

    context.resume().then(() => {
        console.log('Playback resumed successfully');
        audio.play();
    });

    document.querySelector('.previous').addEventListener('click', function () {
        audio.currentTime = 0;
    });


    const gainNode = context.createGain();

    const volumeSlider = document.querySelector(".volume");
    volumeSlider.addEventListener("input", () => {
        gainNode.gain.value = +volumeSlider.value;
        audio.volume = +volumeSlider.value;
    });
})

document.querySelector('.next').addEventListener('click', () => {
    trackNum = trackNum < 2 ? trackNum + 1 : 0;
});