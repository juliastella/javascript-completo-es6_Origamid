// OUTERHTML, INNERHTML E INNERTEXT

// const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// console.log(animaisLista.innerHTML);
// console.log(animaisLista.outerHTMLHTML);

// h1.innerHTML = '<p>Novo Titulo</p>';


const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement.parentElement.parentElement);

// console.log(lista.nextElementSibling); //pega o proximo elemento do elemento pai

// console.log(lista.previousElementSibling); // pega o anterior elemento do elemento pai

//console.log(lista.children); // HTMLCollection com os filhos
//console.log(lista.children[0]); // primeiro filho
//console.log(lista.children[--lista.children.length]); // ultimo filho

//pode selecionar o ultimo filho da lista dessa forma

// console.log(lista.querySelector('li:last-child'));

// console.log(lista.childNodes);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// animais.insertBefore(titulo); //e um metodo usado para mover o titulo.

const mapa = document.querySelector('.mapa');

// contato.replaceChild(mapa, titulo);

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);


// Clonar elementos


const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

// cloneH1.classList.add('azul');
// faq.appendChild(cloneH1);

//------- execicio -------

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);



 
// Selecione o primeiro DT da dl de Faq

const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDt.nextElementSibling;

console.log(primeiroDD);


// Substitua o conteúdo html de .faq pelo de .animais

faq.innerHTML = animais.innerHTML;