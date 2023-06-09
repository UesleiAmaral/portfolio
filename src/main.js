
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

  return data;
}

const repository = await connection();

const recuseID = [
  636493513,
  600708431,
  598919702,
  645994164
];

let cont = 0;

const buttonVerMais = document.querySelector('.button-section-project');
const viewProject = document.querySelector('.div-figure-projects');

buttonVerMais.addEventListener('click', (e) => {
  e.preventDefault();

  if (cont == 0) {
    cont += 1;
    viewProject.innerHTML += createElementProjects();
  }

  // viewProject.innerHTML += createElementProjects();
  // viewProject.innerHTML += createElementProjects();
  // viewProject.innerHTML += createElementProjects();
})


repository.forEach((repos) => {
  const results = recuseID.find(reposId => reposId === repos.id);

  if (results === undefined) {
    console.log(repos.id, repos.name);

  };
});



const createElementProjects = () => {
  const element = `
<div class="div-msg">
  <div class="flip-card">
    <div class="flip-card-inner">

      <img src="./assets/image/desenho02.jpg" alt="">

      <div class="content-card-back flip-card-back">

        <h3>Trabalhando nisso logo estará finalizado!</h3>
      </div>

    </div>
  </div>
</div>

  `;
  return element;

}

/*

<figure class="figure-projects">
  <div class="flip-card">
    <div class="flip-card-inner">
      <img class="projects-img" src="./assets/image/biscoito.png" alt="">
      <div class="content-card-back flip-card-back">
        <p class="card-back-p">
          Biscoito Da Sorte
        </p>
        <table>
          <thead>
            <tr>
              <th>Tecnologias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="box-td box-td-01">HTML</td>
            </tr>
            <tr>
              <td class="box-td box-td-02">CSS</td>
            </tr>
            <tr>
              <td class="box-td box-td-03">JAVASCRIPT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="buttons">
    <a href="https://uesleiamaral.github.io/BiscoitoDaSorte/" target="_blank" class="site">site</a>
    <a href="https://github.com/UesleiAmaral/BiscoitoDaSorte" target="_blank" class="repos">repositorio</a>
  </div>
</figure>

*/

