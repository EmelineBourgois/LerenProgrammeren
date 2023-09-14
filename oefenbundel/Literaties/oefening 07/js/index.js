let getal = Number(prompt("geef een getal in"));
let rest = 2;

for (let i = getal; i >0; i--) {
    if (i % rest) {
        document.write(" ");
    } else {
        document.write(i);
    }
}