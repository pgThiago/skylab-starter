/* Transformar pra async await */

// 1° Função

/* const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    
    delay().then(() => {
        console.log('1s');
    
        delay().then(() => {
            console.log('2s');
    
            delay().then(() => {
                console.log('3s');
            });

        })

    });

} 
umPorSegundo(); */
// Com async await

/* const delay = () => new Promise((resolve, reject) => setTimeout(resolve, 1000));

async function umPorSegundo(){

    await delay()
        console.log('1s');
    await delay()
        console.log('2s');
    await delay()
        console.log('3s');
    
}
umPorSegundo(); */

// 2° Função

/* 
import axios from 'axios';
function getUserFromGithub(user) {
    
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe');
    })
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123'); 
*/

/* import axios from 'axios';

async function getUserFromGithub(user){

    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    }
    catch(error){
        console.warn('Deu pau, arruma lá.');
    }

}

getUserFromGithub('torvalds')
getUserFromGithub('diego3g124123') 
*/

/* Função 3 */

/* class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Repositório não existe');
        })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv'); */

/* 
import axios from 'axios';

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        }
        catch(error){
            console.log('Repositório não existe');
        }
        
    }
}
Github.getRepositories('pgThiago/css-grid-and-flex-box');
Github.getRepositories('rocketseat/dslkvmskv'); 
*/

/* Função 4 */

/* const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
    console.log(response.data);
    })
    .catch(err => {
    console.log('Usuário não existe');
    });
   }
buscaUsuario('diego3g'); */

import axios from 'axios';

const buscaUsuario = async (user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);        
    }
    catch(error){
        console.log('Deu pau');
    }
}

console.log(buscaUsuario('filipedeschamps'));

















