//Add a function which accepts sorted array of integers  
//IP - [-2, -1, 0, 1, 2]
// It should find the first pair whose sum is 0 and return that array.

//input 
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