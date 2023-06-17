//calculator on
isCalcualatorOn=false
var resultArea=document.getElementById('result')

function turnOn(){
    isCalcualatorOn=true
    result.value=0
    resultArea.style.background='rgb(187, 187, 187)'
}
// displaying the number into input field

function displayNumber(num){
    if(isCalcualatorOn){
        if(result.value==null||result.value==0){
            result.value=num
        }else{
            result.value+=num 
        }
       
    }
    
}

// clear the screen
function clearText(){
    if(isCalcualatorOn){
        result.value=0
    }
}

// evaluate the expresson using javascript eval function
function evaluateExp(){
    // method 1
    // exp=result.value //placing the value to a variable
    // output=eval(exp)  //evaluating the variable ie,1+2=3
    // result.value=output  //asssigning the autput value to the result.value
    
    // method 2
    if(isCalcualatorOn){
        result.value=eval(result.value)
    }
   
}

// deleting the last value when we enter numbers
function removeLastItem(){
    currentValue=result.value
    result.value=currentValue.slice(0,-1)
}

//turn off calculator
function turnOff(){
    isCalcualatorOn=false
    result.value=''
    resultArea.style.background='grey'
}