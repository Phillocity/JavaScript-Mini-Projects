const controls = document.querySelectorAll(".controls input")

function changedState() {
  const value = this.value;
  const sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, value + sizing)
}

controls.forEach(input => input.addEventListener("change", changedState));
controls.forEach(input => input.addEventListener("mousemove", changedState));
