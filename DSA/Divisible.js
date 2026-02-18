//Wap to print value of arrray which only divisible by 6.

let arr =[12,58,66,45,23,85,33,90] // take the array

for(let i=0;i<arr.length;i++){
    if(arr[i]%6==0){
        console.log(arr[i])
    }
}

// 1. loop -> i = 0, 0<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[0]%6 ==0 => 12 % 6 == 0 : => 12 is divisible by 6 , true -> print console.log statement
    // arr[i] =arr[0] = 12

// 2. loop -> i = 1, 1<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[1]%6 ==0 =>58 % 6 == 0 : => 58 is  not divisible by 6 , false : so not print console.log statement
    
// 3. loop -> i = 2, 2<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[2]%6 ==0 => 66 % 6 == 0 : => 66 is divisible by 6 , true -> print console.log statement
    // arr[i] =arr[0] = 66

// 4. loop -> i = 3, 3<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[3]%6 ==0 => 45 % 6 == 0 : => 45 is not divisible by 6 , false: so not print console.log statement

// 5. loop -> i = 4, 4<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[4]%6 ==0 => 23 % 6 == 0 : => 23 is not divisible by 6 , false : so not print console.log statement
    
// 6. loop -> i = 5, 5<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[5]%6 ==0 => 85 % 6 == 0 : => 85 is not divisible by 6 , false: so not print console.log statement

// 7. loop -> i = 6, 6<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[6]%6 ==0 => 33 % 6 == 0 : => 33  is not divisible by 6 , false: so not print console.log statement
    
// 8. loop -> i = 7, 7<arr.length(8) : true -> entered loop
    // arr[i]%6 == 0  => arr[7]%6 ==0 => 90 % 6 == 0 : => 90 is divisible by 6 , true -> print console.log statement
    // arr[i] =arr[0] = 12    

// 9. loop -> i=8, 8<arr.length(8): false -> loop break and output : [12,66,90]    