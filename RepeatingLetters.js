Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.
Examples
"String" ➞ "SSttrriinngg"

"Hello World!" ➞ "HHeelllloo  WWoorrlldd!!"

"1234!_ " ➞ "11223344!!__  "



//===========================My solution===============
function doubleChar(str) {
	return str.split('').map(letter => letter+letter).join('');
}


//===================Different Solution==================

doubleChar = str => [...str].map(v => v+v).join``