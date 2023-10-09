let eindgetal=Number(prompt("geef een eindgetal in"));

for(let i=1;i<eindgetal;i*=2){
    if(i>1){
        document.write(',')
    }
    document.write(i)
}