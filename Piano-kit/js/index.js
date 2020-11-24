function playKey(sound) {
    const audio = document.querySelector(`audio[data-key="${sound.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${sound.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    // console.log(sound)

}

function removeTransi(pressSound) {
    if (pressSound.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransi)
});
window.addEventListener('keydown', playKey)