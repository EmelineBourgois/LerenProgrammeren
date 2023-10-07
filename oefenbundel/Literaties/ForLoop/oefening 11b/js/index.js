let aantal = Number(prompt("hoeveel getallen dienen er worden weergegeven? "))
let huidigGetal = 0
let vorigGetal = 1

for (let i = 0; i <= aantal; i++) {
    document.write(huidigGetal+", ")

    let volgendGetal = huidigGetal + vorigGetal
    vorigGetal = huidigGetal
    huidigGetal = volgendGetal
}
document.write("...");