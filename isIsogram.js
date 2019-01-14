Is the Word an Isogram?
An isogram is a word that has no repeating letters, consecutive or nonconsecutive. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
Examples
isIsogram("Algorism") ➞ true

isIsogram("PasSword") ➞ false (not case sensitive)

isIsogram("Consecutive") ➞ false
Notes
Ignore letter case (should not be case sensitive).
All test cases contain valid one word strings.


//================= My solutions ====================


function isIsogram(str) {
	str = str.toLowerCase().split('');
	for(let i = 0; i < str.length; i++){
		 for(let j = i+1; j< str.length; j++){
			 if (str[i] === str[j]){
				 return false
			 }
		 }
	}
	return true
}

function isIsogram(str) {
  let sorted = str.toLowerCase().split('').sort();
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i] == sorted[i+1]){
      return false;
    }
  }
  return true;
}

//================ Better practices =================


function isIsogram(str) {
  return str.length === (new Set(str.toLowerCase())).size;
}

function isIsogram(str) {
  s1 = str.toLowerCase();
  return !s1.split('').reduce(function(dup, letter, index){
    return dup || s1.indexOf(letter) !== index;
  }, false);
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}


function isIsogram(str) {
  return str.toLowerCase().split('').reduce((x, y, i, a) => a.slice(0, i).includes(y) ? false : x, true);
}