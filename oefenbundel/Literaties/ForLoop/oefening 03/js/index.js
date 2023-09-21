let hoeveel = Number(prompt("geef een even getal in?"));
if(hoeveel%2!==0){
    alert("dit is geen even getal");
    hoeveel = Number(prompt("geef een even getal in?"));
}

let ster = "*";
let aantal ="";

    for (let j = hoeveel/2; j >= 1; j--) {
        aantal = aantal + ster
        document.write(aantal+"<br>");
    }

