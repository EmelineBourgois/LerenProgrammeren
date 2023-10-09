let ingave = parseInt(prompt("geef een even getal in"))
let sterren = "*"
let aantal = " "

if (ingave % 2 !== 0) {
    alert("dit is geen even getal");
    ingave = parseInt(prompt("geef een even getal in"));
}

for (let i = ingave / 2; i >= 1; i--) {
    aantal += sterren
    document.write(aantal + "<br>")
}
for (let i = ingave/2; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
