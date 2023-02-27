window.onload = function(){
  //Script para mantener el focus en el input del nombre en el registro
  document.getElementById("stringNombre").focus();
  
  //Script que comprueba si se han rellenado correctamente para iluminar el boton de registro en verde
  var botonVerde = document.getElementsByClassName("boxcomprobar");
  for (let index = 0; index < botonVerde.length; index++) {
    botonVerde[index].addEventListener("mouseout", comprobarVerde);
  }

  //Script que comprueba si se han rellenado bien los campos para enviar un mensaje de correcto o error al enciar el formulario de registro
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", comprobar)

  //Script que resetea todo el formulario de registro si se pulsa
  var reseteo = document.getElementById("botonReseteo");
  reseteo.addEventListener("click", resetear);
  
}
  
function comprobar(event){
  
  var input1 = document.getElementById("stringNombre");
  var input2 = document.getElementById("stringApellido");
  var input3 = document.getElementById("integerTelefono");
  var input4 = document.getElementById("integerDni");
  var input5 = document.getElementById("integerEdad");

  var input6 = document.getElementById("pregunta_hombre").checked;
  var input7 = document.getElementById("pregunta_mujer").checked;
  var input8 = document.getElementById("publicidad").checked;

  if(input1.value=="" || input2.value=="" || !(/^\d{9}$/.test(input3.value)) || !(/[^@ \t\r\n]+@gmail\.com/.test(input4.value)) || !(/^\d{2}$/.test(input5.value)) || input8 == false || (input6 == false && input7 == false)){
    alert("¡Faltan campos que rellenar correctamente!");
    event.preventDefault();
  }else{
    alert("¡Envió tus datos correctamente!");
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#6C757D";
  }
}

function comprobarVerde(){
  var input1 = document.getElementById("stringNombre");
  var input2 = document.getElementById("stringApellido");
  var input3 = document.getElementById("integerTelefono");
  var input4 = document.getElementById("integerDni");
  var input5 = document.getElementById("integerEdad");

  var input6 = document.getElementById("pregunta_hombre").checked;
  var input7 = document.getElementById("pregunta_mujer").checked;
  var input8 = document.getElementById("publicidad").checked;

  if(!(input1.value=="") && !(input2.value=="") && (/^\d{9}$/.test(input3.value)) && (/[^@ \t\r\n]+@gmail\.com$/.test(input4.value)) && (/^\d{2}$/.test(input5.value)) && input8 == true && (input6 == true  || input7 == true )){
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#34AA62";
  }else{
    var boton = document.getElementById("botonEnviar")
    boton.style.backgroundColor = "#6C757D";
  } 
}
  
function resetear(event){
  document.getElementById("formulario").reset();
  alert("¡Los datos se resetearon!");
  //event.stopPropagation();
}