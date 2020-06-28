window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
const modalClose = document.querySelector('[data-close]'),
      modal = document.querySelector('.modal'),
      not = document.querySelector('.not');
      
      modalClose.addEventListener('click', () => {
          not.classList.toggle('hide');
      });
      modalClose.addEventListener('click', () => {
          modal.classList.toggle('mine');
      });
    