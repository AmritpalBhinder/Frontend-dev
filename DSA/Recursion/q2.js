// Wap to print sum of only even numbers by recursion.

function sumEvenNumers(n){
    if(n<=0)
    {
        return 0;
    }
    if(n%2==0){
        return n + sumEvenNumers(n-1);
    }
    else{
        return sumEvenNumers(n-1);
    }
}

console.log(sumEvenNumers(10));