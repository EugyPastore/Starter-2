// activate strcit mode - helps developers to make accidental errors, bugs
// cretes visible errors in console
//prohibits us from doing certain things
// 'use strict';

let hasDrivingLicense = false;
const passTest = true;

if (passTest) hasDrivingLicense = true;
if (hasDrivingLicense) console.log('Can drive');

//calling=running=evoking=executing=using function that we defined previously
// this function does not return any value
function logger() {
	console.log("My name is Eugenia");
}
logger();
// functions can receive and return data

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`
	return juice;
}
//need to store in a variable in order to use juice value
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
