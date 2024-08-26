var inputFirst,inputSecond;

inputFirst = prompt('Enter the first number:');
inputSecond = prompt('Enter the second number:');


function largerNum(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        return null;
    } else if(num1 > num2){
        return num1;
    } else {
        return num2;
    }


};

let numlarger =  largerNum(parseFloat(inputFirst),parseFloat(inputSecond));

document.write("<p>Fine the larger Number</p")
document.write("<p>Enter two number to see which is larger.</p>")

if(numlarger == null){
    document.write("<p>Please enter valid numbers.</p>")
}else if(numlarger ==  inputFirst){
    document.write("<p>The larger number between " + inputFirst + ' and '+ inputSecond + ' is: '+ numlarger + "</p>")
}else{
    document.write("<p>The larger number between " + inputFirst + ' and '+ inputSecond + ' is: '+ numlarger + "</p>")
}

