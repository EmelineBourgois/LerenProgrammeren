let kleineLetters = [];
let hoofdLetters = [];

let teller = 97;
let groteLetters = '';

for (let i = 0; i <= 25; i++) {
    kleineLetters.push(String.fromCharCode(teller));
    groteLetters = kleineLetters[i].toUpperCase();
    hoofdLetters.push(groteLetters);
    teller++;
}
document.write(kleineLetters + "<br>");
document.write(hoofdLetters);
