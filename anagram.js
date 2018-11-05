// An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

// ALGORITHMS


///////My solution///////////////

function anagramCounter (wordsArray) {
    let counter = 0;
    let newArray =[];
  
    wordsArray.forEach(function(item){
      newArray.push(item.split('').sort().join(''));
    })
  
    for (let i = 0; i < wordsArray.length; i++){
      for (let j =i+1; j< wordsArray.length; j++){
        if(newArray[i] === newArray[j]){
            counter ++;  
   }
      }
    }
    return counter;
  }


  /////////Best Practice////////////
  function anagramCounter(arrayOfWords){
    let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
    let numberOfAnagrams = 0;
  
    sortedWords.forEach((word, theIndex)=>{
      for(let i = theIndex+1; i < sortedWords.length; i++){
        if(word === sortedWords[i]){
          numberOfAnagrams++
        }
      }
    })
    return numberOfAnagrams
  }
  
