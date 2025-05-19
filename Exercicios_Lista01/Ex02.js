/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    adolescente, adulto, idoso) com base no valor fornecido,
     utilizando uma estrutura de
    controle if-else.*/

    // Importa o módulo 'prompt-sync' para permitir entrada do usuário
const prompt = require('prompt-sync')()

// Solicita que o usuário digite a idade e converte para número
let idade = Number(prompt('Informe a idade: '))

// Verifica a faixa etária usando estrutura if-else
if (idade >= 0 && idade <= 10) {
    console.log('Criança') // Idade de 0 a 10
} else if (idade >= 11 && idade <= 18) {
    console.log('Adolescente') // Idade de 11 a 18
} else if (idade >= 19 && idade <= 100) {
    console.log('Adulto') // Idade de 19 a 100
} else if (idade > 100) {
    console.log('Idoso') // Acima de 100 anos
} else {
    console.log('Idade inválida!') // Idade negativa ou não numérica
}
