
//? Name: Tri Vu    HW: JavaScript 101 Exercises


//? Print Numbers

//? while loop

// function printNumbers(start, end) {
//     while (start <= end) {
//         console.log(start);
//         start++
//     }
// }

// printNumbers(1, 10);

//? for loop

// function printNumbers(start, end) {
//     for (start; start <= end; start++){
//         console.log(start);
//     }
// }

// printNumbers(1, 10);


//? Print a Square

// count = 0;

// function printSquare(size) {
//     while (count < size) {
//         let scale = "*".repeat(size);
//         console.log(scale)
//         count++
//     }
    
// }

// printSquare(5);


//? Print a box

// let count = 0;

// function printBox(width, height) {
//     console.log("*".repeat(width))
//     while (count < height - 2) {
//         console.log("*" + (" ".repeat(width - 2)) + "*")
//         count++
//     }
//     console.log("*".repeat(width))
// }

// printBox(6, 4)


//? Leetspeak

// let a = 4, e = 3, g = 6, i = 1, o = 0, s = 5, t = 7;
// index = 0;

// function leetspeak(word) {
//     let charArr = word.split('');

//     while (index < charArr.length) { // leet
//         if (charArr[index] == 'a') {
//             charArr[index] = '4';
//         }
//         else if (charArr[index] == 'e') {
//             charArr[index] = '3';
//         }
//         else if (charArr[index] == 'g') {
//             charArr[index] = '6';
//         }
//         else if (charArr[index] == 'i') {
//             charArr[index] = '1';
//         }
//         else if (charArr[index] == 'o') {
//             charArr[index] = '0';
//         }
//         else if (charArr[index] == 's') {
//             charArr[index] = '5';
//         }
//         else if (charArr[index] == 't') {
//             charArr[index] = '7';
//         }
//         index++
//     }
//     let joinWord = charArr.join('');
//     console.log(joinWord)
// }

// leetspeak('leet')


//? Long-long Vowels

let index = 0;

function longLong(word) {
    let charArr = word.split('');

    while (index < charArr.length) {
        if (charArr[index] == charArr[index+1] && (charArr[index] == 'a' || charArr[index] == 'e' || charArr[index] == 'i' || charArr[index] == 'o' || charArr[index] == 'u' || charArr[index] == 'y')){
            charArr.splice(index, 0, charArr[index].repeat(3));
        }
        index++
    }
    
    let joinWord = charArr.join('');
    console.log(joinWord)
}

longLong('good') // goooood
// longLong('cheese') // cheeeeese
// longLong('man') // man


//? Just the positives

// let posNums = []
// index = 0

// function positiveNumbers(myArray) {
//     while (index < myArray.length){
//         if (myArray[index] >= 0) {
//             posNums.push(myArray[index]);
//         }
//         index++
//     }
//     console.log(posNums)
// }

// positiveNumbers([1, -3, 5, -3, 0]) // [1, 5, 0]
// positiveNumbers([1, 2, 3]) // [1, 2, 3]
// positiveNumbers([-1, -2, -3]) // []

//? Caesar Cipher

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// let encrypt = [];

// function cipher(code) {
//     let charArr = code.split('');

//     for (let i = 0; i < charArr.length; i++) {
//         for (let j = 0; j < alphabet.length; j++){
//             if (charArr[i] == alphabet[j]) {
//                 encrypt.push(alphabet[(j + 13) % 26])
//             }
//             else if (charArr[i] == ' ') {
//                 encrypt.push(' ')
//                 break
//             }
//         }
//     }
//     let joinEncrypt = encrypt.join('');
//     console.log(joinEncrypt)
// }

// cipher('Genius without education is like silver in the mine'.toLowerCase())


//? Caesar Cipher 2

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// let decrypt = [];

// function decipher(code) {
//     let charArr = code.split('');

//     for (let i = 0; i < charArr.length; i++) {
//         for (let j = 0; j < alphabet.length; j++){
//             if (charArr[i] == alphabet[j]) {
//                 decrypt.push(alphabet[Math.abs(j - 13) % 26])
//             }
//             else if (charArr[i] == ' ') {
//                 decrypt.push(' ')
//                 break
//             }
//         }
//     }
//     let joinDecrypt = decrypt.join('');
//     console.log(joinDecrypt)
// }

// decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'.toLocaleLowerCase())