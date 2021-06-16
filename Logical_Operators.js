//&& --> When both the condition is satisfied then the  output is printed or else not
let year=2000;
if(year%2===0 && year%4===0)
{
  console.log("It is a leap year")
}

// Logical OR Operator || is executed if any one of the condition is True
let age=18;
if(age===18 || age>18) // age===18-->T and age>18-->F
{
  console.log("can vote");
}
else
{
  console.log("cannot vote");
}

//Logical Not ! converts true value to false and false value to true
let yeaar=200;
if(yeaar!=2000)
{
  console.log("It is not 2000 ");
}
else{
  console.log("it is 2000");
}
