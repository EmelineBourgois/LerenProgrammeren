const ingevoerdGetal = Number(prompt("Geef de faculteit van het getal:"));
let faculteit = 1;
let faculteitString = ingevoerdGetal;
// for (let i = ingevoerdGetal; i >= 1; i--) {
let i = ingevoerdGetal
while(i>= 1){
    //faculteit *= i;
    faculteit = faculteit * i;
    if(i !== ingevoerdGetal){
        faculteitString += "x"+i;
    }
    i--
}

document.write(faculteitString+ "=" + faculteit);
