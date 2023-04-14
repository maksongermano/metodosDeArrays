//o localeCompare() Retorna um número que indica se a string de referencia vem antes, igual ou depois a string comparada.

const personagens = [
    "Drácula",
    "Lestat de Lioncourt",
    "Akasha",
    "Louis de Pointe du Lac",
    "Selene",
    "Carmilla Karnstein",
    "Armand",
    "Claudia",
    "Marius de Romanus",
    "Eric Northman",
    "Bill Compton",
    "Edward Cullen",
    "Alice Cullen",
    "Rosalie Hale",
    "Esme Cullen"
];
//ordenação crescente
personagens.sort((a, b) => {
    return a.localeCompare(b);// ele vai retornar um numero, assim ele vai fazer a ordenação tal qual o de números 
});
console.log(personagens);

// ordenação decrescente
personagens.sort((a, b) => {
    return b.localeCompare(a);// ele vai retornar um numero, assim ele vai fazer a ordenação tal qual o de números 
});
console.log(personagens);
