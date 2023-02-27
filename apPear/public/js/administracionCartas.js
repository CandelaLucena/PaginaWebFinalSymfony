$(document).ready(function(){
    //Script inicio de los colores de los botones de Borrar e Ir a Descripción
    $(".irBorrar").css('background-color','#34AA62')
    $(".irDescripcion").css('background-color','#34AA62')
    $(".irBorrar").css('border-color','#34AA62')
    $(".irDescripcion").css('border-color','#34AA62')
    $(".irEdicion").css('background-color','#34AA62')
    $(".irEdicion").css('border-color','#34AA62')

    //Script para poder mover las cartas a voluntad
    $( ".sortable" ).sortable();

    //Scripts para iluminar en rojo el boton de Borrar cuando estas encima de el y dejar de iluminarlo cuando ya no estas sobre el
    $(".irBorrar").mouseover(function(){
        $(this).animate({
            backgroundColor: "#CC6666",
            borderColor: "#CC6666"
        }, 0);
    });
    $(".irBorrar").mouseout(function(){
        $(this).animate({
            backgroundColor: "#34AA62",
            borderColor: "#34AA62"
        }, 0);
    });

    //Boton para borrar del DOM la carta al clickear Borrar
    $(".irBorrar").click(function(){
        $(this).parent().parent().parent().remove();
    });

    //Boton para crear una carta en DOM
    $(".crearCarta").click(function(){
        $.ajax({
            url: "../js/archivoCarta.txt",
            context: document.body,
            success: function(response){
                $('#invisible').after(response);
            }
        });
    });

    //Script para hacer grande y pequeñas las cartas
    $(".cartita").mouseover(function(){
        $(this).css('transform','scale(1.1)')
    });
    $(".cartita").mouseout(function(){
        $(this).css('transform','scale(1)')
    });
});