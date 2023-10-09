let getal = parseInt(prompt("geef een getal in "))

let fac = 1
let string = getal

document.write(getal)
for (let i = getal; i >= 1; i--) {
    fac = fac * i
    if (i !== string) {
        document.write("x"+i)
    }
}
document.write(" = ", fac)
