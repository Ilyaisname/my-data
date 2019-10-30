let arr = [44, 33, 66, 22, 43];
let arr2 = [55, 77, 32, 123,];

function findMaxValue(array) {
  let maxValue = array[0];
  let index = 0;

    for( let i = 0; i < array.length; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i];
            index = i;
        }    
    }
        
    return  index;
} 


console.log( findMaxValue(arr) );
console.log( findMaxValue(arr2) );
