let hoeveel = Number(prompt("Geef een getal in:"));
let som = 0;

while (hoeveel >= 0) {
    som += hoeveel;

    let getal = Number(prompt("Geef een volgend getal in:"));
    if (getal < 0) {
        break;
    }
    hoeveel = getal;
}

document.write("De som van de ingevoerde getallen is: " + som);