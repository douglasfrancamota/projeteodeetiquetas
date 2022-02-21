

const button = document.querySelector('button');



button.addEventListener('click', function(e){
    e.preventDefault();
    const nomes = document.querySelector('#Nome');
    const valor = nomes.value;

    document.write(valor);
    

})



//button.addEventListener('click', poenatela);
