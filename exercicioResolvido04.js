const carros = [
    { nome: "Fiesta", marca: "Ford", ano: 2020, cor: "preto" },
    { nome: "Corolla", marca: "Toyota", ano: 2021, cor: "branco" },
    { nome: "Gol", marca: "Volkswagen", ano: 2019, cor: "vermelho" },
    { nome: "Onix", marca: "Chevrolet", ano: 2022, cor: "azul" },
    { nome: "Civic", marca: "Honda", ano: 2018, cor: "prata" },
    { nome: "Uno", marca: "Fiat", ano: 2020, cor: "verde" },
    { nome: "HB20", marca: "Hyundai", ano: 2021, cor: "cinza" },
    { nome: "Renegade", marca: "Jeep", ano: 2022, cor: "laranja" }
];


const OrdenarCarros = (arrayCarros, campoOrdenacao) => {
    arrayCarros.sort((primeiro, segundo) => {
        return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
    });
    console.log(arrayCarros)
};

OrdenarCarros(carros, 'cor');