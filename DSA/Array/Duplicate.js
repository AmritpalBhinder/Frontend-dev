// Wap to remove duplicate element of array.

const arr = [7, 2, 7, 1, 5]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr.splice(j, 1);
        }
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}



console.log(arr);

//wap to find frequency without usiing any built in methods and property