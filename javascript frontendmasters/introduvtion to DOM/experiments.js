/*let friendsAtYourParty = 0;

for (let i = 0; i <= 10; i ++) {
    console.log(i)
    friendsAtYourParty++;
}

console.log(friendsAtYourParty);

const character = 'f';
const timesToRepeat = 14
let myString = '';

for (let i = 0; i < timesToRepeat; i++) {
    myString += character;
}
console.log(myString);

 function addTwo(number){
     return number + 2;
 }
 function givesBackFive(){
     return 5;
 }

 function add(num1, num2) {
     return num1 + num2;
 }
 const finalAnswer = addTwo(5);
 console.log(finalAnswer);
 console.log(givesBackFive());
 console.log(add(6, 7));

const person = {
    name: "Goody Obi",
    city: "Lagos",
    favoriteFood: "chicken and chips"
};

console.log(person);
console.log(person.name);
console.log(person.favoriteFood);
console.log(person["city"]); //same as lines above


const person1 = {
    name: "Goody",
    ageRange: "25-35"
};

const person2 = {
    name: "Philo",
    ageRange: "65-75"
};

function suggestMusic(person) {
    if (person.ageRange == "25-35") {
        console.log("We think you'll like Tiwa Savage you crazy millenial.");
    } else if (person.ageRange == "65-75"){
        console.log("You're obviously going to like King Sunny Ade.");
    } else {
        console.log("Uh,maybe try Tuface? Everyone likes Tuface, right?");
    }
}

suggestMusic(person1);
suggestMusic(person2);

//method is a function in an object

const dog = {
    name: "dog",
    speak(){
        console.log("woof woof");
    }
};

dog.speak(); */

// const primeNumbers = [1, 2, 3, 4, 5, 7];
// console.log(primeNumbers.join(" | "));
// console.log (primeNumbers.length);

// const cities = ["Seattle", "Lagos", "Suleja", "Abuja", "Jos"];

// //method 1
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i].toUpperCase());
// }

// console.log("------")

// //method2 
// cities.forEach(function(city,i){
//     console.log(city,i);
// })

const redSquare = document.querySelector('.red-square');
redSquare.style.backgroundColor = 'limegreen';