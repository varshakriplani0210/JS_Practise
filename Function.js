//All About Functions In JS.
//Functins can be resued multiple times in the code.
//

function display()
{
console.log("i am varsha");
}
display(); //function call or invoking function

function foodProcessor(apples,orange) //arguments to a function,parameters to a afunction
{
  //console.log(apples,orange);
  const juice=`Juice made of ${apples} apples and ${orange} oranges`;
  return juice; //return a particular value
}
const juiceapporange=foodProcessor(5,2); // here the juice is not printed so to print it store it in a variable
console.log(juiceapporange);
//or
console.log(foodProcessor(4,3));
