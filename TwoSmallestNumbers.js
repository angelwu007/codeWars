Return the Sum of the Two Smallest Numbers
Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
Examples
[19, 5, 42, 2, 77] ➞ 7

[10, 343445353, 3453445, 3453545353453] ➞ 3453455

[2, 9, 6, -1] ➞ 8

[879, 953, 694, -847, 342, 221, -91, -723, 791, -587] ➞ 563

[3683, 2902, 3951, -475, 1617, -2385] ➞ 4519


//=============== My solution ==================

function sumTwoSmallestNums(arr) {
	const newArr = arr.filter(num => num >=0 );
	const sortArr = newArr.sort ((a,b) => a-b);
	return sortArr[0] + sortArr[1];
}

//================== Alternative solutions ============

function sumTwoSmallestNums(arr) {
 arr = arr.sort((a,b) => a - b).filter(x => x > 0);
 return arr[0] + arr[1];

}

function sumTwoSmallestNums(arr) {
  return arr.filter((item) => item >= 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, item) => acc + item);
}