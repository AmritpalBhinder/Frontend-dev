//Wap to update given element in given index
let arr = [10, 20, 30, 40, 50];

let index = 2;      
let newValue = 99;  

if (index >= 0 && index < arr.length) {
    arr[index] = newValue;
    console.log("Updated Array:", arr);
} else {
    console.log("Invalid index");
}
