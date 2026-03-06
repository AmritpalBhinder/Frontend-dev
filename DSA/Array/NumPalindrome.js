// Wap to check number is  palindrome or not.

const num =  123;
let temp = num;
let rev = 0;

while(temp>0){
    const ld = temp%10;
    rev = (rev*10) + ld;
    temp = Math.floor(temp/10);
}

if(num == rev){
    console.log("Number is palindrome");
}
else{
    console.log("Number is not palindrome");
}



