/**
 * Fazer um algoritmo para receber números
 *  decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
 */


// Importa o módulo 'prompt-sync' para entrada de dados via terminal
const prompt = require('prompt-sync')()

// Inicialização das variaveis
let soma = 0
let media = 0
let controle = 0
let num 


// Loop do-while que executa ao menos uma vez
do{
     // Solicita ao usuário que informe um número decimal, exibindo o número da entrada
     num = Number(prompt(`Informe ${controle+1}º número:`))

     // Se o número digitado não for zero, acumula na soma e incrementa o contador
    if (num !== 0) {
        soma+= num
        controle++
    }

    // Repete o loop enquanto o número digitado for diferente de zero
}while(num !==0)

    // Após sair do loop, calcula a média aritmética dos números digitados
    media = soma / controle

    // Exibe a média com duas casas decimais no console
    console.log(media.toFixed(2))
    