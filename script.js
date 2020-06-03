
removetransition = (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}


playSound = (e) => {
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
};


const keys = Array.from(document.querySelectorAll(".beat"));
console.log(keys);

keys.forEach(key => key.addEventListener('transitionend',removetransition));

window.addEventListener('keydown',playSound);