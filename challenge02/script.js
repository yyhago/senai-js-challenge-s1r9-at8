// 2 - Crie um programa que pergunte ao usuário 4 notas de uma disciplina escolar, armazene-as em um vetor,
// ao final exibas as notas armazenadas e informe ao usuário sua média.

let notas = [];
let nota = 0;
let somaNotas = 0;
let mediaNotas = 0;

for(let i = 0; i < 4; i++){
    nota = parseFloat(prompt(`Digite a ${i+1} nota:`));
    notas[i] = nota;
}

for(let i = 0; i < notas.length; i++){
    somaNotas+=notas[i];
}

mediaNotas = somaNotas / notas.length;

console.log(`Notas: ${notas}`);
console.log(`A média das notas é: ${mediaNotas}`);