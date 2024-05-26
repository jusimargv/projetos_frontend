const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
    for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
        if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]) {
            amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
        }
    }
}

console.log(amizadesEmComum);