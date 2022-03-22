function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove("playing")
}

function playSound(KeyboardEvent) {
  const audio = document.querySelector(`audio[data-key="${KeyboardEvent.key.toLowerCase()}"]`);
  const key = document.querySelector(`.key[data-key="${KeyboardEvent.key.toLowerCase()}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
