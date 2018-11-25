Alphabet Soup
Create a function that takes a string and returns a string with its letters in alphabetical order.
Examples
"hello" ➞ "ehllo"

"edabit" ➞ "abdeit"

"hacker" ➞ "acehkr"

"geek" ➞ "eegk"

"javascript" ➞ "aacijprstv"




//================== My solution====================

function AlphabetSoup(str) {
	return str.split('').sort().join('');

}






//=============== Good practice ============



function AlphabetSoup(str) {
  return [...str].sort().join('');
}


function AlphabetSoup(str) {
  return Array.from(str).sort().join('');
}



AlphabetSoup = str => [...str].sort().join``