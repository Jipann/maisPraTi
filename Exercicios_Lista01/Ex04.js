/**
 * 4. Crie um menu interativo no console que ]
 * 
 * oferece ao usuário a escolha de três opções.
 * 
Utilize switch-case para implementar a lógica de cada opção selecionada.
 */

// Importa o módulo 'prompt-sync' para permitir a entrada de dados no terminal
const prompt = require('prompt-sync')()

// Cria uma variável 'saldo' com valor inicial de 1000 (saldo fictício do usuário)
let saldo = 1000
    // Exibe as opções do menu no console
console.log("=== MENU Banco Code ===");
console.log("1 - Ver saldo");
console.log("2 - Fazer pagamento");
console.log("3 - Sair")
// Solicita ao usuário que escolha uma das opções e converte a entrada para número
let opcoes = Number(prompt('Escolha uma opção:'))

// Estrutura switch-case é executada conforme a opção escolhida
switch (opcoes) {
    case 1:
        
        console.log('Seu saldo é de R$',saldo)
        break
    case 2 :
        console.log('Pagamento Realizado com sucesso !')
        
        break
    case 3:
        console.log('Saindo do sistema... Até logo !')
        break
    default:
        console.log('Opção inválida. por favor escolha 1 , 2 ou 3')
        break;
}
