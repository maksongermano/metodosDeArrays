// Inverte a ordem dos itens de um array.

const opcoes = ['eu', 'tu', 'ele']
const resultado = opcoes.reverse();
console.log('original', opcoes)
console.log('resultado', resultado); // esse método muda o original. Atenção!!!
resultado.pop();
//[ 'ele', 'tu', 'eu' ]
console.log(opcoes)