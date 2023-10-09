let kleineletters= [];
let hoofdletter=[];
let teller=97;

for(let i=0;i<=25;i++){
    kleineletters.push(String.fromCharCode(teller));
    hoofdletter.push(String.fromCharCode(teller-32))
    teller++
}
document.write(kleineletters + "<br>" + hoofdletter)