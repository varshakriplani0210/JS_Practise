//JavaScript arrays are used to store multiple values in a single variable.
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.


const arr=['varsha','nishita',24,19];
console.log(arr); //(4) ["varsha","nishita",24,19]

//or

const arr1=new Array('varsha','nishita',24,19);
console.log(arr1); //(4) ["varsha","nishita",24,19]

//To access array elements
console.log(arr[0]); //varsha
console.log(arr[1]); //nishita
console.log(arr[2]); //24

//To find length of an array
console.log(arr.length); //4

//To change array values
arr[2]=21;
console.log(arr); //(4) ["varsha","nishita",21,19]
//NOW HERE AS ARRAY IS A CONST IT CANNOT CHANGE ITS VALUE BUT ARRAYS ARE MUTABLE and can be changed.

//Array inside array
const firstname='varsha';
const aboutme=[firstname,'kriplani',arr];
console.log(aboutme);

