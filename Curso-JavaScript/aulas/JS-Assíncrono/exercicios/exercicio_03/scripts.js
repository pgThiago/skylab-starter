function adicionar(){
    
    var ul = document.querySelector('ul')

    var minhaPromise = function(){  
            
        return new Promise(function(resolve, reject){

            var nomeUsuario = document.querySelector('input[name=user]')
            nomeUsuario = nomeUsuario.value      
            var container = document.querySelector('.git-repos')
            
            var xhr = new XMLHttpRequest()
            var url = 'https://api.github.com/users/' + nomeUsuario + '/repos'
            
            xhr.open('GET', url)
            xhr.send(null)
            
            if(xhr.readyState != 4)
                container.innerHTML = 'Carregando...'
            
            xhr.onreadystatechange = function(){  
                
                var container = document.querySelector('.git-repos')
                                
                if(xhr.readyState === 4){
                    container.innerHTML = ''
                    
                    if(xhr.status === 200){
                        
                        var data = JSON.parse(xhr.responseText)
                        
                        ul.innerHTML = ''
                        ul.innerHTML = '<h1>Repositórios:</h1>'      
                        
                        for(var i = 0; i < data.length; i++){
                            var li = document.createElement('li')
                            li.innerHTML = data[i].name
                            ul.appendChild(li)
                        }
                        container.appendChild(ul)
                        resolve()
                    }
                                                               
                    else
                        reject() 
                    
                }  
            }
        })
    }

    
    minhaPromise()
    .then(function(response) {     
        
        console.log('Deu bom')

    })
    .catch(function(error) { 

        console.log('Deu ruim')

    }) 

}


