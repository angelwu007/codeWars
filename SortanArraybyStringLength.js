Sort an Array by String Length
Create a function that takes an array of strings and return an array, sorted from shortest to longest.
Examples
sortByLength(["Google", "Apple", "Microsoft"]) ➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]) ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"]) ➞ ["Jung", "Turing", "Einstein"]


// ============= My solution ===============


function sortByLength(arr) {
		return arr.sort((a,b) => a.length - b.length)
}


//============== Alternative solution ============


function sortByLength(arr) {
	
	for (let i=0; i<arr.length;i++){
		for (let j=0; j<arr.length-1;j++){
			
			
			if (arr[j].length>arr[j+1].length)
				{
					var x = arr[j+1];
					arr[j+1]=arr[j];
					arr[j]=x;
					
					
				}
		}
	}
	return arr
}