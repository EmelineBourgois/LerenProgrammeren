let hoeveel = Number(prompt("hoeveel cijfers wens je in te geven?"))
let sum = 0
for (let i=1;i<=hoeveel;i++){
    let getal = Number(prompt("geef getal " + i + " in"))
    sum = sum+ getal
}
document.write("de som van alle getallen is " +sum);