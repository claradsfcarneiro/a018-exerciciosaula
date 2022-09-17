/* Declare duas funções:
A primeira deve receber um array de números e retornar todos os números do array multiplicados por 3;
A segunda deve receber um array de números e retornar um array apenas com os números pares.
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicaPorTres(array){
  const multiplicadosPorTres = [];
  for (let i of array) {
    multiplicadosPorTres.push(i*3);
  }
  return multiplicadosPorTres;
}

function retornaPares(array) {
  const numerosPares = [];
  for (let i of array) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
}

console.log(multiplicaPorTres(numeros));
console.log(retornaPares(numeros));
*/

/*Crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável.*/ 

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const retornaPares = function(array) {
  const numerosPares = [];
  for (let i of array) {
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  return numerosPares;
};

function multiplicaPor3ERetornaPares(array, funcao){
  const multiplicadosPorTres = [];
  for (let i of array) {
    multiplicadosPorTres.push(i*3);
  }
  let paresMultiplicados = funcao(multiplicadosPorTres);
  return paresMultiplicados;
}

console.log(multiplicaPor3ERetornaPares(numeros, retornaPares));
*/


/*Refaça a primeira função, dessa vez utilizando a função de array map().
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicadosPorTres = numeros.map((numero) => {
  return numero * 3
});

console.log(multiplicadosPorTres);
*/

/*Refaça a segunda função, dessa vez utilizando a função filter().
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const retornaPares = numeros.filter((numero) => {
  return numero % 2 === 0
});

console.log(retornaPares);
*/

/*Com o array de pokemons, faça o seguinte:
a. Crie uma função que receba como parâmetro o objeto pokemon, e que defina a propriedade vida do pokemon como 100;
b. Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback.
c. Crie uma constante pokemonsDeFogo e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback.
*/
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

/*
// Exercício A

const vidaCheia = function(i){
  i.vida = 100;
  return i;
}

//Exercício B

const pokemonsVidaCheia = pokemons.map(vidaCheia);
console.log(pokemonsVidaCheia);

//Exercício C

const tipoFogo = function(i){
	return i.tipo === 'fogo';
}

const pokemonsDeFogo = pokemons.filter(tipoFogo);
console.log(pokemonsDeFogo);
*/
