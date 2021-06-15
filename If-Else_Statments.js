//to see of you are eligible to vote or not
let age=14;
if(age>=18)
{
console.log("You are eligible to vote");
}
else
{
  console.log("You Are Not Eligible To Vote");
  const ageLeft=18-age;
  console.log(`You have to wait for ${ageLeft} years to vote`);
}

//to see if you are born in 20 or 21st century
let yearOfBirth=prompt("enter your year of birth");
let century;
if(yearOfBirth<=2000)
{
 century=20; 
}
else{
  century=21;
}
console.log(`You are born in ${century} century`);
