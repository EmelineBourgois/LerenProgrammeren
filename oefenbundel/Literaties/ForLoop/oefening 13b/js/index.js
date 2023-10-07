let getal1 = parseInt(prompt("Geef een eerste getal in"));
let getal2 = parseInt(prompt("Geef een tweede getal in"));

let verm = getal1 * getal2;
let ggd = 1;
let kgv = 1;

for (let i = 1; i <= getal1 && i <= getal2; i++) {
    if (getal1 % i === 0 && getal2 % i === 0) {
        ggd = i;
    }
}

kgv = verm / ggd;

document.write("Het kleinste gemene veelvoud van ", getal1, " en ", getal2, " is: ", kgv);
