// Wap to remove a specific element from an array.

let arr = [10,20,30,40,50]      

for(let i = 0;i<arr.length;i++){
    arr.splice(2,1)
    break;
}

console.log(arr);