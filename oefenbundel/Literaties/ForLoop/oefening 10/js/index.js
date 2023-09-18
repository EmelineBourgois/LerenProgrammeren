let tafel = Number(prompt("geef een tafel in"));
let eindGetal = Number(prompt("geef een eindgetal in"));

for (let i = 1; i <= eindGetal; i++) {
    let verm = tafel * i
    document.write(tafel + " x " + i + " = " + verm + " ")

    if (i % 3 === 0) {
        document.write("<br>");
    }

}
