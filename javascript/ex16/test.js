
const getMiddleElements = (arr) => {
    // let result = [];
    let n = arr.length;
    if (n % 2 == 0) {
        return arr.slice((n/2)-1,(n/2)+1);
        // result.push(arr[n / 2 - 1]);
        // result.push(arr[n / 2]);
    }
     else {
        return arr.slice(Math.floor(n/2),Math.floor(n/2)+1 );
    //     result.slice(arr[Math.floor(n / 2)]);
    //     // result.push(arr[Math.floor(n / 2)]);
    }
    //     return result;
    // // return result;
}
console.log(getMiddleElements([1,2,3,4,5])); //3
console.log(getMiddleElements([1,2,3,4])); //2.,3
