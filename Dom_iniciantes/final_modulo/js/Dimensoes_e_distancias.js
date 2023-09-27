// --------------Heigth e width----------------

// const listaAnimais = document.querySelector('.animais-lista');

// const heigth = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

// const primeiroh2 = document.querySelector('h2')
// const h2lef = primeiroh2.offsetTop;

// const rect = primeiroh2.getBoundingClientRect();

// console.log(rect.top);

// console.log(
//   window.innerWidth, // width do janela
//   window.outerWidth, // soma dev tools também
//   window.innerHeight, // height do janela
//   window.outerHeight, // soma a barra de endereço

//   window.pageYOffset, // distância total do scroll vertical
//   window.pageXOffset // distância total do scroll horizontal

// );

// const small = window.matchMedia('(max-width: 600px)');

// if (small) {
//   console.log('usuario mobile');
// }else{
//   console.log('usuario desktop');
// }

// ------------------atividade-----------------

// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imgagens = document.querySelectorAll('img');

  let soma = 0;

  imgagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigth = link.offsetHeight;

  if (linkWidth >= 48 && linkHeigth >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Acessibilidade nao legal');
  }
});

console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
