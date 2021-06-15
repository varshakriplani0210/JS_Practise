//Calculate BMI

let bmiMark,bmiJohn,wJohn,hJohn,wMark,hMark,height;
wJohn=prompt("enter john;s weight");
hJohn=prompt("enter john's height");
wMark=prompt("enter marks weight");
hMark=prompt("enter mark height")
height=hMark*hMark;
bmiMark=(wMark/(hMark*hMark))*10000;
bmiJohn=(wJohn/(hJohn*hJohn))*10000;
if(bmiJohn>bmiMark)
{
  console.log(`the bmi of john is more than mark by ${bmiJohn-bmiMark}`);
}
else{
  console.log(`the bmi of mark is more than john by ${bmiMark-bmiJohn}`);
}


