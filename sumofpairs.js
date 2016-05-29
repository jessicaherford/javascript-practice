var sum_pairs = function(ints, s){
  

    for(i=0; i < ints.length; i++){
      console.log(ints[i] + ints[i+1]);
    }


}

l1 = [1, 4, 8, 7, 3, 15];

// 7 + 1

sum_pairs(l1, 8);



var data = [1,2,3,4,5]; // An array to sum
// Compute the sum of the array elements
var sum = 0; // Start at 0
data.forEach(function(value) { sum += value; }); // Add each value to sum
sum // => 15
// Now increment each array element
data.forEach(function(v, i, a) { a[i] = v + 1; });
data // => [2,3,4,5,6]
