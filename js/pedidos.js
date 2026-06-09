
function ValidarDatos() {

    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();
    let pedido = document.getElementById("pedido").value.trim();

   
    if (
        nombre === "" ||
        direccion === "" ||
        telefono === "" ||
        email === "" ||
        metodo_pago === "" ||
        pedido === ""
    ) {
        alert("Ingrese todos los datos");
        return;
    }

    
    if (/\d/.test(nombre)) {
        alert("El nombre no debe contener números");
        return;
    }

    
    if (/[a-zA-Z]/.test(telefono)) {
        alert("El teléfono no debe contener letras");
        return;
    }

    
    if (!email.includes("@")) {
        alert("El correo electrónico debe contener @");
        return;
    }

    
    if (!isNaN(metodo_pago)) {
        alert("El método de pago no puede ser un número");
        return;
    }

    alert("Pedido registrado correctamente");
}






























jejejejew xd uwu onichan sempai <3 