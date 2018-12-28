Equality of 3 Values
Write a function that takes three input values (a, b, c) and returns the number of equal values.
Examples
3, 4, 3 ➞ 2

1, 1, 1 ➞ 3

3, 4, 1 ➞ 0 
Notes
Your function must return 0, 2 or 3.



//=============== My solution ================


function equal(a, b, c) {
	if ( a === b && b === c){
		return 3
	} else if ( a === b || a === c || b === c){
		return 2
	} else{
		return 0
	}
		
}


//=============== Best Solution ==============

function equal(a, b, c) {
	const size = (new Set([a, b, c])).size; // this line return the length of the unique Set of elements
	return size === 3 ? 0 : 4 - size;
}

