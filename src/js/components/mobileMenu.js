// menu mobile
const hamburger = document.querySelector('.menu-hamburger');
const closeMenu = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.header__mobile-wrapper');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('_active');
  document.body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('_active');
  document.body.style.overflow = ''
})

// menu sticky
const logoMini = document.querySelector('.menu__logo-link-mini');
const socialsMenu = document.querySelector('.menu__socials');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 185) {
    logoMini.classList.add('_visible');
    socialsMenu.classList.add('_visible');
  } else {
    logoMini.classList.remove('_visible');
    socialsMenu.classList.remove('_visible');
  }
});
