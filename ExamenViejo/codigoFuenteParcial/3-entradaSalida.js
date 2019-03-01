//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById("ancho").value;
    var largo = document.getElementById("largo").value;
    var perimetro = (largo + ancho)*2;
    var alambre = perimetro * 6;

    alert("Se necesitan " + alambre + " metros de alambre");

	
}

