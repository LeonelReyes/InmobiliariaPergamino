console.log("funciona")
// Se obtiene el elemento form del html
const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {

  // Se obtienen todos los valores de los inputs que interesan validar
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  
  // Elemento div vacío con id "error" donde se cargarán los mensajes
  const error = document.getElementById("error");
  const MENSAJES = [];
  
  // Lista de mensajes que inicia vacía y se va llenando a medida que se encuentra un error
  error.innerText = "";
  if (!isValid(nombre)) {
    MENSAJES.push("*Por favor, introduzca un nombre válido");
  }

  if (!isValid(email)) {
    MENSAJES.push("*Por favor, introduzca su correo electrónico");
  }

  if (!email.includes("@")) {
    MENSAJES.push("*La dirección de correo electrónico debe contener @");
  }

  if (email.slice(-4) !== '.com' && email.slice(-3) !== '.ar') {
      MENSAJES.push("*La dirección de correo electrónico debe pertenecer a un dominio válido (.com, .ar)");
  };

  if (!isValid(telefono)) {
    MENSAJES.push("*Por favor incluya un telefono válido");
  }

  
  if (!isValid(mensaje) || mensaje.length < 10) {
    MENSAJES.push("*Su mensaje debe contener al menos 10 caracteres");
  }

  // Si la lista de mensajes tiene al menos un elemento, se ejecuta lo siguiente, caso contrario, se envía el formulario
  if (MENSAJES.length > 0) {
    e.preventDefault();
    // Se cargan todos los errores de la lista de mensajes en el elemento div unidos por "\n" que es un quiebre de linea
    error.innerText = MENSAJES.join("\n");
  
  }

  
  if(MENSAJES.length == 0){
    console.log("todo ok")
    swal("Realizado", "Ha sido enviado correctamente!");
  }
});

// Esta funcion comprueba que los inputs no se envíen en blanco/nulos
function isValid(element) {
    return element !== '' && element !== null;
}

