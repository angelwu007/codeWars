Check for Anagrams
Write a function that takes two strings and returns (true or false) whether they're anagrams or not.
Examples
'cristian', 'Cristina' ➞ true

'Dave Barry', 'Ray Adverb' ➞ true

'Nope', 'Note' ➞ false


//============= My solution =============


function isAnagram(s1, s2) {
    s1 = s1.toLowerCase().split('').sort().join('')
    s2 = s2.toLowerCase().split('').sort().join('')
		return s1 === s2
}


//============= different solution ================


function isAnagram(s1, s2) {
  const resolve = s => Array.from(s.toLowerCase()).sort().join('');
  return resolve(s1) === resolve(s2);
}