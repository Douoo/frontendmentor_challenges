class Calculator {
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandText=currentOperandTextElement;
        this.previousOperandText=previousOperandTextElement;
        this.reset();
    }

    reset(){
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined;
    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }

    operateWith(operand){
         
        if(this.currentOperand==='')return;
        if(this.previousOperand!==''){
            this.compute();
        }
        this.previousOperand=this.currentOperand;
        this.operation=operand;
         
        this.currentOperand='';
    }

    compute(){
         
        let computedValue;
        const prevValue=parseFloat(this.previousOperand);
        const currentValue=parseFloat(this.currentOperand);

        switch(this.operation){
            case 'x':
                computedValue=prevValue*currentValue;
                break;
            case '/':
                computedValue=prevValue/currentValue;
                break;
            case '+':
                computedValue=prevValue+currentValue;
                break;
            case '-':
                computedValue=prevValue-currentValue;
                break;
            default:
                return ;
        }
        this.currentOperand=computedValue;
        this.previousOperand='';
        this.operation=undefined;
    }

    formatDisplayNumber(number){
        const stringNumber=number.toString();
        const integerNumber=parseFloat(stringNumber.split('.')[0]);
        const decimalNumber=stringNumber.split('.')[1];
        let integerOnDisplay;//This is the number on the screen

        if(isNaN(integerNumber)){
            integerOnDisplay=''
        }else{
            integerOnDisplay=integerNumber.toLocaleString('en',{
                maximumFractionDigits:0
            });
        }
        if(decimalNumber!=null){
            return `${integerOnDisplay}.${decimalNumber}`;
        }else{
            return integerOnDisplay;
        }
    }

    appendNumber(number){
        if(number==='.'&&this.currentOperand.includes('.'))return;
        this.currentOperand=this.currentOperand.toString()+ number.toString();

    }

    updateDisplay(){
        this.currentOperandText.innerText=this.formatDisplayNumber(this.currentOperand);
        if(this.operation!=null){
            this.previousOperandText.innerText=`${this.formatDisplayNumber(this.previousOperand)}${this.operation}`;
        }else{
            this.previousOperandText.innerText='';
        }
    }

}

const numberBtns=document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const currentOperandTextField=document.querySelector('[data-current-operand]');
const previousOperandTextField=document.querySelector('[data-previous-operand]');
const equalsBtn=document.querySelector('[data-compute]');
const deleteBtn=document.querySelector('[data-delete]');
const resetBtn=document.querySelector('[data-reset]');


const calculator=new Calculator(currentOperandTextField, previousOperandTextField);

//functionality for the number events
numberBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


//the operation functions add, divide, multiply, and subtract
operationBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
        
        calculator.operateWith(button.innerText);
        calculator.updateDisplay();
    })
})

//the equals btn function
equalsBtn.addEventListener('click', ()=>{
     
    calculator.compute();
    calculator.updateDisplay();
})

//delete function
deleteBtn.addEventListener('click', ()=>{
    calculator.delete();
    calculator.updateDisplay();
})


//reset function
resetBtn.addEventListener('click', ()=>{
    calculator.reset();
    calculator.updateDisplay();
})


//keyboard functionality 
//on number press
document.addEventListener('keydown',(event)=>{
    if(event.key>=0&&event.key<=9||event.key==='.'){
        calculator.appendNumber(event.key);
        calculator.updateDisplay();
    }else if(event.key==='Enter'){
        calculator.compute();
        calculator.updateDisplay();
    }else if(event.key==='*'||event.key==='/'||event.key==='+'||event.key==='-'){
        calculator.operateWith(event.key);
        calculator.updateDisplay();
    }else if(event.key==='Backspace'){
        calculator.delete();
        calculator.updateDisplay();
    }
});
