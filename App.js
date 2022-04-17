//COunter pattern to give o(n)

const a1 = [1,2,3];
const a2 = [1, 9, 4];

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
    let frequencyCounter1 = {};
     let frequencyCounter2 = {};

    for (let val of arr1 ) {
        frequencyCounter1[val] = (frequencyCounter1[val] ?? 0) + 1 ;   
    }

    for (let val of arr2 ) {
        frequencyCounter2[val] = (frequencyCounter2[val] ?? 0) + 1 ;   
    }
    console.log(frequencyCounter1, frequencyCounter2);

   for(let key in frequencyCounter1 ) {
     if(!(key ** 2 in frequencyCounter2))  {
       return false;
     }

     if( frequencyCounter1[key] !== frequencyCounter2[key ** 2] ) {
       return false
     }
   }
   return true;
  }
same(a1, a2);


//ANagram pattern 
//handle empty scenario 
let string1 = 'ice';
let string2 = 'ccei';

// i, c and e i

function isValidAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let frequncyString1 = {}; //{i: 1, c: 1, e: 1 }
    let frequncyString2 = {};
 let string1 = str1.split('');
 let string2 = str2.split('');
    for (let value of string1 ) {
        frequncyString1[value] = (frequncyString1[value] ?? 0) + 1;
    }
  for (let value of string2 ) {
        frequncyString2[value] = (frequncyString2[value] ?? 0) + 1;
    }

 for (let key in frequncyString1 ) {
  if(!( key in frequncyString2) ) {
   return false;
  }
  if( frequncyString1[key] !== frequncyString2[key] ) {
   return false;
  }
 }
 return true;

    
}

isValidAnagram(string1, string2);