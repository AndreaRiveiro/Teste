
if(typeof(Storage)!='undefined'){
    let raca = localStorage.setItem("raca", "vazio");

    $("option").on("change", function(){
        raca = $(this).val();
})
}