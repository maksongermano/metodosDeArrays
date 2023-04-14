const usuarios = [
    { id: 125, nome: "Drácula", idade: 647 },
    { id: 295432, nome: "Lestat de Lioncourt", idade: 315 },
    { id: 33425, nome: "Akasha", idade: 6000 },
    { id: 445, nome: "Louis de Pointe du Lac", idade: 265 },
    { id: 558, nome: "Selene", idade: 600 },
    { id: 2456, nome: "Carmilla Karnstein", idade: 145 },
    { id: 7354, nome: "Armand", idade: 505 },
    { id: 82354, nome: "Claudia", idade: 9 },
    { id: 778659, nome: "Marius de Romanus", idade: 2178 },
    { id: 10654, nome: "Eric Northman", idade: 1100 },
    { id: 11788, nome: "Bill Compton", idade: 175 },
    { id: 162, nome: "Edward Cullen", idade: 118 },
    { id: 13, nome: "Alice Cullen", idade: 92 },
    { id: 144, nome: "Rosalie Hale", idade: 101 },
    { id: 15, nome: "Esme Cullen", idade: 117 }
];

console.log(usuarios);
// se negativo (ordem primeiro antes do segundo)
// se positivo (o segundo antes do primeiro)
// se retornar 0 ( mantém onde está)
usuarios.sort((primeiro, segundo) => {
    return primeiro.id - segundo.id
});
console.log(usuarios);

usuarios.sort((primeiro, segundo) => {
    return segundo.id - primeiro.id
});
console.log(usuarios);