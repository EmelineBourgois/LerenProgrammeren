let namen = [];

let aantal=Number(prompt("hoeveel namen wil je ingeven?"));
let i =1;

while(i <=aantal){
    naam=prompt("geef naam " + i +" in.");
    i++;
    namen.push(naam);

}
namen.sort();
document.write(namen);

