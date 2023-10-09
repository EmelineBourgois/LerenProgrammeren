let hoeveel= parseInt(prompt("hoeveel getallen wil je invullen?"))

let som=0

for(let i=1;i<=hoeveel;i++){
    let getal= parseInt(prompt("geef getal " +i +" in"))
    som+=getal
}
document.write("De totale som van", hoeveel, "getallen is", som,".")
