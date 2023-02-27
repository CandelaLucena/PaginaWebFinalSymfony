$(document).ready(function(){
    //Script para iluminar el boton de login cuando se hayan rellenado ambos cambos
    $('#passId').mouseout(function(){
        if(($.trim($('#emailId').val()) != '') && ($.trim($('#passId').val()) != '')){
            $('.botonEnviar').animate({
                backgroundColor : "#34AA62" 
            }, 1500);
        }else{
            $('.botonEnviar').animate({
                backgroundColor: "#6C757D"
            }, 1500);
        }
    });
});