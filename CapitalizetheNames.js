Capitalize the Names
Create a function that takes an array of names and returns an array with the first letter capitalized.
Examples
["mavis", "senaida", "letty"] ➞ ["Mavis", "Senaida", "Letty"]

["samuel", "MABELLE", "letitia", "meridith"] ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

["Slyvia", "Kristal", "Sharilyn", "Calista"] ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]



//============ My solution ================


function capMe(arr) {
	return arr.map(item => item.charAt(0).toUpperCase()+item.substring(1).toLowerCase())
}



//=============== Alternative Solutions ============

function capMe(arr) {
	for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().substring(1);
  }
  return arr;
}



