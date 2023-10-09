let zin=prompt("geef een zin in");
let karakter= prompt("welk karakter wil je zien?")

let aantal=0;
for(let i=1;i<=zin.length;i++){
    if(zin.charAt(i)==karakter){
        aantal+=1;
    }

}
document.write("het karakter ",karakter," komt ",aantal," keer voor")