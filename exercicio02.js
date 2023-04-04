// faça uma função que, dado um determinado conjunto de dados, descarta os primeiros e os últimos 10% dados, aprovando apenas os 80% 
function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10 / 100); //10 por cento
    const endIndex = Math.floor(dados.length * 90 / 100);// 90 por cento
    const fatia = dados.slice(startIndex, endIndex);
    console.log(fatia)
    console.log(startIndex, 'Startindex')
    console.log(endIndex, 'endIndex')

}


const dados = [49, 84, 13, 21, 33, 59, 75, 17, 95, 67, 23, 44, 10, 92, 55, 80, 12, 29, 61, 46, 53, 38, 42, 70, 88, 27, 73, 6, 98, 16];

filtrar80(dados);