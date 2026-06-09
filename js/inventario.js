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
        alert("Ingrese todos los datos");
        return;
    }

   
    if (/[a-zA-Z]/.test(codigo_producto)) {
        alert("El código no debe contener letras");
        return;
    }

  
    if (/\d/.test(nombre_producto)) {
        alert("El nombre no debe contener números");
        return;
    }

   
    if (/\d/.test(marca_producto)) {
        alert("La marca no debe contener números");
        return;
    }

 
    if (Number(precio_producto) <= 0) {
        alert("Ingrese un precio válido");
        return;
    }

   
    if (Number(cantidad_producto) <= 0) {
        alert("Ingrese una cantidad válida");
        return;
    }

    
    if (/\d/.test(unidad_medida)) {
        alert("La unidad de medida no debe contener números");
        return;
    }

    alert("Producto guardado correctamente");
}