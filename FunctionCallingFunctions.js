//In this we will se function call inside one function
//we have a food processor example in which first the apples and the oranges will be cut into pieces and then juice will be made
//so the first function is cutPieces
//The second function is foodProcessor
//In the foodprocessor we will call the cutPieces function
//this is an example to show the flow of the program 

function cutPieces(fruit){
  return fruit*4;
}
function foodprocessor(apples,oranges){
  const cutapples=cutPieces(apples);
  const cutorange=cutPieces(oranges);
  const juice= `Juice is made with ${cutapples} apple pieces and ${cutorange} orange pieces`;
  return juice;
}

console.log(foodprocessor(2,3)); //Juice is made with 8 apple pieces and 12 orange pieces
