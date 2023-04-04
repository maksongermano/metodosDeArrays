// faça uma função que recebe parêmetros do tipo string e imprime na tela essa string invertida, ou seja, de trá para frente.

// dica: lembre-se que o método reverse() só pode ser chamado por arrays
function inverterString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    let textoInvertido = '';
    for (let letra of arrayDeLetras) {
        // textoInvertido = textoInvertido + letra
        textoInvertido += letra; // faz o mesmo que a linha de cima.
    }

    console.log(textoInvertido)
}
inverterString('Makson Germano');