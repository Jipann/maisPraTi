/**
 * 12. Crie um programa que exibe a tabuada de um número
 *  fornecido pelo usuário (de 1 a
10) utilizando um loop for.
 */


// Importa o módulo 'prompt-sync' para permitir entrada de dados via terminal
const prompt = require('prompt-sync')()

// Lê o número digitado pelo usuário e converte para número
let valorUser = Number(prompt('Informe um numero para saber sua tabuada:'))

// Laço "for" que vai de 1 até 10 para exibir a tabuada
for (let index = 1; index <= 10; index++) {

    // Usei de template string (${}) para montar a frase da multiplicação.
    // valoruse X index
    console.log(`${valorUser} X ${index} = ${valorUser * index}`)
    
}
