let getal = Number(prompt("geef een getal in"));

let rest= 0
for( let i=2;i<=getal;i++){
    let isPriemGetal =true;
    for(let j=2 ;j<i;j++){
        if(i%j===0)
            isPriemGetal=false;
        break;

        }
    if(isPriemGetal){
        document.write(i + " ")
    }
}