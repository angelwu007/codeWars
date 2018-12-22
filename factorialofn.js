Write a function to calculate the factorial of a number.
Write a function to calculate the factorial of a number.
Examples
0 ➞ 1

5 ➞ 120

10 ➞ 3628800


//=================== My solution =================


function factorial(x) {
  return x==0 ? 1 : x * factorial(x-1);
}


//================== Alternative solutions =================


function factorial(x) {
  if(x==0)
		return 1;
	else
		return x*factorial(x-1)
}


function factorial(x) {
  return x>1 ? x*factorial(x-1) : 1
}

const factorial = x => {
	if (x == 0) return 1
	i = x - 1
	while (i > 0) {
		x *= i
		i--
	}
	return x
}