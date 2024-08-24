var list ;

list = readInput();

displayStats(list);


function readInput() {
    let check = true ,getInput,listPositive = [];

    while (check = true ) {
        getInput = prompt("Enter an integer (a negative to quit):");

        if (getInput > 0) {
            listPositive.push(getInput);
        } else if (getInput < 0) {
            break;
        } else {
        }
    }
    return listPositive;
}
function displayStats(arry) {
    let sum = 0,minimum,maximum,avg,numberInt;

    minimum = Math.min(...arry);
    maximum = Math.max(...arry);

    for (let i = 0; i < arry.length; i++) { 
        numberInt = parseInt(arry[i]);
        sum += numberInt; 
      } 
    avg = sum / arry.length ;
    
    arry.length == 0 ? alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0") : alert("For the list " + arry + ", the average is " + avg.toFixed(2) + ", the minimum is " + minimum + ", and the maximum is " + maximum);

}
