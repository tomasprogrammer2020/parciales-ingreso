//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var precio = parseInt(prompt("Ingrese el precio"));
    var iva = precio * 0.21;
    var preciofinal = precio + iva;
    document.getElementById("importe").value = preciofinal;
    alert("Usted esta pagando: " + iva + " de iva");

}

