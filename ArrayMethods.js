//There are different array methods 

//push -> To add elements to the array at the END | Returns the position of the pushed element
//unshift -> To add elements to the array at the START | 
//pop -> To remove the LAST element of the array | Returns the poped element
//shift -> Removes the FIRST element from the array | Returns the elemnt removed
//indexof -> Searches the index of the searched element
//includes -> Returns T/F if the element is present or not

const names=['varsha','nishita','tia','suhana'];
//Push
names.push('Rina');
console.log(names);
//What it returns?
const pushelement=names.push('Tina');
console.log(names);
console.log(pushelement); //6 Returns position of the pushed element;

//Pop
console.log(names);
names.pop();
console.log(names);
//What it returns?
const popelement=names.pop();
console.log(names);
console.log(popelement); //Rina


//Unshift
console.log(names);
names.unshift('Rashi');
console.log(names);
//What it returns?
const unshiftelement=names.unshift("rishika");
console.log(names);
console.log(unshiftelement); //6

//Shift
const shiftelement=names.shift();
console.log(names);
console.log(shiftelement); 

//indexof
console.log(names.indexOf('tia')); //1
console.log(names.indexOf('Lofi')); //-1

//Includes
console.log(names.includes('tia')); //true
console.log(names.includes('Lofi')); //false


