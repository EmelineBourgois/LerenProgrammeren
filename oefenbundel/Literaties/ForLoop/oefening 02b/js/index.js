let hoeveel = Number(prompt("hoeveel sterren wil je afgebeeld?"));

let ster = "*";
let aantal = " ";

for (let i = 1; i <= hoeveel; i++) {
    aantal = aantal + ster;
    document.write(aantal, "<br>")
}
