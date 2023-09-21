let getal = Number(prompt("geef een eindgetal in"));

let i = 1
while (i <= getal) {
    if (i % 10 === 0) {
        document.write(", ")
    } else {
        document.write(", "+ i)

        if (i % 3 === 0) {
            document.write(", " + i )
        }
    }
    i++;
}
