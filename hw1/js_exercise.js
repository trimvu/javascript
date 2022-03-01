
//? Name: Tri Vu    HW: JavaScript 101 Exercises


//? Hello You!

// function hello(name) {
//     return "Hello, " + name + "!";
// }

// console.log(hello('Mustache'))


//? Hello You! Part 2

// function hello(name) {
//     if (!name) {
//         return "Hello, world!";
//     }
//     else {
//         return "Hello, " + name + "!";
//     }
//      // another moethod
        // if (name.length > 0) {
        //     console.log("Hello, " + name + "!");
        // }
        // else {
        //     console.log('Hello, World!')
        // }
// }

// console.log(hello());
//  // alternative method
// hello();

//? Madlib

// function madlib(name, subject) {
//     return name + "'s favorite subject in school is " + subject;
// }

// let result = madlib('Anushka', 'art');

// console.log(result);


//? Tip Calculator

// function tipAmount(bill, service) {
//     switch(service) {
//         case "good":
//             return bill * 0.2;
//             break;
//         case "fair":
//             return bill * 0.15;
//             break;
//         case "bad":
//             return bill * 0.1;
//             break;
//     }
// }

// let tip = tipAmount(100, 'good'); // 20
// let tip = tipAmount(40, 'fair'); // 6

// console.log(tip);


//? Tip Calculator 2

// function totalAmount(bill, service) {
//     switch(service) {
//         case "good":
//             return bill + (bill * 0.2);
//             break;
//         case "fair":
//             return bill + (bill * 0.15);
//             break;
//         case "bad":
//             return bill + (bill * 0.1);
//             break;
//     }
// }

// let total = totalAmount(100, 'good'); 
// let total = totalAmount(40, 'fair');

// console.log(total)


//? Tip Calculator 3

// function splitAmount(bill, service, people) {
//     switch(service) {
//         case "good":
//             return (bill + (bill * 0.2)) / people;
//             break;
//         case "fair":
//             return (bill + (bill * 0.15)) / people;
//             break;
//         case "bad":
//             return (bill + (bill * 0.1)) / people;
//             break;
//     }
// }

// let split = splitAmount(100, 'good', 5); // 24
// let split = splitAmount(40, 'fair', 2); // 23

// console.log(split);