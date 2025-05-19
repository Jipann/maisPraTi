/**
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
 */

const prompt = require('prompt-sync')()

// Declara a variável que vai armazenar o valor final da compra
let ValorCompra

// Define o preço unitário para compras com menos de 12 maçãs
let PrecoMenorQue12 = 0.30

// Define o preço unitário para compras com 12 maçãs ou mais
let PrecoMaiorOuIgual12 = 0.25

// Solicita ao usuário que informe quantas maçãs está comprando
let macas = Number(prompt('Informe o número de maças:'))

// Verifica se a quantidade de maçãs é menor que 12
if (macas < 12) {

    // Calcula o valor da compra usando o preço de R$ 0,30 por maçã
    ValorCompra = macas * PrecoMenorQue12

}else{
    // Calcula o valor da compra usando o preço de R$ 0,25 por maçã
    ValorCompra = macas * PrecoMaiorOuIgual12
}

// Exibe o valor total da compra com duas casas decimais
console.log(`Valor Total da compra: R$ ${ValorCompra.toFixed(2)}`)