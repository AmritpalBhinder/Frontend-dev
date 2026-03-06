// Wap to find largest number in an array.

const arr = [15,20,8,55,60,10]
let max = 0;

for(let i=1;i<arr.length;i++ ){
    if(max>arr[i]){
        max = arr[i];
    }
}

console.log(max);



// let max = 15;
    // 1. loop -> i=1, 1<arr.length(6) : true -> entered loop
        // if(max<arr[i]) => if(15<20) : true -> max = arr[i] 
        //  max = 20
        // i++;
    // 2. loop -> i=2, 2<arr.lngth(6) : true -> entered loop
        // if(max<arr[i]) => if(20 < 8) : false 
        // max = 20
        // i++;
    // 3. loop -> i=3, 3<arr.length(6) : true -> entered loop
        // if(max<arr[i]) => if(20 < 55) : true -> max = arr[i]  
        // max = 55
        // i++;
    // 4. loop -> i=4, 4<arr.length(6) : true -> entered loop
        // if(max<arr[i]) => if(55 < 60) : true -> max = arr[i]
        // max = 60
        // i++;
    // 5. loop -> i=5, 5<arr.length(6) : true -> entered loop
        // if(max<arr[i]) => if(60 < 10) : false 
        // max = 60
        // i++;
    // 6. loop -> i=6, 6<arr.length(6) : false -> loop break 
    
    // console.log(max : 60)

//------------------------------------------------------------------descending order--------------------------------------------------------------//

// const arr = [2, 4, 1, 15, 7, 9, 0]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr)

