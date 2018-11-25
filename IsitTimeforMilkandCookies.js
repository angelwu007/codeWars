Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
Examples
Date( 2013, 11, 24 ) ➞ true

Date( 2013, 0, 23 ) ➞ false

Date( 3000, 11, 24 ) ➞ true


//================= My solution ==================


function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate()=== 24 ? true : false;
}


//================== Alternative ================



function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24; // implies true && false
}


function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();
  
  if(day == 24 && month == 11) {
    return true
  } else {
    return false
  }
}