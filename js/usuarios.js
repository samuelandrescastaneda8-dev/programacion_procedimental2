function ValidarDatos() {

    let nombre_completo = document.getElementById("nombre_completo").value.trim();
    let email = document.getElementById("email").value.trim();
    let numero_celular = document.getElementById("numero_celular").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validar campos vacíos
    if (nombre_completo === "") {
        Swal.fire("Campo vacío", "Ingrese el nombre completo.", "warning");
        return;
    }

    if (email === "") {
        Swal.fire("Campo vacío", "Ingrese el correo electrónico.", "warning");
        return;
    }

    if (numero_celular === "") {
        Swal.fire("Campo vacío", "Ingrese el número de celular.", "warning");
        return;
    }

    if (genero === "") {
        Swal.fire("Campo vacío", "Seleccione el género.", "warning");
        return;
    }

    if (fecha_nacimiento === "") {
        Swal.fire("Campo vacío", "Seleccione la fecha de nacimiento.", "warning");
        return;
    }

    if (direccion === "") {
        Swal.fire("Campo vacío", "Ingrese la dirección.", "warning");
        return;
    }

    if (password === "") {
        Swal.fire("Campo vacío", "Ingrese la contraseña.", "warning");
        return;
    }

    // Nombre completo: solo letras y espacios
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre_completo)) {
        Swal.fire("Dato inválido", "El nombre completo solo debe contener letras.", "error");
        return;
    }

    // Correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire("Dato inválido", "Ingrese un correo electrónico válido.", "error");
        return;
    }

    // Número celular: exactamente 10 números
    if (!/^\d{10}$/.test(numero_celular)) {
        Swal.fire("Dato inválido", "El número celular debe contener exactamente 10 dígitos.", "error");
        return;
    }

    // Dirección: debe contener letras y números
    if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(direccion)) {
        Swal.fire("Dato inválido", "La dirección debe contener letras y números.", "error");
        return;
    }

    // Contraseña: mínimo 8 caracteres
    if (password.length < 8) {
        Swal.fire("Dato inválido", "La contraseña debe tener al menos 8 caracteres.", "error");
        return;
    }

    // Registro exitoso
    Swal.fire({
        title: "¡Registro exitoso!",
        text: "Los datos fueron registrados correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    });
}

document.getElementById("boton-registrarse").onclick = ValidarDatos;