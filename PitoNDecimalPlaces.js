Pi to N Decimal Places
Given a number n, write a function that returns PI to n decimal places.
Examples
5 ➞ 3.14159

4 ➞ 3.1416

15 ➞ 3.141592653589793


//============= My solution=============

function myPi(n) {
	return Number(Math.PI.toFixed(n));
}




//================ Alternative Solutions =================


const myPi = decimals => parseFloat(Math.PI.toFixed(decimals));


function myPi(n) {
  var factor = Math.pow(10, n);
  return Math.round(Math.PI * factor) / factor;
}