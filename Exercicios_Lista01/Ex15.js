  /**
   * 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
  Fibonacci utilizando um loop for.
  */

/*10 primeiros termos 
f1 = 1
f2 = 1
f3  = 2
f4 = 1 + 2 = 3
f5 = 2 +3 = 5
f6 = 3 + 5= 8
f7 = 5+8 = 13
f8 = 8 + 13 = 21
f9 = 13 + 21 = 34
f10 = 21 + 34 = 55*/

// Inicializa a variável 'a' com 1 (primeiro número da sequência)
let a = 1;
// Inicializa a variável 'b' com 1 (segundo número da sequência)
let b = 1;

// Exibe uma mensagem no console para indicar o que será mostrado
console.log('Sequência de Fibonacci:')

// Loop 'for' que será executado 10 vezes para gerar os primeiros 10 números
for (let i = 0; i < 10; i++) {

  // Imprime o valor atual de 'a' (número da sequência)
  console.log(a)

   // Calcula o próximo número da sequência somando 'a' e 'b'
  let proximo = a + b

  // Atualiza 'a' para o valor de 'b' para avançar na sequência
  a = b

  // Atualiza 'b' para o valor do próximo número calculado
  b = proximo
}
