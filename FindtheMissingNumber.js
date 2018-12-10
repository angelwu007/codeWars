Find the Missing Number
Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
Examples
[1, 2, 3, 4, 6, 7, 8, 9, 10] ➞ 5

[7, 2, 3, 6, 5, 9, 1, 4, 8] ➞ 10

[10, 5, 1, 2, 4, 6, 8, 3, 9] ➞ 7
Notes
The array of numbers will be unsorted (not in order).
Only one number will be missing.


//==================== My solution ==================


function missingNums(arr) {
	return 55-(arr.reduce((a,b) => a+b));
}


//=================== alternative solutions ===================

const missingNums = (arr) => {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
}

function missingNums(arr) {
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return Number(arr1.filter(x => arr.indexOf(x) === -1 ));
}