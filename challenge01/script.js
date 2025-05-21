// 1 - Crie um programa que preencha automaticamente um vetor numérico com 10 posições. 

let array_numeros = [];
let numeros;


for(let i = 0; i < 10; i++){
    numeros = Math.ceil(Math.random() * 10);
    array_numeros[i] = numeros;
}

console.log(array_numeros);