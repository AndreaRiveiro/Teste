
$("#fontes").on("change", function() {
    let fonte = $(this).val();   // aqui vc pega cada valor selecionado com o this
    console.log(fonte);
    switch (fonte != 0) {
        case 1:
            $("body").css({"font-family":"Lato, sans-serif"});
            break;
    }
    console.log(fonte);  
});
  

  