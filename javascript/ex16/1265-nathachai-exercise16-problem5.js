console.log(filterShortStrings(["h1","hello","hey","world"]));
console.log(filterShortStrings(["a","ab","abc","abcs"]))


function filterShortStrings(arrs) {
    return arrs.filter((arr) => arr.length >=4);
}
