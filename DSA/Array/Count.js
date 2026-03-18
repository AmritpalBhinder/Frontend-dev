// Wap to count of occurencies of an element in an array.

let arr = [10,52,36,52,85]


for(let i=0;i<arr.length;i++){
    let count = 1;
    for(let j=i+1;i<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
           
        }
    }

}

console.log("Count of occurencies of an element in an array is: "+count);