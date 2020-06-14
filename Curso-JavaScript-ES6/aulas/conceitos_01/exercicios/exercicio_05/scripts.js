// 5.1
/* const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x)
console.log(y) */

/* const somaTudo = (...params) => {
    let soma = 0
    
    for(let i = 0; i < params.length; i++){
        soma += params[i]
    }
    return soma
}

console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) */


//const lotParams = (...params) => params += params
//console.log(lotParams(5, 10, 15, 27, 19))

// 5.2

//A partir do objeto e utilizando o operador spread:

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' }
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } }

console.log(usuario2)
console.log(usuario3)
//Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.