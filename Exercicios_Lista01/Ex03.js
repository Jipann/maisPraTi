    /**
     * Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
    */

    const prompt = require('prompt-sync')()

    // Solicita ao usuário que informe uma nota e converte o valor para número
    let nota = Number(prompt('Informe uma nota de 0 até 10 : '))

    // Verifica se a nota está entre 7 e 10 (inclusive). Se sim, o aluno está aprovado
    if (nota >= 7 && nota <= 10) {
        console.log('Aprovado ')

        // Verifica se a nota está entre 5 (inclusive) e menor que 7. Se sim, o aluno está em recuperação
    }else if (nota >= 5 && nota < 7) {
        console.log('Recuperação')

        // Verifica se a nota está entre 0 (inclusive) e menor que 5. Se sim, o aluno está reprovado
    }else if(nota >= 0 && nota < 5){

        console.log('Reprovado')
        
// Se a nota não estiver entre 0 e 10, exibe uma mensagem de nota inválida
    }else{
        console.log('nota inválida')
    }


/**
 * Desafio 1: Números maiores que a média
Objetivo:
Crie um array com 10 números. Calcule a média 
e gere um novo array com os números que são maiores que a média.

let arrayOriginal = [10,20,30,40,50,60,70,80,90,100]

let soma = arrayOriginal.reduce((index , valor) => index + valor, 0)

let media = soma / arrayOriginal.length

let maioresQueMedia = arrayOriginal.filter(arrayOriginal => arrayOriginal >media)

console.log(media)

console.log(maioresQueMedia)



let arrayOriginal2 = [10,20,30,40,50,60,70,80,90,100]
let index = 0
let soma2 = 0

for ( index  ; index < arrayOriginal2.length; index++) {

     soma2+= arrayOriginal2[index] // soma = soma +arrooriginal2[index]
    
     //media2 = soma / arrayOriginal2[index] 0 + 10 = soma 10 , 10 + 20 = soma 30, 
     // 30 +30 = 60, 60 + 40 = 100, 100+50=150, 150+60=210, 210+70=280 280+80= 360, 360+90=450, 
}

let media2 = soma2 / index


console.log('media2 =',media2)
 */