Head-Body-Tail
Write a function that takes four string arguments. You will be comparing the first string to the three next strings. Verify if the first string starts with the second string, includes the third string, and ends with the fourth string. If the first string passes all checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
Examples
"Onomatopeia", "on", "mato", "ia" ➞ "Incomplete."

"Centipede", "Cent", "tip", "pede" ➞ "My head, body, and tail."

"apple", "AP", "PPL", "LE" ➞ "Incomplete."




//===============My solution ===================


function verifySubstrs(mainStr, head, body, tail) {
		if(body.length < 3){
			return	mainStr === head+body+tail ? "My head, body, and tail." : "Incomplete." ;
		}else if (mainStr !==  head+[...body].slice(1,body.length-1)+ tail){
				return "Incomplete." 
			} else{
				return "My head, body, and tail."
			}
	}


//================== Better solution ================

function verifySubstrs(mainStr, head, body, tail) {
  return mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail) ? "My head, body, and tail." : "Incomplete.";
}


function verifySubstrs(mainStr, head, body, tail) {
  return mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail) 
         ? "My head, body, and tail."
         : "Incomplete.";
}

