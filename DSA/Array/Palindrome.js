//Wap to find palindrome element in an array.

let arr = [1, 2, 1]
// const arrlen = (arr) => {
//     let i = 0;
//     while (arr[i] != undefined) { 
//         i++;
//     }
//     return i;
// }

// const arrdel=(arr,i)=>{
//     const n = arrlen(arr);
//     for( i;i<n;i++){
//         arr[i]=arr[i+1];
//     }
// }

for(let i=0;i<arr.length;i++){
    for(let j=arr.length;j>0;j--){
        if(arr[i]==arr[j]){
            console.log("Palindrome true");
        }
        else{
            console.log("Palindrome false");
        }
    }
}
