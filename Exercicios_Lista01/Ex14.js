/**
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
 */

    const prompt = require('prompt-sync')()

    // Inicializa a variável 'fatorial' com 1 (pois fatorial de 0 é 1 e multiplicação inicia neutra)
    let fatorial = 1

    // Solicita ao usuário que informe um número para calcular o fatorial
    let n = Number(prompt('Digite um numero: '))

    // Laço 'for' que vai de 1 até o número informado 'n'
    for (let i = 1; i <= n; i++) {
    
         // Multiplica o valor atual de 'fatorial' pelo contador 'i'
        fatorial*= i
        
    }

    // Exibe o resultado no formato "n! = fatorial"
    console.log(`${n}! = ${fatorial}`)