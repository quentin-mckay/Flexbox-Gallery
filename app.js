const $panels = document.querySelectorAll('.panel')

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleWords(e) {
  // if (e.propertyName !== 'flex-grow') return;
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

$panels.forEach(panel => panel.addEventListener('click', toggleOpen))
$panels.forEach(panel => panel.addEventListener('transitionend', toggleWords))