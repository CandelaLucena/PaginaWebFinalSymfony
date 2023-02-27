//Script para iluminar la barra de navegación según donde te encuentres dentro de la página
$(document).ready(function(){
    $('.activenav').animate({
        color: "#34AA62"
    }, 1500);
});

//Script general para deshabilitar el click derecho de todas las páginas
document.addEventListener('contextmenu', noClick);
function noClick(event){
    event.preventDefault();
}  