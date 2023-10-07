let getal = Number(prompt("geef een getal waarvan je de faculteit wilt weten"))

let X = "x"
let extra = ""
let som = 0
for (let i = getal; i >= 1; i--) {
    som = som + i
    document.write(i+X+" = " +som)
}
