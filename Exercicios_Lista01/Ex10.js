/**
 * 10. Escreva um algoritmo para ler
 *  um número inteiro e escrevê-lo na tela 10 vezes.
 */

// Importa o módulo 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')()

// Lê um número digitado pelo usuário e converte para tipo numérico
let num = Number(prompt('Informe um valor:'))

// Laço "for" que será executado 10 vezes
for (let index = 1; index <= 10; index++) {
    
    // Exibe o número informado no console a cada repetição
    console.log(num)
    
}