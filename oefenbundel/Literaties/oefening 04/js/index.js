const ingeevoerdgetal = Number(prompt("geef de faculteit"));
let maal = 1;
let faculteitstring = ingeevoerdgetal;

for (let i = ingeevoerdgetal; i >= 1; i--) {
    maal = i * maal;
    if (i !== ingeevoerdgetal) {
        faculteitstring += "x" + i;

    }
    document.write(faculteitstring + " = " + maal);

}
