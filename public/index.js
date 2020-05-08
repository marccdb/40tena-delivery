let botaoCadastro = document.querySelector('.botaoCadastro');
let popUpCadastro = document.querySelector('.jumbotron');
let botaoVoltar = document.querySelector('.botaoVoltar');
let formulario = document.querySelector('.formulario');

function toggleVisibility() {
  popUpCadastro.classList.toggle('hidden');
  formulario.classList.toggle('hidden');
}

//funções de botao Jumbotron
botaoCadastro.addEventListener('click', toggleVisibility);
botaoVoltar.addEventListener('click', toggleVisibility);

//VUE

const app = new Vue({
  el: '#fornecedores',
  data: {
    name: 'NOME FORNECEDOR',
    ramo: 'Ramo',
    cidade: 'Cidade',
    telefone: 'Telefone',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ornare diam. Praesent suscipit diam id commodo tincidunt.',
    imgAlim: 'https://image.flaticon.com/icons/svg/2871/2871612.svg',
    imgServ: 'https://image.flaticon.com/icons/png/512/2304/2304375.png',
  },
  methods: {
    filtrarCidade(cidade) {},
  },
});
