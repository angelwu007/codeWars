Reverse the Order of Words with Five Letters or More
Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples
"Reverse" ➞ "esreveR"

"This is a typical sentence." ➞ "This is a lacipyt .ecnetnes"

"The dog is big." ➞ "The dog is big."


// ================= My solution ==================


function reverse(str) {
	const arr = str.split(' ');
	arr.forEach((word,i) => {
		if(word.length >= 5){
			arr[i]= word.split('').reverse().join('')
		}
	})
	return arr.join(' ')
}

// =================== Best solutions =============


function reverse(str) {
  return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ');
}


function reverse(str) {
  return str.split(' ').map(s => {
    if (s.length >= 5) {return s.split('').reverse().join('')}
    else {return s}
  }).join(' ')
}