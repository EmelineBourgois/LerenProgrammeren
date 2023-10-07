let eindGetal = Number(prompt("geef een eindgetal in"));

let random = Math.floor(Math.random() * (eindGetal - 0 + 1) + 0);

console.log(random)

let raden = Number(prompt("Raad het getal tussen 0 en " + eindGetal));
let i = 0;

while (raden !== random) {
    if (raden < random) {
        console.log("Het getal is groter");
    } else if (raden > random) {
        console.log("Het getal is kleiner");
    }
    raden = Number(prompt("Probeer opnieuw: Raad het getal tussen 0 en " + eindGetal));
    i++;
}

document.write("Gefeliciteerd! Je hebt het juiste getal geraden in. " + i + " aantal keer");