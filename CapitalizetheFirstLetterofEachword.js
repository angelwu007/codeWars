Capitalize the First Letter of Each Word
Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
Examples
"This is a title" ➞ "This Is A Title"

"capitalize every word" ➞ "Capitalize Every Word"

"I Like Pizza" ➞ "I Like Pizza"

"PIZZA PIZZA PIZZA" ➞ "PIZZA PIZZA PIZZA"


//================ My solution ==================


function makeTitle(str) {
	let cap = str.split(' ').map(word => word[0].toUpperCase()+word.substring(1));
	return cap.join(' ')
}


//================= other solutions ==================

let makeTitle = x => x.replace(/(^\w|\s\w)/g, x => x.toUpperCase());


function makeTitle(str) {
  return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1)).join(' ');
}