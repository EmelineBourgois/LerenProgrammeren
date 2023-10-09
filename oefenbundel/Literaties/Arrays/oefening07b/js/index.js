// Functie om een willekeurig getal tussen min (inclusief) en max (inclusief) te genereren
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let eindgetal = parseInt(prompt("Geef een eindgetal in"));
let array1 = [];
let array2 = [];
let array3 = [];
let som = 0;

for (let i = 0; i < 10; i++) {
    array1.push(getRandomNumber(0, eindgetal));
    array2.push(getRandomNumber(0, eindgetal));

    if (array1[i] % 2 === 0) {
        array3.push(array1[i]);
    } else {
        som += array1[i];
    }

    if (array2[i] % 2 === 0) {
        array3.push(array2[i]);
    } else {
        som += array2[i];
    }
}

document.write(array1, "<br>");
document.write(array2, "<br>");
document.write(array3, "<br>");
document.write("De som van de restwaarde is", som);
