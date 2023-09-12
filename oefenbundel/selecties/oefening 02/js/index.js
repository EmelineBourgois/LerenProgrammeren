let leeftijd = prompt("wat is jouw leeftijd?(cijfernotatie)");

if(leeftijd >= 18){
    document.write("je bent ", leeftijd," oud. Je mag deelnemen aan de spelen van de Nationale Lotterij!");

    var bulletinVolledig = confirm("wil je een volledige bulletin van 12 spelen?")
    if (bulletinVolledig){
        document.write("je betaald hier 20 euro voor")
    }
    let bulletin = prompt ("hoeveel wil je er spelen? (2,4,6,8 of 10)");
    switch (bulletin){
        case '10' :
            document.write("18 euro");
            break;
        case '8' :
            console.log("16 euro");
            break;
        case '6' :
            console.log("12 euro");
            break;
        case '4' :
            console.log("8 euro");
            break;
        case '2' :
            document.write("4 euro");
            break;
        default:
            document.write("niet mogelijk");
    }
} else{ document.write("om deel te nemen aan de spelen van de Nationale lotterij moet je minstens 18 jaar oud zijn");
}