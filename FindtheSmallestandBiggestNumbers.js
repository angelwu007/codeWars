Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Examples
[1, 2, 3, 4, 5] ➞ [1, 5]

[2334454, 5] ➞ [5, 2334454]

[1] ➞ [1, 1]



//============= My solution =================


function minMax(arr) {
	return [Math.min(...arr),Math.max(...arr)];
}



//============== Alternative solutions============


function minMax(arr) {
  arr.sort(function(a, b){return a-b});
  return [arr[0], arr[arr.length-1]];
  
}


function minMax(arr) {
  return[Math.min.apply(null, arr), Math.max.apply(null, arr)];
}
