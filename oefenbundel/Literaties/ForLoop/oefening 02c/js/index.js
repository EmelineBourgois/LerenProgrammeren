let aantal = parseInt(prompt("hoeveel sterren wil je weergegeven?"));

let sterren = "*";
let vulling = "";

for (let i = 1; i <= aantal; i++) {
    vulling += sterren
    document.write(vulling + "<br>")
}