// function formatConversion(num,func,sign){
//     return 
// }



let 
formatConversion = (num,func,sign) => {
    let number =  func(parseFloat(num)).toFixed(2)
    if (sign == "°C") {
        return num +" "+ sign + " is " + number + " °F ";
    } else {
        return num +" " + sign + " is " + number + " °C ";
    }
     



}

    

// (0°C × 9/5) + 32 = 32°F

let celciusToFahrenheit = (num) => (num.toFixed(2) * (9/5)) +32 

// (0°F − 32) × 5/9 = 0°C

let fahrenheitTocelcius = (num) => (num.toFixed(2)-32)* (5/9) 


console.log(formatConversion(20,celciusToFahrenheit,"°C"));
console.log(formatConversion(98.6,fahrenheitTocelcius,"°F"));
console.log(formatConversion(0,celciusToFahrenheit,"°C"));
console.log(formatConversion(32,fahrenheitTocelcius,"°F"));
