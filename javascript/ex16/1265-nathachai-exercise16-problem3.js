
let userCount = 0 ;

function incrementUserCount (){
    userCount ++ ;
    return userCount ;
}

// function incrementUserCount2 (userCount){
//     return userCount + 1 ;
// }



console.log(incrementUserCount()); // ot 1
console.log(incrementUserCount()); // ot 2
userCount = 0;
userCount = incrementUserCount2(userCount); // ot 1
console.log(userCount);
userCount = incrementUserCount2(userCount); // ot 2
console.log(userCount);