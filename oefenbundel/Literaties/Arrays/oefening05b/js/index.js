let array1 = [];
let array2 = [];
let teller = 97;
let hoofdtellers = '';

for (let i = 0; i <= 25; i++) {
    array1.push(String.fromCharCode(teller));
    hoofdtellers = array1[i].toUpperCase();
    array2.push(hoofdtellers);
    teller++;
}
document.write(array1 +"<br>"+ array2);