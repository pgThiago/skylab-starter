// 3.1 Transformar em arrow

/* const arr = [1, 2, 3, 4, 5];
    arr.map(function(item) {
    return item + 10;
}); */

/* const arr = [1, 2, 3, 4, 5];
arr.map(item => (item + 10));
console.log(arr) */

// 3.2

/* const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
    return usuario.idade;
} */

/* const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => (usuario.idade)
console.log(mostraIdade(usuario)) */

// 3.3


/* const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome); */

/* const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ( { nome, idade } );

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
 */


// 3.4

const promise = function() {
    
    return new Promise(function(resolve, reject) { 
        
        return resolve();

    })
} 


const promise = () => new Promise( (resolve, reject) => resolve() )

