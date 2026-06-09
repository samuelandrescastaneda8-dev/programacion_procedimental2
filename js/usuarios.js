function ValidarDatos() {

    let nombre_completo = document.getElementById("nombre_completo").value.trim();
    let email = document.getElementById("email").value.trim();
    let numero_celular = document.getElementById("numero_celular").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let password = document.getElementById("password").value.trim();

  
    if (
        nombre_completo === "" ||
        email === "" ||
        numero_celular === "" ||
        genero === "" ||
        fecha_nacimiento === "" ||
        direccion === "" ||
        password === ""
    ) {
        alert("Debe completar todos los campos");
        return;
    }

    
    if (/\d/.test(nombre_completo)) {
        alert("El nombre completo no debe contener números");
        return;
    }

  
    if (!email.includes("@")) {
        alert("Ingrese un correo electrónico válido");
        return;
    }

    
    if (/[a-zA-Z]/.test(numero_celular)) {
        alert("El número celular no debe contener letras");
        return;
    }

   
    if (numero_celular.length !== 10) {
        alert("El número celular debe tener 10 dígitos");
        return;
    }

    
    if (direccion.length < 5) {
        alert("Ingrese una dirección válida");
        return;
    }

    
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
        return;
    }

    alert("Registro exitoso");
}

