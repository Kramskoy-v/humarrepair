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
