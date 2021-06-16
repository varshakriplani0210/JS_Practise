//In  coresion the typer conversion is doneon its own
//but there is a case such for +
//and for -,*,%,/ its different 
//like for + it is this way

let n='1'+1; //here '1' is a string and adding 1 to it will be 11
n=n-1; //now n  is 11 so 11-1=10
console.log(n);

//second example 
let x='12'-'3';
console.log(x); //here the ans is 9 because for + it acts as a string and for -,*,%,/ it does the actual manipulation;

let m=1+1;
console.log(m); //here the output is 2 as here 1 is written as 1 and not '1';
