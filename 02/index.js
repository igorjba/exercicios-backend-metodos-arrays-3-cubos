const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

let maiorString = cidades.reduce((acumulador, proximo) => {

    if (acumulador.length > proximo.length) {
        return acumulador
    } else {
        return proximo
    }

});

console.log(maiorString);
