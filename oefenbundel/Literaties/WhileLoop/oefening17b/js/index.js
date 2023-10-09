let eindGetal = parseInt(prompt("geef een eindgetal in"));
let i = 1
while (i <= eindGetal) {
    if(i%10===0){
        document.write(" ")
    } else {
        document.write(i)
    }
    if(i%3===0){
        document.write(", "+ i)
    }
    if(i<eindGetal){
        document.write(", ")
    }
    i++;
}