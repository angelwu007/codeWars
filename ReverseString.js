Reverse the Order of a String
Create a function that takes a string as its argument and returns the string in reversed order.



function reverse(str) {
	return str.split('').reverse().join('')
}





//======================best practice==========


function reverse(str) {
  return [...str].reverse().join('');
}


//==================old method=================
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result; 
}