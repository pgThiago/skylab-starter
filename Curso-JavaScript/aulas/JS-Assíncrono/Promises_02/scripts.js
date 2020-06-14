var minhaPromise = function(){
    
    return new Promise(function(resolve, reject){
        
        var xhr = new XMLHttpRequest()
        
        xhr.open('GET','http://api.github.com/users/pgThiago')
        xhr.send(null)
        if(xhr.readyState != 4)
            

        xhr.onreadystatechange = function(){
   
            if(xhr.readyState === 4){

                if(xhr.status === 200)
                    resolve(JSON.parse(xhr.responseText))
                
                else
                    reject('Deu pau, reseta.')
                
            }    
        }
    })
}


minhaPromise()
.then(function(response) { console.log(response) })
.catch(function(error) { console.warn(error) })

