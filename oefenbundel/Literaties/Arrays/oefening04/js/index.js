let getal = Number(prompt("hoeveel namen wil je ingeven?"));
let mijnArray = [];

for (let i = 1; i <= getal; i++) {
    let namen = prompt("Geef een naam in:");
    mijnArray.push(namen)

}
// document.write(mijnArray);

for (let j = 0; j < mijnArray.length; j++) {
    if (j % 2 === 0) {
        document.write(mijnArray[j] + "<br>");
    } else {
        document.write("&nbsp;" +mijnArray[j] + "<br>");
    }
}



