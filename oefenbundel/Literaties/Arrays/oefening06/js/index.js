let kleineLetters = [];
let hoofdLetters = [];
let teller = 97;

// let test = String.fromCharCode(teller);

for (let X=0;  X<= 25; X++) {
    kleineLetters.push(String.fromCharCode(teller)); //a 97 A 65 = 32
    hoofdLetters.push(String.fromCharCode(teller - 32));
    teller++;

}

document.write(kleineLetters + "<br>");
document.write(hoofdLetters);