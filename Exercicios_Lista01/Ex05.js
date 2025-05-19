/**
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */


 

// Importa o módulo 'prompt-sync' para permitir entrada de dados via terminal
const prompt = require('prompt-sync')()

// Solicita ao usuário que informe o peso e converte o valor para número
let peso = Number(prompt('informe seu peso:'))

// Solicita ao usuário que informe a altura e converte o valor para número
let alt = Number(prompt('Informe sua altura: '))

// Calcula o IMC usando a fórmula: IMC = peso / (altura * altura)
let imc =  peso /(alt * alt)

// Exibe o valor do IMC com duas casas decimais
console.log('Seu IMC é: ' + imc.toFixed(2))

// Verifica em qual faixa o IMC se encaixa e exibe a categoria correspondente
if (imc < 18.5) {

    console.log("Categoria: Baixo peso")

  } else if (imc >= 18.5 && imc < 24.9) {

    console.log("Categoria: Peso normal")

  } else if (imc >= 25 && imc < 29.9) {

    console.log("Categoria: Sobrepeso")

  } else {

    console.log("Categoria: Obesidade")
  }