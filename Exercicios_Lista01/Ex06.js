/**
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados 
fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

const prompt = require('prompt-sync')()

// Entrada de dados: solicita ao usuário os três lados do triângulo
let a = Number(prompt('Informe o primeiro valor: '))
let b = Number(prompt('Informe o segundo valor: '))
let c = Number(prompt('Informe o segundo valor: '))

// Verifica se os três lados formam um triângulo válido
// Regra: a soma de dois lados deve ser maior que o terceiro (para todos os lados)
if (a + b > c && a + c > b && b + c > a) {

    // Verifica se todos os lados são iguais → Triângulo Equilátero
    if (a === b && b === c) {
        console.log('Triângulo Equilátero!')

        // Verifica se dois lados são iguais → Triângulo Isósceles
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo Isósceles!')

        // Se todos os lados forem diferentes → Triângulo Escaleno
    } else {

        console.log('Triângulo Escaleno!')
    }
} else {
    // Se os lados não formarem um triângulo, exibe esta mensagem
    console.log("Os valores informados não formam um triângulo.")
}
