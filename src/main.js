
const menuHamburger = document.getElementById('checkbox-menu');

const buttonHB = document.querySelectorAll('.button-hb');
const menu = document.querySelector('.nav-bar-hamburguer');

menuHamburger.addEventListener('click', () => {
  menu.classList.toggle('display-none');
});


buttonHB.forEach((button) => {
  button.addEventListener('click', () => {
    menu.classList.toggle('display-none');
  
    menuHamburger.checked = false;
   });

});
