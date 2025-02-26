/*
// TEST DATA 1

// MARK'S DETAILS
const heightOfMark = 1.69;
const weightOfMark = 78;

// JOHN'S DETAILS
const heightOfJohn = 1.95;
const weightOfJohn = 92;

// BMI = Weight / height ** 2 = Weight / (height * height)


// MARK'S BMI
const markBMI = weightOfMark / heightOfMark ** 2;  //First formula
//const markBMI = 78 / (1.69 * 1.69); // Second formula
console.log(markBMI);

// JOHN'S BMI 
const johnBMI = weightOfJohn / heightOfJohn ** 2;  // First formula
//const johnBMI = 92 / (1.95 * 1.95); // Second formula 
console.log(johnBMI);

// Boolean Variable
const markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI);

if (markBMI > johnBMI) {
console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}  */


/*

// TEST DATA 2

// MARK'S DETAILS
const heightOfMark2 = 1.88;
const weightOfMark2 = 95;

// JOHN'S DETAILS
const heightOfJohn2 = 1.76;
const weightOfJohn2 = 85;

// BMI = Weight / height ** 2 = Weight / (height * height)


// MARK'S BMI
const markBMI2 = weightOfMark2 / heightOfMark2 ** 2;  //First formula
//const markBMI2 = 78 / (1.69 * 1.69); // Second formula
console.log(markBMI2);

// JOHN'S BMI 
const johnBMI2 = weightOfJohn2 / heightOfJohn2 ** 2;  // First formula
//const johnBMI2 = 92 / (1.95 * 1.95); // Second formula 
console.log(johnBMI2);

// Boolean Variable
const markHigherBMI2 = markBMI2 > johnBMI2; 
console.log(markHigherBMI2); 

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`)
    } else {
        console.log(`John's BMI (${johnBMI2}) is higher than Mark's(${markBMI2})!`)
}  */

/*
const firstName = 'Samson';
const job = 'Programmer';
const birthYear = 2000;
const year = 2025;

const aboutMe = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(aboutMe);

const aboutMeNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(aboutMeNew);

console.log('String \n\ with multiple \n\ lines');

console.log(`String
multiple
lines`);*/


/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
 century = 20;
} else {
    century = 21;
}
console.log(century);

} */

/*
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear),  inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' +  24  + ' years old')
console.log('23'-'10' - 3)
console.log('23' / '2')

let n = '1' + 1;
n = n - 1;
console.log(n); */

// Falsey values are 0, NaN, undefined, null, false, ''(empty string)

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean(-1))
// console.log(Boolean({}))
/*
const money = 0;

if (money){
    console.log(`Don't spend it at all`);
} else {
    console.log(`You should get a job!`)
}

let height = 0;
if (height) {
    console.log("YAY, Height is defined!")
} else {
    console.log("Height is not defined!")
} */
/*
const age = 18;
 if (age === 18) console.log('You just became an adult', '18' == 18)

const favourite = Number( prompt("What is your favourite number?") );

console.log (favourite);
console.log ( typeof favourite);

if (favourite === 23){
    console.log("Cool, 23 is an amazing number!");
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
   
}  else if (favourite === 9){
    console.log("9 is a cool number");
} else {
    console.log('Number is neither 23 nor 7');
}
*/

/*
if (favourite !== 23) console.log("Why not 23?")
if (favourite !== 25) console.log("Why not 25?")
if (favourite !== 30) console.log("Why not 30?")
if (favourite !== 50) console.log("Why not 50?")
if (favourite !== 80) console.log("Why not 80?")
if (favourite !== 100) console.log("Why not 100?")
if (favourite !== 120) console.log("Why not 120?")
if (favourite !== 150) console.log("Why not 150?")
if (favourite !== 200) console.log("Why not 200?") */
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log (hasDriversLicense && hasGoodVision);
console.log (hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
console.log("Sarah is able to drive")
}else {
    console.log("Someone else should drive...")
}

const isTired = false; // C
console.log (hasDriversLicense && hasGoodVision && !isTired);*/

/*
TEST DATA
Dolphin score 96, 108 and 89
Koalas score 88, 91 and 110 */

/*
const dolphinAverageScore = (96 + 108 + 89)/3;

const koalasAverageScore = (88 + 91 + 110)/3;
console.log(dolphinAverageScore, koalasAverageScore);

if (dolphinAverageScore > koalasAverageScore) {
    console.log("Dolphin wins the trophy!🏆")
} else if (dolphinAverageScore < koalasAverageScore) {
    console.log("Koalas wins the trophy! 🏆")
} else {
    console.log("They both won the trophy!")
}
*/

// TEST DATA BONUS 1

// const dolphinAverageScore = (91 + 112 + 101)/3;
// const dolphinAverageScore = (91 + 119 + 106)/3;

// const koalasAverageScore = (109 + 95 + 123)/3;
// console.log(dolphinAverageScore, koalasAverageScore);

// if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
//     console.log("Dolphin wins the trophy!🏆")
// } else if ( koalasAverageScore > dolphinAverageScore && koalasAverageScore >= 100) {
//     console.log("Koalas wins the trophy! 🏆")
// } else {
//     console.log("They both won the trophy!")
// }

// Using switch and break

// const day = ''; 
// const day = 'Monday'; 

/*
switch (day) {
    case 'Monday': // day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meet-up');
    // break;
    case 'Tuesday': // day === 'Tuesday'
        console.log('Prepare theory videos');
    break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
    break;
    case 'Friday':
        console.log('Record videos');
    break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
    break;
    case '':
        console.log('Empty')
    break;
    default:
        console.log('Not a valid day!');
}
*/

/*
const day = 'Sunday'; 

if (day === 'Monday'){
    console.log('Plan course structure');
    console.log('Go to coding meet-up');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
    console.log('Prepare practical videos');
} else if (day === 'Wednesday' || day === 'Thursday'){
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
    console.log('Read programming books');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!')
    console.log('Try again later!')
    console.log('Something unique!')
}

*/

// Ternary Operator

/*
const age = 13;
// age >= 18 ? console.log("I like to drink wine 🍷"): 
// console.log("I will drink water 💦💧");

const drink = age >= 18 ? 'Wine': 'Water';
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'WINE';
} else {
    drink2 = 'WATER';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine': 'Vijumilk'}`);

*/

// Building a simple tip calculator

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2;

console.log(`The bill value was ${bill} the tip was ${tip}, and the total value ${bill + tip}`);