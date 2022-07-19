let previousNumber = "";
let currentNumber = "";
let operator = "";



const currentValue = document.querySelector('.currentValue');
const previousValue = document.querySelector('.previousValue');


const acBtn = document.querySelector('.clear');
acBtn.addEventListener('click', () => {
    previousNumber = "";
    currentNumber = "";
    currentValue.textContent = "0";
    previousValue.textContent = "";
    operator = "";
})

const signBtn = document.querySelector('.sign');
signBtn.addEventListener('click', changeSign);

function changeSign() {
    console.log(">>>")
    console.log(currentNumber);
    console.log(currentValue.textContent);
    if (Number(currentValue.textContent) !== "" && Number(currentValue.textContent) !== 0){
      
            currentNumber = Number(currentValue.textContent) * -1;
            currentValue.textContent = currentNumber; //needs a little tweeking
        
   }

}



const procentageBtn = document.querySelector('.procentage');
procentageBtn.addEventListener('click', () => {
    if (currentNumber == ""){
        currentNumber = previousNumber / 100;
        currentValue.textContent = currentNumber;
    } else {
    currentNumber = currentNumber / 100
    currentValue.textContent = currentNumber;
    }
})


const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
})

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
})

const minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
})

const plusBtn = document.querySelector(".plus");
plusBtn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
})



const equalsBtn = document.querySelector('.equalsTo');
equalsBtn.addEventListener('click', () =>{
    if (currentNumber != "" && previousNumber != ""){
        calculate();
    }
});

const pointBtn = document.querySelector('.point');
pointBtn.addEventListener('click', () => {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        currentValue.textContent=currentNumber;
    }
})

const operand0 = document.querySelector(".operand0");
operand0.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand1 = document.querySelector(".operand1");
operand1.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand2 = document.querySelector(".operand2");
operand2.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand3 = document.querySelector(".operand3");
operand3.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand4 = document.querySelector(".operand4");
operand4.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand5 = document.querySelector(".operand5");
operand5.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand6 = document.querySelector(".operand6");
operand6.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand7 = document.querySelector(".operand7");
operand7.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand8 = document.querySelector(".operand8");
operand8.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})

const operand9 = document.querySelector(".operand9");
operand9.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
})



function handleNumber (number) {
    if (previousNumber !== "" && currentNumber !== "" && operator === ""){
        previousNumber = "";
        currentValue.textContent = currentNumber;
    }
    if (currentNumber.length <= 11) {
        currentNumber += number;
        currentValue.textContent=currentNumber;
    }
    
}

function displayResults() {
    if (previousNumber.length <= 11) {
      currentValue.textContent = previousNumber;
    } else {
      currentValue.textContent = previousNumber.slice(0, 11) + "...";
    }
    previousValue.textContent = "";
    operator = "";
    currentNumber = "";
  }

  function handleOperator(op) {
    if (previousNumber === "") {
        previousNumber = currentNumber;
        operatorCheck(op); 
    } else if (currentNumber === "") {
        operatorCheck(op);
    } else {
        calculate();
        operator = op;
        currentValue.textContent = "0";
        previousNumber.textContent = previousNumber +" "+operator;

    }   
}

function operatorCheck(text) {
    operator = text;
    previousNumber.textContent = previousNumber +" "+operator;
    currentValue.textContent= "0";
    currentNumber = "";
}

function calculate (){
    console.log(`at calculate, previousNumber is ${previousNumber}, currentnum is: ${currentNumber}`);
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+"){
        previousNumber = previousNumber + currentNumber;
    }

    if (operator === "-"){
        previousNumber = previousNumber - currentNumber;
    }

    if (operator === "*"){
        previousNumber = previousNumber * currentNumber;
    }

    if (operator === "/"){
        if (currentNumber === 0){
            previousNumber="Error";
            displayResults();
            return;
        }
        previousNumber = Math.round((previousNumber / currentNumber) *1000000) / 1000000;
        
    }
    previousNumber = previousNumber.toString();
    displayResults();


}





