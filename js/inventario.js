function ValidarDatos() {

    let codigo_producto = document.getElementById("codigo_producto").value.trim();
    let nombre_producto = document.getElementById("nombre_producto").value.trim();
    let precio_producto = document.getElementById("precio_producto").value.trim();
    let cantidad_producto = document.getElementById("cantidad_producto").value.trim();
    let marca_producto = document.getElementById("marca_producto").value.trim();
    let categoria_producto = document.getElementById("categoria_producto").value.trim();
    let unidad_medida = document.getElementById("unidad_medida").value.trim();

    if (
        codigo_producto === "" ||
        nombre_producto === "" ||
        precio_producto === "" ||
        cantidad_producto === "" ||
        marca_producto === "" ||
        categoria_producto === "" ||
        unidad_medida === ""
    ) {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Debe ingresar todos los datos."
        });
        return;
    }

    if (!/^\d{4,10}$/.test(codigo_producto)) {
        Swal.fire({
            icon: "error",
            title: "Código inválido",
            text: "El código debe contener únicamente números (4 a 10 dígitos)."
        });
        return;
    }


    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/.test(nombre_producto)) {
        Swal.fire({
            icon: "error",
            title: "Nombre inválido",
            text: "El nombre solo puede contener letras y espacios (3 a 50 caracteres)."
        });
        return;
    }

    if (isNaN(precio_producto) || Number(precio_producto) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Precio inválido",
            text: "Ingrese un precio mayor que cero."
        });
        return;
    }

    if (!/^\d+$/.test(cantidad_producto) || Number(cantidad_producto) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Cantidad inválida",
            text: "Ingrese una cantidad válida mayor que cero."
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{2,30}$/.test(marca_producto)) {
        Swal.fire({
            icon: "error",
            title: "Marca inválida",
            text: "La marca solo puede contener letras, números y espacios."
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$/.test(categoria_producto)) {
        Swal.fire({
            icon: "error",
            title: "Categoría inválida",
            text: "La categoría solo puede contener letras y espacios."
        });
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,20}$/.test(unidad_medida)) {
        Swal.fire({
            icon: "error",
            title: "Unidad de medida inválida",
            text: "La unidad de medida solo puede contener letras."
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "¡Correcto!",
        text: "Producto guardado correctamente.",
        confirmButtonText: "Aceptar"
    });
}

document.getElementById("boton-guardar").onclick = ValidarDatos;