// Desafio 1: Mostrar um mensagem com a mensagem "Boas vindas ao nosso site!"
console.log("Boas vindas ao nosso site!");

// Desafio 2: Declarar uma variável chamada `nome` e atribuir a ela o valor "Lua"
let nome = "Lua";
console.log("Nome:", nome);

// Desafio 3: Criar uma variável chamada `idade` e atribuir a ela o valor 25
let idade = 25;
console.log("Idade:", idade);

// Desafio 4: Definir uma variável chamada `numeroDeVendas` e atribuir a ela o valor 50
let numeroDeVendas = 50;
console.log("Número de vendas:", numeroDeVendas);

// Desafio 5: Definir uma variável chamada `saldoDisponivel` e atribuir a ela o valor 1000
let saldoDisponivel = 1000;
console.log("Saldo disponível:", saldoDisponivel);

// Desafio 6: Mostrar um mensagem com o texto "Erro! Preencha todos os campos"
console.log("Erro! Preencha todos os campos");

// Desafio 7: Declarar uma variável chamada `mensagemDeErro` e atribuir a ela o valor "Erro! Preencha todos os campos", então mostrar um mensagem com o valor da variável
let mensagemDeErro = "Erro! Preencha todos os campos";
console.log(mensagemDeErro);

// Desafio 8: Usar um readline para perguntar o nome do usuário e armazená-lo na variável `nome`
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  console.log(`Nome: ${nome}`);
  rl.close();
});

// Desafio 9: Perguntar ao usuário sua idade usando um readline e armazená-la na variável `idade`
rl.question('Digite sua idade: ', (idade) => {
  idade = parseInt(idade);
  console.log(`Idade: ${idade}`);
  rl.close();
});

// Desafio 10: Se a idade for maior ou igual a 18, mostrar um mensagem com a mensagem "Pode tirar a habilitação!"
if (idade >= 18) {
  console.log("Pode tirar a habilitação!");
}