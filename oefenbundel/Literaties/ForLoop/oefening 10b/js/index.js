let tafel = Number(prompt("geef een tafel in"))
let eindgetal = Number(prompt("geef een eindgetal in"));

let berekening = 0;
for (let i = 1; i <= eindgetal; i++) {
    berekening = i * tafel
    document.write(tafel + " x " + i + " = " + berekening);

    if (berekening % 3 === 0) {
    document.write("<br>")
    }
    else{ document.write(", ")}
}