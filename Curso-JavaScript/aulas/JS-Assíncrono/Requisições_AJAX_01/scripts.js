var xhr = new XMLHttpRequest()

xhr.open('GET','http://api.github.com/users/pgThiago')
xhr.send(null)

var container = document.querySelector('.git')

xhr.onreadystatechange = function(){
   
    if(xhr.readyState === 4){
        var data = JSON.parse(xhr.responseText)
        console.log(Object.values(data)[0])
    }    

}
