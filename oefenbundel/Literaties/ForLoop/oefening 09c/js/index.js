let eindgetal = Number(prompt("geef een eindgetal in"));

for (let i = 2; i <= eindgetal; i++) {
    let priemgetal = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            priemgetal = false
            break;
        }
    }
    if(priemgetal)
    {document.write(i)}
}