// Wap to print Fibonacci series up to n terms.

let first = 0;
let second = 1;
console.log(first);
console.log(second);
for(let i=0;i<=20;i++)
{
    let third =  first + second;
    console.log(third);
    first = second;
    second = third;
}