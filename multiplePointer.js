//Add a function which accepts sorted array of integers  
//IP - [-2, -1, 0, 1, 2]
// It should find the first pair whose sum is 0 and return that array.

let r = [-3,-2, -1, 0, 1, 2, 10]; //4

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1

    console.log(arr.length);

    while(left < right) {
        let sum = arr[left] + arr[right];
        if( sum === 0 ) {
            return [arr[left] , arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left ++;
        }
    }
}


//countUniqueValues which takes in sorted array of integers  
//IP - [-2, -2, -1, -1, 0, 0, 1, 2, 2, 3 ,4] //7
//Ip - [-1,1,2,2,3] //4
// It should count the number of unique values in the array

let numberArray = [-1,-1,1,1,2,2,3,4,5];
function countUniqueValues(arr) {
   if(arr.length === 0) {
       return 0;
   }
   let i = 0;
   for (let j = 1; j< arr.length; j++) {
       if(arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j];
       }
   }
   return i +1;


}

countUniqueValues(numberArray)