//ingave eindgetal
const getal = Number(prompt("geef in een getal"));

//i start van de reeks, nl 1
//conditie: doe zolang i kleiner blijft dan eindgetal
// manipuleer i door te vermenigvuldigen met 2

for(let i=1;i<=getal;i*=2){
if(i<getal/2){
    document.write(i+", ");

} else {
        document.write(i+" ");

    }

}