import ClasseUsuario from './functions'; 
// Export defaul me permite chamar a classe com qualquer nome ( ClasseUsuario, nesse caso )
import { idade } from './functions';

import { idade as IdadeUsuario } from './functions';
// As chaves {} indicam que estou importando uma variavel, e não uma function
console.log(idade);
console.log('Idade renomeada: ' + IdadeUsuario); 
ClasseUsuario.info();

/*

1º exercício:

Crie um arquivo chamado functions.js com o seguinte conteúdo:
export const idade = 23;
export default class Usuario {
    static info() {
        console.log('Apenas teste');
    }
}
1.1
Agora em seu arquivo principal import apenas a classe Usuario renomeando-a para ClasseUsuario
e chame a funão info();
1.2
Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
1.3
Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
para IdadeUsuario.

*/


/* 

    import defaultExport, * as name from "module-name"; 

*/