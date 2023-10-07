let aantal = prompt("geef een zin in");
let karakter=prompt("geef een karakter in");

let opslag =0;

for(let plaats= 0;plaats<aantal.length;plaats++){
if(aantal.charAt(plaats)== karakter){
    opslag +=1;
}

}
document.write(opslag)
