if (window.innerWidth > 576) {
  require('fslightbox')
}

window.addEventListener('touchstart', (event) => {
  const swiping = document.querySelector(
    '.fslightbox-slide-swiping-hoverer.fslightbox-full-dimension.fslightbox-absoluted')

  const target = event.target

  if (target === swiping) {
    swiping.style.zIndex = '-1'
  }
})
