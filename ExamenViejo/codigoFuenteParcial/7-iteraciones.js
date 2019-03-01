//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;
    var notabaja;
    var contadorvaronesmas6 = 0;
    var acumnotas = 0;
    var promedio;
    var flag = 0

    for (var i = 1; i <= 6; i++)

        nota = parseInt(prompt("Ingrese su nota"))
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        nota = parseInt(prompt("Error. Rengrese su nota"))
    }
    sexo = prompt("Ingrese su sexo")
    while (sexo != "m" && sexo != "f") {
        sexo = prompt("Error. Rengrese su sexo")
    }
    acumnotas += nota;

    if (nota < notabaja || flag == 0) {
        notabaja = nota;
        flag = 1;
        if (sexo == "m" && nota >= 6) {
            contadorvaronesmas6++
        }

    }//Fin del FOR.
    promedio = acumnotas / 6
    


}

