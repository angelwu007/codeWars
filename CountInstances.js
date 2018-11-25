Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.
Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("f", "frank and his friends have offered five foxes for sale")



//===================My solution============

function charCount(myChar, str) {
	return [...str].filter(letter => letter === myChar).length;
}


//================= Alternative solution ==================

function charCount(myChar, str) {
let count = 0;
	
	for (let i of str) {
		if (myChar.includes(i)) {
			count++
		}
	}
	return count
}

function charCount(myChar, str) {
return (str.match(new RegExp(myChar,"g"))||[]).length;
}