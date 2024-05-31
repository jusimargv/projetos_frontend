function imprimeSaudacao() {
    return 'Olá Gisele!';
}

imprimeSaudacao();


function imprimeSaudacao() {
    const saudacao = 'Olá, Jusimar!';



    return saudacao;

}
console.log(imprimeSaudacao());

function imprimeSaudacao(parametro){

    return parametro;
}

console.log(imprimeSaudacao('Olá, Eu sou um parâmetro!')); // o valor do parâmetro é passado na chamada da função

function imprimeSaudacao(parametro){
    const saudacao = 'Olá,' + parametro +'!';
    return  saudacao;
}

console.log(imprimeSaudacao("Jusimar"));

function imprimeSaudacao(nome){
    const saudacao = "Olá," + nome +"!";
    return saudacao;
}
console.log(imprimeSaudacao("Jusimar"));

function imprimeSaudacao(nome, sobrenome){
    const saudacao = "Olá, " + nome + " " + sobrenome + "!";
    return saudacao;
}

console.log(imprimeSaudacao("Jusimar", "Alves da Silva1"))

function imprimeSaudacao(nome, sobrenome, idade){
    const saudacao = "Olá, " + nome + " "+ sobrenome + "!";
    const exibeIdade ="Você tem " + idade + " " + "anos.";
    return saudacao + "   " + exibeIdade;
}
const nomeDaPessoa = "Jusimar";
const sobrenomeDaPessoa = "Alves Da Silva2";

console.log(imprimeSaudacao(nomeDaPessoa, sobrenomeDaPessoa, 42));

function imprimeSaudacao(nome, sobrenome, idade){
    const saudacao = "Olá, " + nome + " "+ sobrenome + "!";
    const exibeIdade ="Você tem " + idade + " " + "anos.";
    return saudacao + "   " + exibeIdade;
}

console.log(imprimeSaudacao("Jusimar", "Alves Da Silva", 42));
console.log(imprimeSaudacao("Paula", "Karina Do Nascimento Da Silva", 30));
console.log(imprimeSaudacao("Celso", "Ferreira Do Nascimento", 55));

function calculaDespesas(luz,internet){
    const despesaTotal = luz + internet;
    return " Esse mês, a despesa foi de: R$" + despesaTotal;
}
console.log(calculaDespesas(230,125));

function somaMercadinho(qntPaes, valorPaes, valorLeite){
    let soma = qntPaes * valorPaes +valorLeite;
    return "Valor Total da Compra: R$" + soma;
}
console.log(somaMercadinho(7, 0.75, 6));