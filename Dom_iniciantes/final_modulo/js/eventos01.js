// const img = document.querySelector('img');

// function callback(event) {
//   // o primeiro paramentro do callback e referente ao evento que ocorreu
//   console.log(event);
// }

// // img.addEventListener('click', callback);

// // exemplo do metodos

// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(event) {
//   console.log(event.currentTarget); 
//   console.log(event.target); //onde o clique ocorreu
//   console.log(event.type); //o tipo
// }

// // animaisLista.addEventListener('click', callbackLista);

// // Metodo .preventDefault()

// const linkExterno = document.querySelector('a[href^="http"]');

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// // linkExterno.addEventListener('click', clickNoLink);

// // Diferentes eventos

// const h1 = document.querySelector('h1');

// function  handleEvent(event) {
//   console.log(event.type, event);
// }

// // h1.addEventListener('click', handleEvent);
// // h1.addEventListener('mouseenter', handleEvent);
// // h1.addEventListener('mousemove', handleEvent);

// // eventos do window

// // window.addEventListener('scroll', handleEvent);
// // window.addEventListener('resize', handleEvent);

// // keydown

// function handleKeyboar(event) {
//   if (event.key === 'f') {
//     document.body.classList.toggle('fullscreen');
//   }
// }

// // window.addEventListener('keydown', handleKeyboar);

// // forEach e eventos
// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//   console.log(event.target);
// }

//  imgs.forEach((img => {
//   img.addEventListener('click', handleImg)
// }))

// // ------- execicio -------

// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links

// const linkInternos = document.querySelectorAll('a[href^="#"]')

// function handClick(event) {
//   event.preventDefault();

//   linkInternos.forEach((link) => {
//     link.classList.remove('ativo');
//   })  

//   event.currentTarget.classList.toggle('ativo');
// }

// linkInternos.forEach((link) => {
//   link.addEventListener('click', handClick);
// })

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll('body *');

// function handElemento(event){
//   console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handElemento);
// })



// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento


// // function handElementoRemove(event){
// //   event.currentTarget.remove();
// // }

// // todosElementos.forEach((elemento) => {
// //   elemento.addEventListener('click', handElementoRemove);
// // })

// // Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// function handClickT(event){
//   console.log(event.key);
//   if(event.key === 't'){
//     document.documentElement.classList.toggle('textomaior');
//   }
// }

// window.addEventListener('keydown', handClickT)