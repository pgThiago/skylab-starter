const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// MAP para retornar as idades

/* const idades = usuarios.map(users => users.idade)

console.log(idades) */

// FILTER para criar uma variável que retorna apenas os usuários que trabalham na 
// rocketseat e são maiores de idade

//const maioresEdaRocketseat = usuarios.filter(users => (users.idade > 18 && users.empresa == 'Rocketseat'))
//console.log(maioresEdaRocketseat)

// FIND para encontrar um usuário que trabalha no Google

//const googleWorker = usuarios.find(users => (users.empresa == 'Google'))
//console.log(googleWorker)

// Unindo operações
/* Multiplicar a idade de todos usuários por dois 
e depois realizar um filtro nos usuários que possuem 
no máximo 50 anos:*/
/* 
const quaseCinquentoes = usuarios.map(usuarios => {

    usuarios.idade *= 2;
    return usuarios

}).filter(usuarios => (usuarios.idade <= 50))

console.log(quaseCinquentoes) */























