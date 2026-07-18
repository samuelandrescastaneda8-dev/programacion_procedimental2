function ValidarDatos() {

    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();
    let pedido = document.getElementById("pedido").value.trim();

    // Validar campos vacíos
    if (nombre === "") {
        Swal.fire("Campo vacío", "Ingrese el nombre.", "warning");
        return;
    }

    if (direccion === "") {
        Swal.fire("Campo vacío", "Ingrese la dirección.", "warning");
        return;
    }

    if (telefono === "") {
        Swal.fire("Campo vacío", "Ingrese el teléfono.", "warning");
        return;
    }

    if (email === "") {
        Swal.fire("Campo vacío", "Ingrese el correo electrónico.", "warning");
        return;
    }

    if (metodo_pago === "") {
        Swal.fire("Campo vacío", "Ingrese el método de pago.", "warning");
        return;
    }

    if (pedido === "") {
        Swal.fire("Campo vacío", "Ingrese el pedido.", "warning");
        return;
    }

    // Nombre: solo letras
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        Swal.fire("Dato inválido", "El nombre solo debe contener letras.", "error");
        return;
    }

    // Dirección: debe contener letras y números
    if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(direccion)) {
        Swal.fire("Dato inválido", "La dirección debe contener letras y números.", "error");
        return;
    }

    // Teléfono: exactamente 10 números
    if (!/^\d{10}$/.test(telefono)) {
        Swal.fire("Dato inválido", "El teléfono debe contener exactamente 10 números.", "error");
        return;
    }

    // Correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire("Dato inválido", "Ingrese un correo electrónico válido.", "error");
        return;
    }

    // Método de pago: solo letras
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(metodo_pago)) {
        Swal.fire("Dato inválido", "El método de pago solo debe contener letras.", "error");
        return;
    }

    // Pedido: no puede ser solo números
    if (/^\d+$/.test(pedido)) {
        Swal.fire("Dato inválido", "El pedido debe contener una descripción.", "error");
        return;
    }

    Swal.fire({
        title: "¡Pedido registrado!",
        text: "Los datos fueron registrados correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar"
    });
}

document.getElementById("boton-pedir").onclick = ValidarDatos;






















