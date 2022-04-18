// FOR loop is running while condition is true
// so not to repeat yourself!
// for accepts three arguments: initial value of = counter; condition; update counter after each iteration!
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Eugenia loop ${rep}`)
}

const eugeniaArray = [
	'Eugenia',
	'Pastore',
	2022 - 1990,
	'web-developer',
	['Vika', 'Nastya', 'Michelle']
];
const types = [];
for (let i = 0; i < eugeniaArray.length; i++) {

	console.log(eugeniaArray[i]);
	//filling an array
	// types[i] = typeof eugeniaArray[i];
	// push to add
	types.push(typeof eugeniaArray[i])

}

const years = [1990, 1995, 1989, 1964, 'birthyears']
const ages = []

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2022 - years[i]);
// }


// continue statement - exit CURRENT iteration and continue with the next iteration
// continue stops cuurent iteration exited and next one starts immediately

console.log('---ONLY NUMBERS---')
for (let i = 0; i < years.length; i++) {
	if (typeof years[i] !== 'number') continue;
	ages.push(typeof years[i])
}
console.log(ages)

//break statement - used to completely stop the loop! exit the loop!
console.log('---break with string---')
for (let i = 0; i < years.length; i++) {
	if (typeof years[i] === 'string') break;
	ages.push(typeof years[i])
}

console.log(ages)
