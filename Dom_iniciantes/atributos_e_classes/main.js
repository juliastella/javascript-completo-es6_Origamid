// // --------------classes e atributos----------------
// const menu = document.querySelector('.menu');

// console.log(menu.classList.add('ativo'));
// console.log(menu.classList.remove('azul'));
// console.log(menu.classList.toggle('azul'));
// console.log(menu);

// if(menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul');
// } else{
//   menu.classList.add('nao-possui-azul');
// }

// // para concaterna class ou adicionar

// menu.className += ' vermelho'

// console.log(menu.className);


// const animais = document.querySelector('.animais');

// console.log(animais.attributes['data-texto']); 
// //por padrao o attributes nao pode receber variavel com hifen. Mas pode passar ele em forma de array.


// // getattribute e setattribute

// const img = document.querySelector('img');

// const scrImg = img.getAttribute('alt');

// img.setAttribute('alt','E uma raposa');

// const possuiAlt = img.hasAttribute('title');

// console.log(possuiAlt);
// console.log(scrImg);


// ----------------atividade----------------

// Adicione a classe ativo a todos os itens do menu

// const itensMenu = document.querySelectorAll('.menu a')


// itensMenu.forEach((item) => {
//   item.classList.add('ativo');
// })
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// itensMenu.forEach((item) => {
//   item.classList.remove('ativo');
// })

// itensMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt

// const imgs = document.querySelectorAll('img');

// imgs.forEach((img) => {
//   const possuiAtributo = img.hasAttribute('alt');
//   console.log(img, possuiAtributo);
// })

// Modifique o href do link externo no menu

// const links = document.querySelectorAll('a[href^="http"]');

// links.forEach(link => {
//   link.setAttribute('href', 'https://www.google.com/');
// });

// console.log(links);

// --------------Heigth e width----------------

