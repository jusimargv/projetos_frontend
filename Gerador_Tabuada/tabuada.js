document.addEventListener('DOMContentLoaded', function() {
    const gerarBtn = document.getElementById('gerarBtn');
    gerarBtn.addEventListener('click', gerarTabuada);
});

function gerarTabuada() {
    // Obtém o número digitado pelo usuário
    let numero = parseInt(document.getElementById('numero').value);

    // Seleciona o elemento onde o resultado será exibido
    let resultadoDiv = document.getElementById('resultado');

    // Limpa o conteúdo anterior do resultado
    resultadoDiv.innerHTML = '';

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = 'Por favor, digite um número válido.';
        return;
    }

    // Gera a tabuada de 1 a 10
    for (let contador = 1; contador <= 10; contador++) {
        // Cria um parágrafo para cada linha da tabuada
        let linha = document.createElement('p');
        linha.textContent = `${contador} x ${numero} = ${contador * numero}`;
        // Adiciona a linha ao resultado
        resultadoDiv.appendChild(linha);
    }
}
