alert('Boas Vindas ao Mundo do Secret Game !');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    
    chute = prompt(`Escolha um Número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O Número Secreto é Menor que: ${chute}`);
        } else if (chute < numeroSecreto) {
            alert(`O Número Secreto é Maior que: ${chute}`);
            
        } 
        // tentativas = tentativas +1;
        tentativas++;
    }
    

}

let palavraTentativa = tentativas > 1 ? 'tentativas'  : 'tentativa';
alert(`isso ai!, Você descobriu o número Secreto ! O Número Secreto é: ${numeroSecreto} com ${tentativas} ${palavraTentativa}:`);
//if (tentativas > 1){
    //alert(`isso ai!, Você descobriu o número Secreto ! O Número Secreto é: ${numeroSecreto} com ${tentativas} tentativas:`);
    ///}else {
        //alert(`isso ai!, Você descobriu o número Secreto ! O Número Secreto é: ${numeroSecreto} com ${tentativas} tentativa:`);
    //}