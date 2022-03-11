const navMenu = document.getElementById('nav__menu'),
toggleMenu = document.getElementById('header__toggle'),
closeMenu = document.getElementById('header__close');


toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})