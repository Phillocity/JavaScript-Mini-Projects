const panels = document.querySelectorAll(".panel");

function toggleEnlarge(e) {
  this.classList.toggle("open")

  panels.forEach((panel) => {
    if (panel.className != e.target.className) {
      panel.classList.remove("open")
    }
  })
}

function toggleSlidered(e) {
  if (e.propertyName.includes('flex-grow')) {
    this.classList.toggle("open-active")
  }
}
panels.forEach(panel => panel.addEventListener("click", toggleEnlarge))
panels.forEach(panel => panel.addEventListener("transitionend", toggleSlidered))
