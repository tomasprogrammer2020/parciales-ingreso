//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var x = prompt("Ingrese un mes del año");

    switch (x) {
        case "enero":
        case "febrero":

            alert("Veranitoooo!!!");
            break;
        default:
            alert("Extraño el veranito!!");
            break;
    }


}

