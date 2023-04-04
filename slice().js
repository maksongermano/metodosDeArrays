//Faz uma cópia de parte de um Array, retornando essa cópia
//ps. o array original não é modificado
const opcoes = ['eu', 'você', 'marinete', 'nós'];
const resultado = opcoes.slice(1, 3);//o que vem no argumento é a fatia do array que você quer cortar
console.log(resultado);