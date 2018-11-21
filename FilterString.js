Filter out Strings from an Array
Create a function that takes an array of positive numbers and strings and returns a new array without the strings. In other words, remove all strings from an array of elements.
Filter out all strings.
Return only numbers.
Examples




//======================My solution==============


function filterArray(arr) {
	return arr.filter(item => typeof item === 'number');
}




