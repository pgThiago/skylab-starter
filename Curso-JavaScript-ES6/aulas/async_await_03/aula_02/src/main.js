import axios from 'axios';

class Api{

    static async getUserInfo(userName){
        try{
            const response = await axios.get(`https://api.github.com/users/${userName}`);

            console.log(response);
        }
        catch(error){
            console.log('Deu pau, arruma lá')
        }
        

    }

}

Api.getUserInfo('torvaldss');