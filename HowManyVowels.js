
How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples
"Celebration" ➞ 5

"Palm" ➞ 1

"Prediction" ➞ 4


//================= My solution ====================

function countVowels(str) {
	str = str.split('')
	var result = 0;
	const vowels = ['a','e','i','o','u'];
	for(var i =0; i < str.length; i++ )
		if(vowels.includes(str[i])){
			result++;
		}
	return result
}


//================= Good practices ===============


function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

function countVowels(str) {
  return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;
}


function countVowels(str) {
  var c = 0;
  for (var i = 0; i < str.length; i++) {
    if ("aeiou".indexOf(str.charAt(i)) != -1) {
      c++;
    }
  }
  return c;
}