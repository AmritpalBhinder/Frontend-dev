// function - reusable block of code which perform a specific task.
// to execute a function we need to call it.
//sorting recursion
// recursion -  function call itself, at that moment their generate a loop like scenario. 

// wap to print 1 to n using recursion.

// const n = 15;

const  print=(i,n) => {
     console.log(i);
     i++;
    if (i<=n) {
        print(i,n);
   }
}
print(1,20);