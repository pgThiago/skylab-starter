
function adicionar(){
    
    var nomeUsuario = document.querySelector('input[name=user]')
    nomeUsuario = nomeUsuario.value
    
    var container = document.querySelector('.git-repos')
    
    var url = 'https://api.github.com/users/' + nomeUsuario + '/repos'

    axios.get(url)
    
    .then(function(response) { 
        
        var ul = document.querySelector('ul')
        ul.innerHTML = ''
        ul.innerHTML = 'Repositórios:'      
        for(var i = 0; i < response.data.length; i++){
        
            var li = document.createElement('li')
            li.innerHTML = response.data[i].name
            ul.appendChild(li)
            
        }
        
    })

    .catch(function(error) { 

        container.innerHTML = 'Esse usuário não existe.'

    })
     
}
