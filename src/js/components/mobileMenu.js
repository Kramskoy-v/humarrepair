// menu mobile
const hamburger = document.querySelector('.menu-hamburger');
const header = document.querySelector('.header')


hamburger.addEventListener('click', () => {
  header.classList.toggle('_menu-active');
  document.body.style.overflow === '' ? document.body.style.overflow = 'hidden' :
    document.body.style.overflow = '';
})


// menu sticky
const logoMini = document.querySelector('.menu__logo-link-mini');
const socialsMenu = document.querySelector('.menu__socials');
if (window.innerWidth > 768) {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 185) {
      logoMini.classList.add('_visible');
      socialsMenu.classList.add('_visible');
    } else {
      logoMini.classList.remove('_visible');
      socialsMenu.classList.remove('_visible');
    }
  });
}
