// aula 1

// const carro = {
//   marca: 'Marca',
//   preco: 0,
// };

// function Carro(marcaAtribuida, precoAtribuida) { // normalmente quando é uma função construtora se usa pascalCase.
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuida;
// }


// const honda = new Carro('Honda', 3000);
// honda.marca = 'Honda';
// honda.preco = 4000;

// function Carro2(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
  
//   this.marca = marca;
//   this.preco = precoFinal;
// }

// const mazda = new Carro2('~Mazda', 5000);

// aula 2

// const Dom = {
//   seletor: 'li',
//   element(){ // isso e com se force um atalho para isso elemento: function(){}
//     return document.querySelector(this.seletor);
//   },
//   ativar(){
//     this.element().classList.add('ativar'); // isso seria o resumo principa lconst elementoSelecionado = this.element(); //seria o resumo de const elementoSelecionado = document.querySelector(this.seletor); 
//   }
// }


// caso queira adicionar em outro local.
// Dom.seletor = "ul"; 
// Dom.ativar();

// transforma tudo acima em uma funcao construtora

// function Dom(seletor) {

//   this.element= function(){
//     return document.querySelector(seletor);
//   }

//   this.ativar= function(classe){ // aqui eu posso passar um paramentro com classe e no objeto em baixo escolher a minha classe
//     this.element().classList.add(classe);  
//   }

// }

// const li = new Dom('li');
// const ul = new Dom('ul');

// const lastLi = new Dom('li:last-child');
// lastLi.ativar('ativar');


//------------ Atividade ------------

// Transforme o objeto abaixo em uma Constructor Function

function Pessoa() {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou');
  } 
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa1 = {
  nome: 'Maria',
  idade: '25',
}

const pessoa2 = {
  nome: 'joao',
  idade: '20',
}

const pessoa3 = {
  nome: 'Bruno',
  idade: '15',
}


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elementos) {
  
}