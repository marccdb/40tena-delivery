const botaoCadastro = document.querySelector('.botaoCadastro');
const popUpCadastro = document.querySelector('.jumbotron');
const botaoVoltar = document.querySelector('.botaoVoltar');
const formulario = document.querySelector('.formulario');


function toggleVisibility() {
  popUpCadastro.classList.toggle('hidden');
  formulario.classList.toggle('hidden');
}

//Jumbotron actions
botaoCadastro.addEventListener('click', toggleVisibility);
botaoVoltar.addEventListener('click', toggleVisibility);

//VUE

const DISPLAY_NAME, DISPLAY_TYPE, DISPLAY_CITY, DISPLAY_PHONE, DISPLAY_DESCRIPTION;


const app = new Vue({
  el: '#fornecedores',
  data: {
    name: DISPLAY_NAME,
    type: DISPLAY_TYPE,
    city: DISPLAY_CITY,
    phone: DISPLAY_PHONE,
    descriptiopn: DISPLAY_DESCRIPTION,
    imgAlim: 'https://image.flaticon.com/icons/svg/2871/2871612.svg',
    imgServ: 'https://image.flaticon.com/icons/png/512/2304/2304375.png',
  }});
