let cursisten = [ "tom", "tim", "bart", "els" ];
/*
let cursisten = new Array["tom", "tim", "bart", "els"];
*/
let cursusjaar = ["2018,2019,2020,2021,2022,2023"];

document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);

cursisten[0]='pieter';
document.write(cursisten);

document.write(cursisten.length);
// toevoegen cursist

cursisten.push("Marieke");
document.write(cursisten);
document.write(cursisten[4]);

// cursist aan het begin toevoegen
cursisten.unshift("thomas");
document.write(cursisten);

//cursist verwijderen einde
cursisten.pop();
document.write(cursisten);

//verwijderen begin
cursisten.shift();
document.write(cursisten);

//index of plaatsbepaling van item in een array
document.write(cursisten.indexOf("bart"));



