function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var array1 = [];
var array2 = [];
var sumArray = [];

for (var i = 0; i < 11; i++) {
    array1.push(getRandomNumber(1, 11));
    array2.push(getRandomNumber(1, 11));

    var sum = array1[i] + array2[i];
    sumArray.push(sum);
    document.write(array1[i] + " + " + array2[i] + " = " + sumArray[i] +"<br>");

}
