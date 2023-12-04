//1. Display numbers in the input field

function displayNumber(num){
  result.value+=num;
}

//2. clear input field
function clearBox(){
  result.value="";
}

//3. Evaluate expression
function evaluateExp(){

  //Method1
  // exp=result.value;//6*6
  // output=eval(exp);//eval is a fn in JS to evaluate expressions
  // result.value=output;

  //method2
  result.value=eval(result.value);
}

//4. Remove last item from the input field

function removelastItem(){
  result.value=result.value.slice(0,-1);
  //give 0,-1 if we wanna go to left side
}