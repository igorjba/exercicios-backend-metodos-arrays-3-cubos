const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


let letraF = frutas.sort((a, b) => {
    return a.length - b.length;
});

console.log(letraF);

//==================================
const letraE = frutas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(letraE);

//==================================
const letraD = frutas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(letraD);

//=============================
const letraC = numeros.sort();

console.log(letraC);

//==============================

const letraB = numeros.sort((a, b) => {
    return b - a;
});

console.log(letraB);
//==============================
const letraA = numeros.sort((a, b) => {
    return a - b;
});

console.log(letraA);