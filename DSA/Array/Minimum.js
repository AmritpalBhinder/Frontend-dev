// Wap to find the minimum element in an array.

let arr = [10,50,92,5,16,2]
let min = arr[0];

for(let i=0;i<arr.length;i++)
{
    if(min>arr[i]){
        min = arr[i];
    }
}

console.log(min);


