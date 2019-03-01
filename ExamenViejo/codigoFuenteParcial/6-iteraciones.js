//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero;
    var maximo;
    var minimo;
    var flag = 0;
    var diamax;
    var diamen;


    for (var i = 1; i <= 7; i++) {
        numero = parseFloat(prompt("Ingrese la venta del dia " + i));

        while (numero <= 0 || isNaN(numero)) {
            numero = parseFloat(prompt("Error. Reingrese la venta del dia " + i));
        }

        if (numero > maximo || flag == 0) {
            maximo = numero;
            // diamax = i;

        }
        if (numero < minimo || flag == 0) {
            minimo = numero;
            flag = 1;
            //  diamen = i;

        }

    }
    console.log("La mayor venta fue de: $" + maximo + ". Y la menor venta fue de: $" + minimo);
}





