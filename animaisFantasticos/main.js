/**-----------aula 01 do modulo---------------------*/
// // Retorne no console todas as imagens do site

// const todasImagens = document.querySelectorAll("img");
// console.log(todasImagens);

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imagemsAnimais = document.querySelectorAll('img[src^="img /imagem"]');
// console.log(imagemsAnimais);

// // Selecione todos os links internos (onde o href começa com #)

// const linkInterno = document.querySelectorAll('[href^="#"]')
// console.log(linkInterno);
// // Selecione o primeiro h2 dentro de .animais-descricao

// const h2Animais = document.querySelectorAll('.animais-descricao h2')
// console.log(h2Animais);

// // Selecione o último p do site

// const paragrafod = document.querySelectorAll('p')

// console.log(paragrafod[paragrafod.length - 1]);

/**--------------------aula 02 do modulo------------------*/

//const imgs = document.querySelectorAll("img");

// imgs.forEach(function(item, index, array) {
//   console.log(item, index, array);
// })

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//   //console.log(item);
// });

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index, array) => {
//   console.log(item, index, array);
// })

// Mostre no console cada parágrado do site

// const paragrafo = document.querySelectorAll('p');

// paragrafo.forEach((item) => {
//  // console.log(item);
// });

// // Mostre o texto dos parágrafos no console

// paragrafo.forEach((item) => {
//  // console.log(item.innerText);
// });

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() =>i++);
// console.log(i);

/**--------------------aula 03 do modulo------------------*/

// Adicione a classe ativo a todos os itens do menu
// const menu = document.querySelectorAll('.menu a');

// menu.forEach((item) => {
//   item.classList.add('ativo');
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menu.forEach((item, index) => {
//   if (index !== 0) {
//     item.classList.remove('ativo');
//   } else {
//     item.classList.add('ativo');
//   }
// });
// // Verifique se as imagens possuem o atributo alt

// const imagens = document.querySelectorAll('img');

// imagens.setAttribute('alt');

// console.log(imagens);
// // Modifique o href do link externo no menu



