// Wap to find sum of first and last digit of a number.

const num = 3658;
const ld = num % 10;
let temp = num;

while (temp > 9) {
    temp = Math.floor(temp / 10);
}
const fd = temp % 10;

const sum = fd + ld;
console.log("Sum of first and last digit of a number is " + sum);



// num = 3658
// ld = num % 10, ld = 3658%10, ld = 8
// temp = num ,  temp = 3658

// while(temp>9),while(3658>9) -> true -> entered loop
    // temp = Math.floor(temp/10), temp = Math.floor(3658/10), temp = 365

// while(temp>9),while(365>9) -> true -> entered loop
    // temp = Math.floor(temp/10), temp = Math.floor(365/10), temp = 36

// while(temp>9),while(36>9) -> true -> entered loop
    // temp = Math.floor(temp/10), temp = Math.floor(36/10), temp = 3
    
// while(temp>9),while(3>9) -> false -> loop break
// fd = temp % 10, fd = 3 % 10, fd = 3    