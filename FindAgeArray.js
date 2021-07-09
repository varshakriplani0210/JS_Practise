//You have to find the ages of the array elements 

const age=birthyear=>2021-birthyear;
console.log(age(1996)); //25


//Calculate age

const yr=[1996,1997,1998,1999];

const ages=[age(yr[0]),age(yr[1]),age(yr[yr.length -1])];

console.log(ages); //(3) [25,24,22]
