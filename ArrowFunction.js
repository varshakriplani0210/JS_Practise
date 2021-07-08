//The third type of function added to ES6 is ARROW FUNCTION =>
//Simplest form of function expresion it is shorter and faster to execute
//return works implicity

const date=birthyear => 2021-birthyear;
console.log(date(1996));

const yearofretirement=birthyear=>{
  const age=2021-birthyear;
  const retirement=65-age;
  return retirement;
}
console.log(yearofretirement(1996))//65-25

//if have multiple parameters
const yearofretirement = (birthyear,firstname) =>{
  const age=2021-birthyear;
  const retirement=65-age;
  return `${firstname} retires in ${retirement} years`;
}
console.log(yearofretirement(1996,'varsha')); //varsha retires in 40 years.

//BUT THERE IS A DIIFERENCE BETWEEN A NORMAL FUNCTION AND ARROW FUNCTIONS
//Use arrow functions only when we have to write just one line of code
//Otherwise the best practise is to use Normal Functions as it Supports 'this' keyword and arrow functions dont support 'this' keyword
