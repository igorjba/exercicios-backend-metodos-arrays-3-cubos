const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

let maiorNumero = numeros.reduce((atual, proximo, indice, array) => {
    if (atual > proximo) {
        return atual;
    } else {
        return proximo;
    };
});
console.log(maiorNumero);