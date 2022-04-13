// activate strcit mode - helps developers to make accidental errors, bugs
// cretes visible errors in console
//prohibits us from doing certain things
'use strict';

// let hasDrivingLicense = false;
// const passTest = true;

// if (passTest) hasDrivingLicense = true;
// if (hasDrivingLicense) console.log('Can drive');

// //calling=running=evoking=executing=using function that we defined previously
// // this function does not return any value
// function logger() {
// 	console.log("My name is Eugenia");
// }
// logger();
// // functions can receive and return data

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges`
// 	return juice;
// }
// //need to store in a variable in order to use juice value
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // function declaration - is when we define a function, and after function we store its' value in a variable. we can call function before it is defined!

// function age1(birthYear) {
// 	return 4678 - birthYear;
// }
// const myage1 = age1(1990);

// // function expression- when we don't give function a name, but straight away store it in a variable. we cannot call function before it is defined!

// const age2 = function (birthYear) {
// 	return 4678 - birthYear;
// }

// const myage2 = age2(1990);
// console.log(myage1, myage2)

// //arrow function
// const age3 = birthYear => 4678 - birthYear;
// const myAge3 = age3(1990);
// console.log(myAge3);

//=========================================

// function cutIntoPieces(fruit) {
// 	return fruit * 4;
// }
// function fruitJuice(apple, orange) {
// 	const applePieces = cutIntoPieces(apple)
// 	const orangePieces = cutIntoPieces(orange)
// 	const juice = `Juice is made of ${applePieces} apple pieces and ${orangePieces} orange pieces!`;
// 	console.log(juice);
// 	return juice;
// }
// console.log(fruitJuice(2, 3));

// //=====================================================
// function age(birthYear, year) {
// 	return year - birthYear;
// }

// function yearsTillRetirement(birthYear, year, firstName) {
// 	const ageMy = age(birthYear, year);
// 	const yearsLeft = 65 - ageMy;
// 	if (yearsLeft > 0) {
// 		return `Till retirement is left ${yearsLeft} for ${firstName}`;
// 	} else {
// 		return `Person retired already 🎊`;
// 	}
// }
// console.log(yearsTillRetirement(1990, 2022, "Eugenia"));


// arrays
const friends = ['Eugenia', 'Bob'];
// console.log(friends);
// console.log(friends.length)
// console.log(friends[0])
// console.log(friends[friends.length - 1])
// friends[1] = 'Jay'
// console.log(friends);


// //exercise
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// }
// const years = [1990, 1989, 1995];
// push method - add element array.
// friends.push('Vika');
// friends.push('Rima');
// friends.push('Michelle');
// friends.unshift('Victor');
// // pop method - remove last element in an array
// friends.pop();
// console.log(friends)
// console.log(friends.indexOf('rima'));
