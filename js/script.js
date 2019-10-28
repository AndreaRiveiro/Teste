let opcao = document.querySelector('#selectRaca')

window.addEventListener("load", carregar);

function carregar(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    /*.then(json => console.log(json)) é =a:  then (function(json){ console.log(json)}) */
    .then(function(json){ 
     /* titulo.appendChild(json.title)*/

     opcao = json
    })
}