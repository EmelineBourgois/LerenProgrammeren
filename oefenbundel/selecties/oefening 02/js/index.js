document.getElementById("submit").onclick= function (){
var leeftijd = document.getElementById("jaarleeftijd").value;

if (leeftijd >= 18) {
    console.log("Je bent " + leeftijd + " jaar oud. Je mag deelnemen aan de spelen van de nationale loterij.");

    var volledigBulletin = confirm("Wil je een volledig bulletin van 12 vakjes spelen?");

    if (volledigBulletin) {
        console.log("De kostprijs voor een volledig bulletin van 12 vakjes is 20 euro.");
    } else {
        var aantalVakjes = prompt("Hoeveel vakjes wil je spelen (2, 4, 6, 8 of 10)?");

        switch (parseInt(aantalVakjes)) {
            case 2:
                console.log("De kostprijs voor 2 vakjes is 4 euro.");
                break;
            case 4:
                console.log("De kostprijs voor 4 vakjes is 8 euro.");
                break;
            case 6:
                console.log("De kostprijs voor 6 vakjes is 12 euro.");
                break;
            case 8:
                console.log("De kostprijs voor 8 vakjes is 16 euro.");
                break;
            case 10:
                console.log("De kostprijs voor 10 vakjes is 18 euro.");
                break;
            default:
                console.log("Ongeldig aantal vakjes. Kies uit 2, 4, 6, 8 of 10.");
        }
    }
} else {
    console.log("Om deel te nemen aan de spelen van de nationale loterij moet je minimum 18 jaar oud zijn.");
}}