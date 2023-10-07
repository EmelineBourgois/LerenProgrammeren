let getal1 =Number(prompt("geef een eerste getal in"));
let getal2 = Number(prompt("geef een tweede getal in"));


let ggm=1

for(let i=1; i<=getal1 && i<=getal2;i++){
    if(getal1%i===0 && getal2%i===0){
        ggm=i;
    }
}
document.write("De grootste gemene deler van", getal1, " en ", getal2, " is: ", ggm);
