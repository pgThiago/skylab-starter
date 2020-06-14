/* //OBS: Static method não instancia nem aceita o this

class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor(){
        super();
        this.usuario = 'Thiago';
    }

    mostraUsuario(){
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
   // MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario();
 */

 /* Const X Let */

//const a = 3
//a = 4
//console.log(a) 
/* const usuario = { nome: 'Thiago'}
usuario.nome = 'Diego'
console.log(usuario.nome) */
/*
function teste(x){
    let y = 2;
    if(x > 5){

        // posso declarar let y = 4

        console.log(x, y)
    }
}

teste(10)*/

/* array methods */

// Map
/* const arr = [2, 7, 5, 1, 10, 12, 14, 16, 18, 20, 100];
const newArr = arr.map(function(item, index){
    return item + index
}); */

//console.log(arr)
//console.log(newArr)

// Reduce
/* const sum = arr.reduce(function (total, next) { 
    return total + next
}) */

//console.log(sum)

//Filter

/* const filter = arr.filter(function (item) { 
    return item % 2 === 0;
})

//console.log(filter)

// Find

const find = arr.find(function (item) { 
    return item === 2;
})

console.log(find)
*/

// Arrow functions

/* const arr = [1, 3, 4, 5, 6];

const arrow = arr.map(item => ({ nome: 'Thiago' }));

console.log(arrow) */

// Desestruturação

/* const usuario = {
    nome: 'Thiago',
    idade: 23,
    endereco: {
        cidade: 'Ananindeua',
        estado: 'Pará'
    },
}; */

//const { nome, cidade, estado } = usuario.endereco;

/* const { nome, idade, endereco: { cidade, estado } } = usuario;

//console.log(estado, cidade)

function mostraNome({ nome, idade }){
    console.log(usuario.nome, usuario.idade)
}

mostraNome(usuario)
 */

// REST pega o resto das propriedades

/* const usuario = {
    nome: 'Thiago',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

//console.log(nome)
//console.log(resto)

const arr = [1, 2, 3, 4]

const [a, b, ...c] = arr; */

//console.log(a, b, c)

/* function soma(a, b, ...params){
    return params;
} */

//console.log(soma(1, 9, 5, 7, 10, 20));

// Spread

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3) */

/* const usuario = {
    nome: 'Thiago',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = { ...usuario, nome: 'Diego' }
console.log(usuario2) */



































