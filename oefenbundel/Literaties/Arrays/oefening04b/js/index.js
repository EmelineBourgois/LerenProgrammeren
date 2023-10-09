let aantal = Number(prompt("hoeveel namen wil je ingeven?"));
let array = []

for (let i = 1; i <= aantal; i++) {
    let naam = prompt("geef naam " + i + " in");
    array.push(naam)
}
console.log(array)

for (let j = 0; j < array.length; j++) {
    if (j % 2 === 0) {
        document.write(array[j] + "<br>")
    } else {
        document.write("&nbsp;&nbsp; "+ array[j] + "<br>");
    }
}