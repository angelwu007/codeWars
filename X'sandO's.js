X's and O's
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true (case insensitive)

XO("zpzpzpp") ➞ true (returns true if no x and o)

XO("zzoo") ➞ false


// ================= My solution =================


function XO(str) {
	let x = 0 , o = 0;
	str.toLowerCase().split('').forEach(el => {
		if(el === 'x'){
			x++
		}else if(el === 'o'){
			o++
		}
	})
	return x === o
}


//=============== Good Practices ================



function XO(str) {
  let x = str.toLowerCase().split('').filter(x => x === 'x').length;
  let o = str.toLowerCase().split('').filter(x => x === 'o').length;
  return x === o;
}


function XO(str) {
  
  return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
}
