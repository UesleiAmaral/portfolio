
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

const connection = async () => {
  const endpoint = 'https://api.github.com/users/uesleiamaral/repos'

  const data = await fetch(endpoint)
    .then((data) => data.json())
  console.log(data);
}

connection();