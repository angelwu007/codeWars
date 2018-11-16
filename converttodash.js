
//Create a function that takes a number (from 1 - 60) and returns a //corresponding string of hyphens.



function Go(num) {
	let str = '';
	for(let i = 1; i<=num; i++){
		str+='-';
	}
	return str;
}


//==========================Best solutiom============


function Go(num) {
	return "-".repeat(num);
}