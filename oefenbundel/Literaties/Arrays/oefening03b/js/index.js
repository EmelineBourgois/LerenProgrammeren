function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let array1 =[]
let array2=[]
let array3=[]
let i=0

while(i<11){
    array1.push(getRandomNumber(1,11))
    array2.push(getRandomNumber(1,11))
    let som=array1[i]+array2[i];
    array3.push(som)
    document.write(array1[i] +" + " +array2[i] + " = " + array3[i] +"<br>")
    i++

}
console.log(array1)
console.log(array2)

