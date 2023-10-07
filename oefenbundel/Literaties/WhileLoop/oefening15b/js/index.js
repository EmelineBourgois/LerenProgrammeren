let hoeveel = Number(prompt("hoeveel getallen wil je ingeven?"))
let som = 0
let i = 1

while (i <= hoeveel) {
    let getal = Number(prompt("geef getal "+ i +" in:"))
    som += getal
    i++;
}
document.write(som)