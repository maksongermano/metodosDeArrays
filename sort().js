// esse méytodo ordena os elementos do próprio array. por padrão, a ordenação é de acordo com a tabela unicode.

//Opcionalmente, recebe uma função callback que possui dois parâmetros, sendo eles...
// o primeiro e o segundo elemento a ser comparado.
// vale rasaltar que na tabela unicode números vem antes de letras.
const numeros = [1, 30, 4, 6, 80, 31, 31];
// no caso de sorte ele altera a ordem original do array


// ordenação crescente 
numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1
    } else {
        return 0
    };

});

console.log(numeros)

//1 - se o retorno da função for um número menor que zero (negativo), o primeiro parametro vem antes do segundo.
//2- Se o retorno da função for um número maior que zero (positivo), o segundo parametro, vem antes do primeiro.
//- se o retorno da função for zero, mantém o primeiro e o segundo parametros inalterados.


numeros.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1
    } else {
        return 0;
    };

});

console.log(numeros);//ordenação decrescente

// outra forma, mais limpa de escrever isso é 
numeros.sort((a, b) => {
    return a - b;

});

console.log(numeros);

numeros.sort((a, b) => {
    return b - a;

});
console.log(numeros); // a mesma coisa só que invertida para ordem decrescente.