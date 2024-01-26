document.addEventListener('DOMContentLoaded', function(){
    var texto = document.getElementsByClassName('p');

    texto.addEventListener('click', function(){
        alert('Clique no texto');
    })
});