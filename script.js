
function arithmetic(a,b,operator){
    //your code here!
   const mathFunction = {
     "add": function(x,y){ return parseFloat(x) + parseFloat(y);} ,   // make object function list for every operator needed 
     "subtract": function(x,y){ return parseFloat(x) - parseFloat(y);},
     "multiply": function(x,y){ return parseFloat(x) * parseFloat(y);},
     "divide" : function(x,y){ return parseFloat(x) / parseFloat(y);},
     "power2" : function(x){ return parseFloat(x) * parseFloat(x);}
   }
   return mathFunction[operator](a,b);       // return object with variable
  }


let firstNumber;
let secondNumber;
let operatorValue;

let result = document.querySelector('.display');
let input = document.querySelector('.input');
let allButtons = document.querySelectorAll('.button');
let eqButton = document.querySelector('.buttonEqual');
let allOperator = document.querySelectorAll('.operator');
let inputData = '';





//make loop for every click on number return the inner.text value to input click
function clickNumber(){
    for( let i = 0; i < allButtons.length; i++){
     allButtons[i].addEventListener( 'click', function(){
       let inputClick = this.textContent;
       inputData += inputClick;
       input.textContent += inputClick;
       console.log(inputClick);// test console log
       })
    }
};



// operator on click
function clickOperator(){
    for( let i = 0; i< allOperator.length; i++){
      allOperator[i].addEventListener( 'click', function(){
      firstNumber = inputData;
      operatorValue = this.id;
      input.textContent += this.textContent;
      inputData = '';
    
      
      console.log('firstNum: '+firstNumber);//
      console.log('OPvalue: ' + operatorValue);//
      
    })
    }};

function equal(){
  eqButton.addEventListener('click',function(){
    secondNumber = inputData;
    result.textContent = arithmetic(firstNumber,secondNumber,operatorValue);
    console.log('secondNumber ' +secondNumber);

  })

};



clickNumber();
clickOperator();
equal();


// display good but variable for variable secondNumber still fals