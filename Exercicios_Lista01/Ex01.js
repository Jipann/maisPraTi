/**
 * 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
 */

// Importa o módulo 'prompt-sync' para permitir que o usuário digite dados pelo terminal
const prompt = require('prompt-sync')()

// Solicita ao usuário que digite um número e armazena o valor convertido em número na variável 'numero'
let numero = Number(prompt('Digite um número : '))

// Verifica se o número é par usando o operador de módulo (%)
// Se o resto da divisão por 2 for igual a 0, o número é par
if (numero % 2 == 0) {
    console.log(' par') // Exibe "par" se a condição for verdadeira
}else{
    console.log('ímpar') // Caso contrário, exibe "ímpar"
}