let data = ["tom", "tim",1980,1973, "bart", "els"];

for(index in data){
    if(typeof data[index]!=='string') break;
    document.write(data[index] + "<br>");

}