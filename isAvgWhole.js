Is the Average of All Elements a Whole Number?
Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false



//==============My solution=================



function isAvgWhole(arr) {
	 return Number.isInteger(arr.reduce((a,b) => a+b)/arr.length);
}


//================ Alternative solution================



function isAvgWhole(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (arr.reduce(reducer) / arr.length) % 1 === 0 ? true : false;
}


function isAvgWhole(arr) {
	let a = 0;
	arr.forEach((item) => {
		a = a + item;
	});
	return Number.isInteger(a / arr.length);
}