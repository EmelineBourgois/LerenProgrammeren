let getal1 = Number(prompt("geef getal 1 in."));
let getal2 = Number(prompt("geef getal 2 in"));



let teller = getal1*getal2
let deler = 0;

for (let i = 1; i <= getal1; i++) {
    for (i = 1; i <= getal2; i++) {
        if (getal1 % i == 0) {
            if (getal2 % i == 0) {
                deler = i

            }
        }
    }

}

let kvg=teller/deler
document.write("De kleinste gemene deelvoud van " + getal1 + " en " + getal2 + " is: " + kvg)
