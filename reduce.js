// Executa uma função callback, passada como argumento, para cada elemento do array, que resulta em apenas um valor de retorno.

// a funçaõ passada como argumento para o método reduce recebe 4 argumento.

// 1- acumulador - valor inicial (ou o valor do callback anterior)
// 2- valorAtual - o valor do elemento atual
// 3- index - o indice atual
// 4- array - o array completo

// const array = [0, 1, 2, 3, 4];
// array.reduce((acumulador, valoratual, indice, array) => {
//     return acumulador + valoratual;
// });

//exmplo
//soma fazendo o for de C
const array = [0, 1, 2, 3, 4];

// let somaTotal = array[0];

// for (let i = 1; i < array.length; i++) {
//     const elementoAtual = array[i]
//     somaTotal = somaTotal + elementoAtual
// };
// console.log(somaTotal)
const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});
console.log(valorReduce);

