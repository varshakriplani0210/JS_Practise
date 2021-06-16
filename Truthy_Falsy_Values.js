//Falsy values are values which when converted to boolen return FALSE
//truely and false values
//Basically there are 5 falsy values
//1.0 , 2.Undefined , 3.Null , 4.""
//rest all when converted to falsy values are always TRUE
//FOR EXAMPLE

//Falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
//true values
console.log(Boolean("Varsha"));
console.log(Boolean(2===2));
console.log(Boolean(2>1));
console.log(Boolean({}));

//now where is this falsy and truthy values used
const money=1;//If this value is 1 which is TRUE
if(money) //Here in every if else statement the value is evaluated to T & F If T then if is executed
{
  console.log("Lets Spend Money");
}
else{ //if FALSE else part is executed
  console.log("Lets Not Spend Money");
}
