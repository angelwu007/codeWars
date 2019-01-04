Maskify the String
Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
Examples
"4556364607935616" ➞ "############5616"

"64607935616" ➞ "#######5616"

"1" ➞ "1"

"" ➞ ""
Notes
The maskify function must accept a string of any length.
An empty string should return an empty string (fourth example above).


//================= My solution ==============


function maskify(str) {
	if (str.length > 3){
		const mask = str.split('').map(num => '#').join('')+str.slice(str.length-4);
		return mask.slice(4)
	}
	return str
}


//================ better solutions =================

function maskify(str) {
    return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str;
}

const maskify = str => str.replace(/.(?=.{4})/g, '#');