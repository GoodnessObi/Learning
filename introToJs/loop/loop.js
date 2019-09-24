console.log("NUMBERS BETWEEN -10 AND 19");
var num = -10
while(num <= 19){
    console.log(num);
    num++;
}

console.log("EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10
while(num <= 40){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}

console.log("ODD NUMBERS BETWEEN 300 AND 333");
var num = 300
while(num <= 333){
    if(num % 2 !== 0){
        console.log(num);
    }
    num++;
}

console.log("NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var num = 5
while(num <= 50){
    if(num % 3 === 0 && num % 5 === 0){
        console.log(num);
    }
    num++;
}
