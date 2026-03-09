// Wap to check if all elements are positive.

let arr = [10, 20, -5, 60, 55]
 let isPositive = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        isPositive = false;
        break;
    }
}

if(isPositive){
    console.log("All elements are positive.")
}
else{
    console.log("All elements are not positive.")
}