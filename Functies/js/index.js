let zin = "fulL staCk develoPers";
let intro ="welkom"
document.write(`Hoofdletters: ${zin.toUpperCase()} <br>`);
document.write(`Kleine Letters: ${zin.toLowerCase()} <br>`);
document.write(`${intro} ${zin} <br>`);
document.write(`Samenvoegen ${intro.concat(" ",zin).toUpperCase()}<br>`);
document.write(`charAt:${zin.charAt(6)}<br>`);
document.write(`charCodeAt: ${zin.charCodeAt(6)}<br>`);

let mySplit= zin.split();
document.write(`split:${mySplit}<br>`);
document.write(`array:${mySplit[0]}<br>`);
document.write(`substring: ${zin.substring(2,9)}<br>`);
document.write(`positie uit een string ${zin.indexOf('z')}<br>`);
document.write(`last of index: ${zin.lastIndexOf('e')}<br>`);
document.write(`vervangen:${zin.replaceAll("e","o")}<br>`);

let getal = 5
document.write(`getal naar string: ${getal.toString()}<br>`)

let num1 =parseFloat("10.66abc");//10.66
document.write(num1);

let num2= Number("10.66abc")// 10.66NaN
document.write(num2);

let num3= parseInt("10.66abc")//10
document.write(num3);


