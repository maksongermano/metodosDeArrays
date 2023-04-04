// junta todos os elements de um array em uma string, separando ou não.

// const opcao = ['uma', 'outra'];
// let resultado = opcao.join(' ')// o que tiver dent dops parametros, será somado a cada concatenação
// console.log(resultado)

function inverterString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    const textoInvertido = arrayDeLetras.join('');
    console.log(textoInvertido)
}



inverterString('Makson Germano');