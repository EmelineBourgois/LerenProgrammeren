let array1=[];
let array2=[];
let array3=[];
let i=1;

while(i<=10){
array1.push(i);
array2.push(i);
    i++;
}
console.log(array1);
console.log(array2);

for(let j=0;j<array1.length;j++){
    som=Number(array1[j]+array2[j]);
    array3.push(som)
    document.write(array1[j]+ "+"+ array2[j]+ "="+array3[j]+"<br>")
}
