$(document).ready(function(){
    //carrega raças de cachorros
    $('#selectRacas').click(function(e){
        var raca = $('#selectRaca').val();
        $.getJSON('https://dog.ceo/api/breed/hound/images', function(data){
            if (data.length > 0){   
                var option = '<option>Selecione a Raça</option>';
                $.foreach(data, function(i, obj){
                    option += '<option>'+message[i]+'</option>';
                })
                $('#mensagem').html('<span class="mensagem">Total de cidades encontradas.:'+data.length+'</span>');
            }
            $('#cmselectRacas').html(option).show();
        })
    })
})