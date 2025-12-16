const alerta = document.getElementById('alerta');

function botonAccionado () {
    nombreInput = document.getElementById("nombre").value
    mensajeInput = document.getElementById("mensaje").value
    correoInput = document.getElementById("correo").value
    

  if ( mensajeInput === "" || nombreInput === "" || correoInput === "") {
      alerta.innerHTML =  ' <div class="col-12 mx-auto alert alert-danger" role="alert">Rellene todos los campos para continuar</div>'
  }
  else {
      alerta.innerHTML =  ' <div class="col-12 mx-auto alert alert-success" role="alert">Envio completado satisfactoriamente</div>'

  } 
}
