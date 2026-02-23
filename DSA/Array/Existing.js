// Wap to find given element is existing in array or not?

let arr = [25, 89, 56, 22, 66, 38];
let element = 56;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
        found = true;
        break;
    }
}

if(found){
    console.log("Element is existing in array");
}
else{
    console.log("Element is not existing in array");
}

// 1. loop i=0, 0<arr.length(6): true -> entered loop
    //arr[i] == element => arr[0] == element => 25 == 56 => false : found = false;
    // Element is not existing in array statement will be print in console.

// 2. loop i=1, 1<arr.length(6): true -> entered loop
    //arr[i] == element => arr[1] == element => 89 == 56 => false : found = false;
    // Element is not existing in array statement will be print in console.
    
// 1. loop i=2, 2<arr.length(6): true -> entered loop
    //arr[i] == element => arr[2] == element => 56 == 56 => true : found = true;
    // loop will be break.
    // Element is  existing in array statement will be print in console.    