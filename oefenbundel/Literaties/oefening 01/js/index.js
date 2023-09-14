let hoeveel = prompt("hoeveel getallen wil je invullen?");

let som= 0

for(let i=1; i<= hoeveel;i++){
    let getal= Number(prompt("geef getal " + i + " in:"));

    som = som+ getal
}
document.write(som)