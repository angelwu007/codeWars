Return the Objects Keys and Values
Create a function that takes an object and returns the keys and values as separate arrays.
Examples
{a: 1, b: 2, c: 3} ➞ [["a", "b", "c"], [1, 2, 3]]

{a: "Apple", b: "Microsoft", c: "Google"} ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

{key1: true, key2: false, key3: undefined} ➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Result should be sorted.
All tests contain valid objects.


//================ My solutions ==================


function keysAndValues(obj) {
	const keys = Object.keys(obj);
	const values = [];
	for (const key in obj){
		values.push(obj[key])
	}
	return [keys,values]
}

function keysAndValues(obj) {
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	return [keys,values]
}


//================= Other solution ================


function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )];
}

function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
}