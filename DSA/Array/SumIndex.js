// Wap to find sum of two index number from an array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 15;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == sum) {
            console.log(i , j );
        }
    }
}

// sum = 15 
// 1. loop -> i=0, 0<arr.length(9) -> true -> entered loop
    // 1. loop-> j=0+1=1, 1<arr.length(9) : true -> enetred loop
        // if(arr[i] + arr[j] == sum), if(1+2 == 15),(3==15) : false condition
        // sum = 15
        //j++
    // 2. loop -> j=2, 2<arr.length(9) : true -> entered loop
        // if(arr[i] + arr[j] == sum), if(1+3 == 15),(4==15) : false condition
        // sum = 15
        //j++
    // 3. loop -> j=3, 3<arr.length(9) : true -> entered loop
        // if(arr[i] + arr[j] == sum), if(1+4 == 15),(5==15) : false condition
        // sum = 15
        // j++
    // 4. loop -> j=4, 4<arr.length(9) : true -> entered loop
        // if(arr[i] + arr[j] == sum), if(1+5 == 15),(6==15) : false condition
        // sum = 15
        // j++
    // 5. loop -> j=5, 5<arr.length(9) : true -> entered loop
        // if(arr[i] + arr[j] == sum), if(1+6 == 15),(7==15) : false condition
        // sum = 15
        // j++        