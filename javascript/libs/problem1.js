
var getInput;
while (true) {
    getInput = prompt("Enter a positive integer");
    if (getInput > 0) {
        break;    
    }  
}

showPrimes(getInput);

function showPrimes(n) {
    let arry = [];

    for (let i=2; i<=n; i++){
        if(!isPrime(i)) continue;
        arry.push(i);
    }

    alert("For n = " + getInput + " prime numbers are " + arry );
}

function isPrime(n) {
    for (let i = 2; i < n ; i++ ){
        if (n % i == 0) return false ;
    }
    return true;

}