let itens= document.querySelector('#selectRacas');

const cachorros = 'https://dog.ceo/api/breeds/list/all'; 

fetch(cachorros)
.then(response => response.json())
    .then(function(json){
       console.log(json);
       itens.textcontent = json.message;
       console.log(itens);
       //itens.appendChild(json.message)
    //   // for(index in json) {
    //     itens.options[select.options.length] = new Option(json.message[index], index);
    // }
    //     for(let i=0; i<itens.length; i++){
    //         let option = document.createElement("option");
    //         itens[i].add(option);
    //     } 
    });

    