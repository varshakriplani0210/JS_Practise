//typeconversion strings to number

//convert a number string to a number type 
const age='18';
console.log(`${age+2}`); //18 is a string and 2 is just added to it.
//to convert it into string we need to write it this way
console.log(Number(age)+2);

//convert a string string into a number type
let name='Varsha';
console.log(Number(name));//we get NAN-->NOT A Number
console.log(typeof(NaN));//NOW HERE YOU CAN SEE THE TYPE OF NAN IS A NUMBER BASICALLY AN UNDEFINED NUMBER.
