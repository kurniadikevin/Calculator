
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
let input = document.querySelector('.input');// number for display 
let allButtons = document.querySelectorAll('.button');
let eqButton = document.querySelector('.buttonEqual');
let allOperator = document.querySelectorAll('.operator');
let inputData = '';// number for data
let clearBtn = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');





//make loop for every click on number return the inner.text value to input click
function clickNumber(){
    for( let i = 0; i < allButtons.length; i++){
     allButtons[i].addEventListener( 'click', function(){
       let inputClick = this.textContent;
       inputData += inputClick;
       input.textContent += inputClick;// for display
       console.log(inputClick);// test console log
       })
    }
};


// operator on click (BACK UP )
/*
 function clickOperator(){
    for( let i = 0; i< allOperator.length; i++){
      allOperator[i].addEventListener( 'click', function(){
      firstNumber = inputData;// 
      operatorValue = this.id;
      input.textContent += this.textContent;
      inputData = '';
   
      console.log('firstNum: '+firstNumber);//
      console.log('OPvalue: ' + operatorValue);//
      }
      )}
    };
    */

    // operator on click
    function clickOperator(){
        for( let i = 0; i< allOperator.length; i++){
          allOperator[i].addEventListener( 'click', function(){
          if( operatorValue != null){
            secondNumber = inputData;
            firstNumber = arithmetic(firstNumber,secondNumber,operatorValue);
            operatorValue = this.id;
            input.textContent += this.textContent;// for display
            inputData = '';
          } else{
          firstNumber = inputData;
          operatorValue = this.id;
          input.textContent += this.textContent;// for display
          inputData = '';
       
          console.log('firstNum: '+firstNumber);//
          console.log('OPvalue: ' + operatorValue);//
          }
          }
          )}
        };

function equal(){
  eqButton.addEventListener('click',function(){
    secondNumber = inputData;
    result.textContent = arithmetic(firstNumber,secondNumber,operatorValue);
    console.log('secondNumber ' +secondNumber);
    })
};

function clearData(){
  clearBtn.addEventListener('click',function(){
    result.textContent= '0';
    input.textContent='';
    firstNumber -= firstNumber;
    secondNumber -= secondNumber;
    inputData='';  
  })
}

// delete last input
/*
function deleteNumber(){
  deleteBtn.addEventListener('click',function(){
    inputData -= inputClick;
    input.textContent -= inputClick;
  })
}
*/



clickNumber();
clickOperator();
equal();
clearData();
//deleteNumber();
console.log('firstNum '+firstNumber);

// add function for clear and delete
// if first number not null firstNumber is result of last result