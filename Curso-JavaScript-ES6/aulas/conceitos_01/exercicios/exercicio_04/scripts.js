// 4.1

/* const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome } = empresa 
const { endereco: {  cidade } } = empresa
const { endereco: { estado } } = empresa

/* Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte: */

/*console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC */

// 4.2

const usuarios = {
    nome: 'Thiago',
    idade: 23
}

function mostraInfo( {nome, idade} = usuarios ) {
    // Substituir esse return
    //return `${usuario.nome} tem ${usuario.idade} anos.`;
    // Substituindo
    return `${nome} tem ${idade} anos.`;
}

// Por esse return, através da desestruturação
// return `${nome} tem ${idade} anos.`;

console.log(mostraInfo(usuarios))





















