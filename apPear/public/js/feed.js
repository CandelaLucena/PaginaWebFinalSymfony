$(document).ready(function(){
    //Script inicio de los colores de los botones de Borrar e Ir a Descripción
    $(".irDescripcion").css('background-color','#34AA62')
    $(".irDescripcion").css('border-color','#34AA62')

    //Script para hacer grande y pequeñas las cartas
    $(".cartita").mouseover(function(){
        $(this).css('transform','scale(1.1)')
    });
    $(".cartita").mouseout(function(){
        $(this).css('transform','scale(1)')
    });
});