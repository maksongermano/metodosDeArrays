// altera o conteúdo de uma lista, removendo zero ou mais itens de um array num determinado índice.
// opcionalmente, pode-se inserir um ou mais itens no local onde outros foram deletados

const lista = [49, 88, 27, 73, 6, 98, 16]
lista.splice(1, 2, 4)//o primeiro argumento é sempre o indice onde eu quero modificar. O próximo é quantos elementos eu quero apagar, e depois o que quero inserir depois.
console.log(lista)//[ 49, 4, 73, 6, 98, 16 ]
// outro exempo com a mesma lógica
let array = [49, 88, 27, 73, 6, 98, 16];
array.splice(1, 2, 'j', 'l', 'makson');
console.log(array)//[ 49, 'j', 'l', 'makson', 73, 6, 98, 16 ]

array = [49, 88, 27, 73, 6, 98, 16];
array.splice(1, 0, 'tapioca', 'arroz', 'XXX');
console.log(array)//[ 49, 'tapioca', 'arroz', 'XXX', 88, 27, 73, 6, 98, 16 ]


// array.push
array = [49, 88, 27, 73, 6, 98, 16];
array.splice(array.length, 0, 'tapioca');
console.log(array)//[ 49, 88, 27, 73, 6, 98, 16, 'tapioca' ]

//array.pop()
array = [49, 88, 27, 73, 6, 98, 16];
array.splice(array.length - 1, 1);
console.log(array);//[ 49, 88, 27, 73, 6, 98 ]

//arrai.shift
array = [49, 88, 27, 73, 6, 98, 16]
array.splice(0, 1);
console.log(array)//[ 88, 27, 73, 6, 98, 16 ]

//array.unshift ('m')
array = [49, 88, 27, 73, 6, 98, 16]
array.splice(0, 0, 'M')
console.log(array) //['M', 49, 88, 27, 73,  6,  98, 16]