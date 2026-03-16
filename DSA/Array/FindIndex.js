// Wap to find the index of an element in an array.

let arr = [15,20,6,0,80]

let element = 6;

let index = -1;

for(let i=0;i<arr.length;i++){
    if(arr[i] === element){
        index = i;
        break;
    }
}

if(index !== -1){
    console.log("Element found at index: " + index);
}
else{
    console.log("Element not found in the array.");
}