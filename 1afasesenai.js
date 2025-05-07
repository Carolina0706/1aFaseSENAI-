//2. Exercício 2 - Calculadora de Soma
//Peça ao usuário para inserir dois números (você pode usar prompt para
//pegar os valores como strings e depois convertê-los para números com
//Number ).

function exercicio2(){
    let n1 = Number(prompt("Digite um número: "))
    let n2 = Number(prompt("Digite outro número: "))
    let soma = n1 + n2

    alert("O resultado é " + soma )
}

// 3. Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)
// Solicite ao usuário que insira uma temperatura em Celsius.
// Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
// Exiba o resultado em uma mensagem de alert .

function exercicio3(){
    let Celsius = Number(prompt("Digite a temperatura em Celsius: "))
    let fahrenheit = (Celsius * 9/5) + 32

    alert("A temperatura convertida em Fahrenheit é: " + fahrenheit)
}

// 4. Exercício 4 - Verificar se um número é par ou ímpar
// Solicite ao usuário que insira um número.
// Verifique se o número é par ou ímpar e exiba uma mensagem
// correspondente usando alert .




// Exercício 6 - Calculadora de IMC
// Solicite ao usuário que insira seu peso e altura.
// Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso
// / (altura²).

function exercicio6() {
    let peso = Number(prompt("Digite seu peso: "))
    let altura = Number(prompt("Digite sua altura: "))
    let imc = peso / (altura * altura)
    alert("Seu IMC é: " + imc)
}
//  5. Exercício 5 - Calcular a média de três notas
// Peça ao usuário para inserir três notas de um aluno.
// Calcule a média das notas e exiba o resultado em um alert .

function exercicio5() {
    let nota1 = Number(prompt("Primeira nota: "))
    let nota2 = Number(prompt("Segunda nota: "))
    let nota3 = Number(prompt("Terceira nota: "))
    let media = (nota1 + nota2 + nota3) / 3
    alert("A media é " + media)
}


function exercicio4() {
    let numero = Number(prompt("Digite um numero:"));

    if ((numero)) {
        alert("Insira um numero valido.");
    } else if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número é ímpar.");
    }
}

//A função isNaN() em JavaScript é usada para determinar se um valor é ou não um número.
// Ela retorna verdadeiro se o valor passado como argumento não for um número e falso se for um número.
function exercicio4() {
    let numero = Number(prompt("Digite um numero: "))
    if (isNaN(numero)) {
        alert("Insira um numero valido")
    } else if (numero % 2 === 0) {
        alert("O numero é par")
    } else {
        alert("O numero é Impar")
    }
}







  

// function gerarCaracterAleatorio(){
//     const caracteres = 'ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     const numeroaleatorio = Math.floor(Math.random() * caracteres.length);

//     return caracteres.charAt(numeroaleatorio);
// }
// function mostrar(){
//     let quantidade = Number(prompt("Informe quantos caracteres sua senha tem"))
//     let senha = ''
    
//     while(quantidade > 0){
//         senha += gerarCaracterAleatorio()
//         quantidade--
//     }
//     alert("A senha é: " + senha)
// }


























// //WHILE
// // exemplo 1 
// let contador = 1

// while(contador <= 5){
//     alert("Contador igual a " + contador)
//     contador++
// }
// alert("O contador é" + contador)

// // exemplo 2
// let contador = 0

// while(contador <= 10){
//     alert("Contador igual a " + contador)
//     contador += 2
// }
// alert("uma mensagem")

// // exemplo 3
// let contador = 10

// while(contador != 0){
//     alert("Contador igual a " + contador)
//     contador --
// }
// alert("uma mensagem")
