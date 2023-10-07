let som=0

while(true){
    let getal= Number(prompt("geef een getal in"))
    if(getal<0){
        break;
    }
    som+=getal
}
document.write(som)