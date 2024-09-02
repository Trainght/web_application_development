
console.log(uppercaseWords("hello","wold","javascript")) ;
// convort to uppre case
console.log(uppercaseWords("a","b","c"));

function uppercaseWords (...word) {
    return word.map((word) => word.toUpperCase());
}
