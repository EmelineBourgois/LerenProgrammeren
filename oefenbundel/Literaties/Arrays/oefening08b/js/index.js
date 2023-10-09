let hoeveel= prompt("hoeveel namen wil je ingeven")
let array =[];


for(let i=1;i<=hoeveel;i++){
    let namen = prompt("geef naam " + i +" in")
    array.push(namen)
}
document.write(array.sort());