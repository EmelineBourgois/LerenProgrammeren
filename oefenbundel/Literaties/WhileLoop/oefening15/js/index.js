let hoeveel = prompt("hoeveel getallen wil je invullen?");

let som= 0
let i =1
while( i<= hoeveel){
    let getal= Number(prompt("geef getal " + i + " in:"));
    som += getal

    i++;
}
document.write("De totale som van " +hoeveel+ " getallen is: "+som+ "<br");

let gem = som/hoeveel

document.write("het gemiddelde van " +hoeveel+ " getallen is: "+gem)