var botaoCadastro = document.querySelector(".botaoCadastro");
var popUpCadastro = document.querySelector(".jumbotron");
var botaoVoltar = document.querySelector(".botaoVoltar");
var formulario = document.querySelector(".formulario");

function toggleVisibility() {
    popUpCadastro.classList.toggle("hidden");
    formulario.classList.toggle("hidden");
}



//funções de botao Jumbotron
botaoCadastro.addEventListener("click", toggleVisibility);
botaoVoltar.addEventListener("click", toggleVisibility);

