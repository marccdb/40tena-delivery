const botaoCadastro = document.querySelector(".botaoCadastro");
const popUpCadastro = document.querySelector(".jumbotron");
const botaoVoltar = document.querySelector(".botaoVoltar");
const formulario = document.querySelector(".formulario");

function toggleVisibility() {
	popUpCadastro.classList.toggle("hidden");
	formulario.classList.toggle("hidden");
}

//Jumbotron actions
botaoCadastro.addEventListener("click", toggleVisibility);
botaoVoltar.addEventListener("click", toggleVisibility);

//VUE

let DISPLAY_NAME = "Frutaria do José";
let DISPLAY_CATEGORY = "Alimentação";
let DISPLAY_CITY = "Vinhedo";
let DISPLAY_PHONE = "(XX)1234-56789";
let DISPLAY_DESCRIPTION = "Produtos frescos e entregas no horário comercial";
let IMG_ALIM = "https://image.flaticon.com/icons/svg/2871/2871612.svg";
let IMG_SERV = "https://image.flaticon.com/icons/png/512/2304/2304375.png";

const vue = new Vue({
	el: "#cardFornecedor",
	data: {
		name: DISPLAY_NAME,
		category: DISPLAY_CATEGORY,
		city: DISPLAY_CITY,
		phone: DISPLAY_PHONE,
		description: DISPLAY_DESCRIPTION,
		imgAlim: IMG_ALIM,
		imgServ: IMG_SERV,
	},
});
