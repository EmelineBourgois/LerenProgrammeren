let hoeveel = prompt("hoeveel getallen wil je invullen?");

let som= 0
let i =1

while( i<= hoeveel){
    let getal= Number(prompt("geef getal " + i + " in:"));
    som = som+ getal
    i++;
}
document.write(som)