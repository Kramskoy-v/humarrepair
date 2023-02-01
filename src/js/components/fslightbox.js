if (window.innerWidth > 1200) {
  const reviewsPhone = document.querySelector('.reviews__phone-bg')
  const galleryItems = document.querySelectorAll('[data-fslightbox="reviews-gallery"]>img')

  addEventListener('click', (e) => {
    const target = e.target
    galleryItems.forEach(item => {
      if (target && target === item) {
        reviewsPhone.classList.add('_active')
      }
      if (target.classList.contains('fslightbox-absoluted') || target.classList.contains(
        'fslightbox-toolbar-button')) {
        reviewsPhone.classList.remove('_active')
      }
    })

  })
}
if (window.innerWidth > 768) {
  require('fslightbox')
}
