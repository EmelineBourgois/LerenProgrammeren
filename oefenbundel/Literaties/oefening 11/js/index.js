let getal = Number(prompt("geef een aantal getallen in."));

let vorigGetal = 0;
let huidigGetal = 1;

for (let i= 1; i<=getal; i++) {
    let volgendGetal = vorigGetal + huidigGetal;
    vorigGetal = huidigGetal;
    huidigGetal = volgendGetal;
    document.write(volgendGetal + "<br>");
}