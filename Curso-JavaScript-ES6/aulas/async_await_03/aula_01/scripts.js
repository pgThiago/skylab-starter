const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/* 
minhaPromise()
.then(response => {
    console.log(response)
})

.catch(err => {
    console.log(err);
}); */

// A partir do ES8 a gente consegue utilizar a sintaxe do Async Await

//async function executaPromise(){

    // Aqui dentro eu posso utilizar o await, que seria o .then na versão antiga

//    console.log(await minhaPromise()); // Um "OK" a cada 2 segundos, um esperando pelo término do outro
//    console.log(await minhaPromise());
//    console.log(await minhaPromise());


    //const response = await minhaPromise();
    /* console.log(response);
    console.log(response);
    console.log(response); */
    

    // Na versão antiga os 3 consoles.logs acima ficariam mais ou menos assim:
    /* minhaPromise().then(response => {
        console.log(response)

        minhaPromise().then(response => {
            console.log(response)

            minhaPromise().then(response => {
                console.log(response)
            })

        })

    }) */

//}


// async function executaPromise() com arrow function
// o async vem antes dos paramêtros da arrow
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

//console.log(executaPromise());