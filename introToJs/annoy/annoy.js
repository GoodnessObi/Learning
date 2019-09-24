var answer = prompt("are we there yet?");

// if(answer === "yes") {
//     alert("YAY, We made it!")
// } else {
//     var answer = prompt("are we there yet?");
// }

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet?");
// }

// alert("YAY, We made it!")

while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet?");
}

alert("YAY, We made it!")
