let getal =Number(prompt("geef een getal in"));
let mijnArray =[];

while (getal>0){
    mijnArray.push(getal);
    getal = Number(prompt("Geef een volgend getal in:"));
}

let hoeveelste= prompt("de hoeveelste in de array wens je te zien?")

document.write(mijnArray[hoeveelste])



