document.getElementById("bereken").onclick = function () {

    let leeftijd = Number(document.getElementById("mijnleeftijd").value);


    if (leeftijd >= 18) {
        document.write("je bent ", leeftijd, " oud. Je mag deelnemen aan de spelen van de Nationale Lotterij!")
    } else {
        document.write("om deel te nemen aan de spelen van de Nationale lotterij moet je minstens 18 jaar oud zijn")

    }
}
