Purge and Organize
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]


//-----------------My solution -------------------


function uniqueSort(arr) {
	let uniqueArr = Array.from(new Set(arr));
	return uniqueArr.sort((a,b)=> a - b)
}


//--------------- Other solutions -----------------


function uniqueSort(arr) {
  return Array.from(new Set(arr)).sort((a,b) => a - b);
}

const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a > b)