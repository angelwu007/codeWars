Positive Count / Negative Sum
Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
Examples
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] ➞ [10, -65]

[92, 6, 73, -77, 81, -90, 99, 8, -85, 34] ➞ [7, -252]

[91, -4, 80, -73, -28] ➞ [2, -105]

null ➞ []

[] ➞ []



//================= My solution ================


function countPosSumNeg(arr) {
  if (Array.isArray(arr) && arr.length > 1){
		const pos = [...arr].filter(num => num >= 0);
		const neg = [...arr].filter(num => num < 0);
		return [pos.length,neg.reduce((a,b)=> a+b)]
	}else{
		return []
	}

}

//=================== other solutions ===============

function countPosSumNeg(nums) {
  if (!nums || nums.length === 0) return []
  let pCount = 0, negSum = 0
  nums.forEach(num => {
    if (num > 0) pCount++
    if (num < 0) negSum += num
  })
  return [pCount, negSum]
}


function countPosSumNeg(nums) {
  if (nums === null || nums.length < 1) return [];
  let pos = nums.filter(x => x >= 0).length;
  let neg = nums.filter(x => x < 0).reduce((a, b) => a + b);
  return [pos, neg];
}