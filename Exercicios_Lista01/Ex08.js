/**
 * Escreva um algoritmo para ler 2 valores
 *  (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
 */

const prompt = require('prompt-sync')()

// Lê o primeiro valor informado pelo usuário e converte para número
let valor1 = Number(prompt('Informe o primeito valor: '))
// Lê o segundo valor informado pelo usuário e converte para número
let valor2 = Number(prompt('Informe o segundo valor: '))

// Verifica se os dois valores são iguais
if (valor1 === valor2) {
    console.log('Valores iguais')

    // Se o primeiro valor for maior que o segundo
}else if (valor1 > valor2) {
    // Exibe os valores em ordem crescente: menor primeiro
    console.log(valor2,valor1)

    // Se o segundo valor for maior que o primeiro
}else{
    // Exibe os valores em ordem crescente: menor primeiro
    console.log(valor1,valor2)
}