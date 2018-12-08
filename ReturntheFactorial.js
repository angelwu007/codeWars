Return the Factorial
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.
Examples
3 ➞ 6

5 ➞ 120

13 ➞ 6227020800
Notes
Assume all inputs are >= 0.
0! = 1.


//=============== My solution =================


function factorial(int) {
	if (int === 0){
		return 1
	}else{
		var x = 1;
		for (var i = int; i>0; i--){
				x = x*i;
		}
		return x;
	}
}

//================= Better solutions ================

const factorial = num => num === 1 ? num : num * factorial(num - 1);


