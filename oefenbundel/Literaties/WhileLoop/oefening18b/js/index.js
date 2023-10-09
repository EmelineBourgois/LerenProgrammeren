let eindGetal = Number(prompt("Geef een eindgetal in"));

let random = Math.floor(Math.random() * (eindGetal + 1));

document.write(random);

let raden = Number(prompt("Raad het getal tussen 0 en " + eindGetal));
let i = 0;

while (raden !== random) {
    if (raden < random) {
        document.write("<br>Het getal is groter");
    } else if (raden > random) {
        document.write("<br>Het getal is kleiner");
    }
    raden = Number(prompt("Probeer opnieuw: Raad het getal tussen 0 en " + eindGetal));
    i++;
}

document.write("<br>Gefeliciteerd! Je hebt het juiste getal geraden in " + i + " aantal keer.");
