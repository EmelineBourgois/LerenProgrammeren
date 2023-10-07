let array1 = []
let array2 = []
let array3 = []
let som = 0

let eindgetal = Number(prompt("geef een eindgetal in"));

for (let i = 0; i <10; i++) {
    array1.push(Math.floor(Math.random() * (eindgetal - 0 + 1) + 0));
    array2.push(Math.floor(Math.random() * (eindgetal - 0 + 1) + 0));

    if(array1[i]%2===0){
        array3.push(array1[i])
    } else som = som +array1[i]
    if(array2[i]%2===0){
        array3.push(array2[i])
    } else som = som + array2[i]
}

document.write(array1, "<br>")
document.write(array2, "<br>")
document.write(array3, "<br>")
document.write("de som van de restwaarde is", som)