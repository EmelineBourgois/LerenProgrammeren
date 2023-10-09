let tafel= parseInt(prompt("geef een tafel in"));
let eindgetal=parseInt(prompt("geef een eindgetal in"));

for(let i=1;i<=eindgetal;i++){
    let verm= tafel*i
    document.write(tafel," x ",i,"=",verm,"  ")

    if(i%3===0){
        document.write("<br>")
    }
}