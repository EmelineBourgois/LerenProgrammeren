// //for loop

// for (teller;condidtie;manipulatie van de teller) {
//     uitvoering van code
// }

// optelling = i=i+1, i+=1, i++

let som = 0;
for (let i = 1; i <= 3; i++){
    let getal= Number(prompt("geef getal " + i + " in:"));
    som = som +getal;
}
document.write(som);

