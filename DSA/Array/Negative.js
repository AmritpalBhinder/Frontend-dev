// Wap to check if all elements are negative.

let arr = [-10, -20, 60, -80, -50]
let isNegative = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        isNegative = false;
        break;
    }
}

if (isNegative) {
    console.log("All elements are negative.")
}
else {
    console.log("All elements are not negative.")
}