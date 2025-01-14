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