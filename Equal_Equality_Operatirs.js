//= is used to assign values like

const age=10;
const name='varsha';

//now == is used to compare some values
console.log('18'==18); //TRUE because 18 == 18

//now === is used to comapre values and datatypes
console.log('18'===18); //FALSE because '18' is STRING and 18 is INT so the datatype is not matched

//IN PROGRAMMING AS A GOOD DEVELOPER === IS MOSTLY USED AS == BRINGS A LOT OF BUGS 
//Lets see this with an example
let fav=prompt("enter your fav number");
if(fav==23) //'23'==23 -->True 
console.log(typeof fav); //string
console.log(`${fav} is my fav number`);
//THIS IS NOT THE BEST PRACTISE

let favo=Number(prompt("Enter your fav number"));
console.log(typeof favo);
if(favo===23)
console.log("Its my fav number"); //here 23 === 23 same value same datatype
