//Wap to find frequency of an element in an array.
const arr =[7,2,7,1,5,2]
 
for(let i=0;i<arr.length;i++){
    let count = 1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
           count++;
            arr.splice(j,1);
        }
    }
    console.log(arr[i]+"="+count);
}