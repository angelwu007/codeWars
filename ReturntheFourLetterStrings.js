Return the Four Letter Strings
Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples
["Ryan", "Kieran", "Jason", "Matt"] ➞ ["Ryan", "Matt"]

["Tomato", "Potato", "Pair"] ➞ ["Pair"]

["Kangaroo", "Bear", "Fox"] ➞ ["Bear"]



//==================My solution=================


function isFourLetters(arr) {
	return arr.filter(word => word.length === 4);
}



//=============== good practice ===========

let isFourLetters = (arr) => arr.filter(word => word.length === 4);

//================ old method=================


function isFourLetters(arr) {
  var result = [];
  for(var i=0; i < arr.length; i++){
    if (arr[i].length == 4){
      result.push(arr[i]);
    }
	}
  return result;
}