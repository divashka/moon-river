let menuIcon = document.querySelector('.menu');
let navWrapper = document.querySelector('.header__bottom');


menuIcon.addEventListener('click', function () {
  this.classList.toggle('menu_active');
  navWrapper.classList.toggle('header__bottom_active');
  document.body.classList.toggle('body_active');
});

let nav = document.querySelector('.nav__menu');

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link_drop')) {
    e.preventDefault();

    let navItems = document.querySelectorAll('.nav__item');

    if (e.target.closest('.nav__item').classList.contains('nav-item_transformation')) {
      e.target.closest('.nav__item').classList.remove('nav-item_transformation');
    } else {
      navItems.forEach(function (navItem) {
        navItem.classList.remove('nav-item_transformation');
        e.target.closest('.nav__item').classList.add('nav-item_transformation');
      })
    }
  }
})

