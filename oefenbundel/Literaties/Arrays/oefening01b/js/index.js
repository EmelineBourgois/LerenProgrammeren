let getal=parseInt(prompt("geef een getal in"))
let array=[]

while(getal>=0){
    array.push(getal)
    getal=parseInt(prompt("geef een getal in"))
}
console.log(array)

let hoeveel=Number(prompt("het hoeveelste getal wil je zien?"))
document.write(array[hoeveel]);