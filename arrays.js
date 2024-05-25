// dua formas de adicionar um item na sua lista:

//modo 1;
const listaDeCompras =["mel","farinha","leite"];
listaDeCompras[3]="farofa";

console.log(listaDeCompras);//["arroz","feijão","ovo", "farofa"]

//modo 2;
const listaCompras = ['arroz', 'feijão', 'ovo'];
listaCompras.push('carne')

console.log(listaCompras); // ['arroz', 'feijão', 'ovo', 'farofa']

listaCompras.unshift(listaDeCompras);

console.log(listaCompras);

const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
const quantidadeConvidados = convidados.length;

console.log(convidados); // ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana']

convidados.push('Evelyn');
console.log(convidados);
console.log(convidados.length); // 13
