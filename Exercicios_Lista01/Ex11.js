/**
 * 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
 */

// Importa o módulo 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')()

// Inicializa a variável 'soma' com zero para acumular o total dos números
let soma = 0

// Laço "for" que será executado 5 vezes, para ler 5 números
for (let index = 1; index <= 5; index++) {

    // Solicita que o usuário informe o número atual (ex: 1º, 2º, etc.)
    let numeros = Number(prompt(`Informe o ${index}º número: `))

     // Adiciona o número informado à variável 'soma'
    soma+=numeros
    
}

// Após o loop, exibe a soma total dos números informado
console.log(soma)

