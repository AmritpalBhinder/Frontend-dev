//Wap to find prime numbers in array

let arr = [12, 58, 66, 45, 23, 85, 33, 90]; 
let count = 1;
let isPrime = true;
for(let i=0;i<arr.length;i++){
    
    for(let j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            isPrime = false;
            break;
        }
        else{
            count++;
        }
    }
    
}

console.log("Total prime numbers in array: "+count);
// 1. loop -> i=0, 0<arr.length(8) : true -> entered loop
    // isPrime = true
    // 1.loop -> j=2, 2<arr[i](12):true -> entered loop
        // arr[i]%j == 0 => arr[0]%2 == 0 => 12%2 == 0 : true -> isPrime = false, break loop
        // if(isPrime) : false -> not print console.log statement
    // j++;
    // 2. loop -> j=3, 3<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%3 == 0 => 12%3 == 0 : true -> isPrime =  false, break loop
        // if(isPrime): false -> not print console.log statement
    // j++;
    // 3. loop -> j=4, 4<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%4 == 0 => 12%4 == 0 : true -> isPrime = false, break loop
        // if(isPrime): false -> not print console.log statement
    // j++;
    // 4. loop -> j=5, 5<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%5 == 0 => 12%5 == 0 : false -> isPrime = true, continue loop
        // if(isPrime): true -> print console.log statement
    // j++;
    // 5. loop -> j=6, 6<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%6 == 0 => 12%6 == 0 : true -> isPrime = false, break loop
        // if(isPrime): false -> not print console.log statement
    // j++;
    // 6. loop -> j=7, 7<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%7 == 0 => 12%7 == 0 : false -> isPrime = true, continue loop
        // if(isPrime): true -> print console.log statement
    // j++;
    // 7. loop -> j=8, 8<arr[i](12):true -> entered loop
        // arr[i]%j ==0 => arr[0]%8 == 0 => 12%8 == 0 : false -> isPrime = true, continue loop    