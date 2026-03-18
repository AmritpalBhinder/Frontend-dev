// Wap to count of occurencies of an element in an array.

let arr = [10,52,36,52,85]


for(let i=0;i<arr.length;i++){
    let count = 1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    console.log(arr[i] + " occurs " + count + " times");
}
