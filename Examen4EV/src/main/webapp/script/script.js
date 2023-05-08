// AUTOR: Sergio García Barrera

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function registro() {
    // Crear registro
    class registroUsuario {
        constructor(nombre, apellidos, pregunta, emailR, passwd1, passwd2) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.pregunta = pregunta;
            this.emailR = emailR;
            this.passwd1 = passwd1;
            this.passwd2 = passwd2;
        }
    }
    
    // Guardar valores del formulario
    if (document.getElementById("nombre").value == "") {
        alert("Nombre debe ser rellenado");
        return false;
    } else { var nombre = document.getElementById("nombre").value; }
    
        if (document.getElementById("apellidos").value == "") {
        alert("Apellidos debe ser rellenado");
        return false;
    } else { var apellidos = document.getElementById("apellidos").value; }

    if (document.getElementById("pregunta").value == "") {
        alert("Pregunta debe ser respondida");
        return false;
    } else { var pregunta = document.getElementById("pregunta").value; }

    if (document.getElementById("emailR").value == "") {
        alert("Email debe ser rellenado");
        return false;
    } else { var emailR = document.getElementById("emailR").value; }

    if (document.getElementById("passwd1").value == "") {
        alert("Contraseña debe ser rellenado");
        return false;
    } else { var passwd1 = document.getElementById("passwd1").value }
    
    // COMPROBACION DE CONTRASEÑA
     if (document.getElementById("passwd2").value != document.getElementById("passwd1").value) {
        alert("Las contraseñas no son iguales");
        return false;
    } else { var passwd2 = document.getElementById("passwd2").value }
    
	


    // Crear usuario
    var user = new registroUsuario(nombre, apellidos, pregunta, emailR, passwd1, passwd2);
    usuarios.push(user);

    // Guardar usuarios en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    // Redirigir
    window.location = "login.html";
    alert("Sera redirigido al inicio de session");  
}


// INICIO DE SESSION

function login() {
	// cargar el local storage
	var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


  // Obtener valores del formulario
  var email = document.getElementById("emailLogin").value;
  var passwd = document.getElementById("passwd").value;
  
  // Buscar email en la lista de usuarios
  var encontrado = false;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].emailR === email) {
      encontrado = true;
      // Comprobar si la contraseña es correcta
      if (usuarios[i].passwd1 === passwd) {
        window.location = "bienvenida.html";
        alert("Inicio de sesión exitoso");
        return true;
      } else {
        alert("Contraseña incorrecta");
        return false;
      }
    }
  }
  // Si el email no fue encontrado
  if (!encontrado) {
    alert("Email no registrado");
    return false;
  }
}

// Para redirigir del login a recuperar pass
function redirigir(){
	window.location(recuperarPass.html);
	alert("Será redirigido a recuperar contraseña");
}


// RECUPERAR CONTRASEÑA
function recuperarPass() {
var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
  // Obtener valores del formulario
  var correo = document.getElementById("correo").value;
  var respuesta = document.getElementById("respuesta").value;
  
  // Buscar usuario en la lista de usuarios
  var encontrado = false;
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].emailR === correo) {
      encontrado = true;
      if (usuarios[i].pregunta === respuesta) {
		  // Si la respuesta es correcta, solicitar la nueva contraseña
		    var nuevaPass = prompt("Ingrese su nueva contraseña");
		    
		    // Actualizar la contraseña del usuario en la lista de usuarios
		    usuarios[i].passwd1 = nuevaPass;
		    
		    // Guardar la lista de usuarios actualizada en el localStorage
		    localStorage.setItem('usuarios', JSON.stringify(usuarios));
		    window.location = "login.html";
		    alert("Contraseña actualizada correctamente");
	  }
    }
  }
  
  // Si el email no fue encontrado
  if (!encontrado) {
    alert("Email no registrado");
    return false;
  }
 }
