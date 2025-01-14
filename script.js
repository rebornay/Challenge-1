// TEST DATA 1

// MARK'S DETAILS
const heightOfMark = 1.69;
const weightOfMark = 78;

// JOHN'S DETAILS
const heightOfJohn = 1.95;
const weightOfJohn = 92;

// BMI = Weight / height ** 2 = Weight / (height * height)


// MARK'S BMI
const markBMI = 78 / 1.69 ** 2;  //First formula
//const markBMI = 78 / (1.69 * 1.69); // Second formula
console.log(markBMI);

// JOHN'S BMI 
const johnBMI = 92 / 1.95 ** 2;  // First formula
//const johnBMI = 92 / (1.95 * 1.95); // Second formula 
console.log(johnBMI);

// Boolean Variable
const markHigherBMI = markBMI > johnBMI; 
console.log(markHigherBMI);




// TEST DATA 2

// MARK'S DETAILS
const heightOfMark2 = 1.88;
const weightOfMark2 = 95;

// JOHN'S DETAILS
const heightOfJohn2 = 1.76;
const weightOfJohn2 = 85;

// BMI = Weight / height ** 2 = Weight / (height * height)


// MARK'S BMI
const markBMI2 = 95 / 1.88 ** 2;  //First formula
//const markBMI2 = 78 / (1.69 * 1.69); // Second formula
console.log(markBMI2);

// JOHN'S BMI 
const johnBMI2 =85 / 1.76 ** 2;  // First formula
//const johnBMI2 = 92 / (1.95 * 1.95); // Second formula 
console.log(johnBMI2);

// Boolean Variable
const markHigherBMI2 = markBMI > johnBMI; 
console.log(markHigherBMI2);