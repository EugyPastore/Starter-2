// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

'use strict'

// function checkWinner(avgDolphins, avgKoalas) {
// 	if (avgDolphins >= 2 * avgKoalas) {
// 		console.log(`The winner is Dolphins!(${avgDolphins} vs ${avgKoalas})`);
// 	} else if (avgKoalas >= 2 * avgDolphins) {
// 		console.log(`The winner is Koalas! (${avgKoalas} vs ${avgDolphins})`);
// 	} else {
// 		console.log('No team wins!');
// 	}
// }

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);
//================================================================================
// coding challenge 2 arrays
// const bills = [125, 555, 44];
// const total = []
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		const tip = bill * 0.15;
// 		total.push(tip + bill)
// 		return tip;
// 	} else {
// 		const tip = bill * 0.2;
// 		total.push(tip + bill)
// 		return tip;
// 	}
// }

// console.log(bills, tips, total);
//===============================================================================
// 3 challange about objects
// const selectionButton = document.querySelector('.selection')
// //GLOBAL VARIABLE IN ALL CAPS THAT WILL NOT CHANGE
// const mark = {
// 	name: "Mark",
// 	lastName: "Miller",
// 	weight: 78,
// 	height: 1.69,
// 	calcBmi: function () {
// 		this.bmi = Math.floor(this.weight / this.height ** 2);
// 		return this.bmi;
// 	}
// };

// const john = {
// 	name: "John",
// 	lastName: "Smith",
// 	weight: 92,
// 	height: 1.95,
// 	calcBmi: function () {
// 		this.bmi = Math.floor(this.weight / this.height ** 2);
// 		return this.bmi;
// 	}
// };



// selectionButton.addEventListener('click', function () {

// 	function displayAnswer() {
// 		let div = document.createElement('div');
// 		if (mark.calcBmi() > john.calcBmi()) {
// 			div.innerText = `${mark.name} ${mark.lastName}'s BMI is higher than ${john.name} ${john.lastName}'s. ${mark.bmi} vs ${john.bmi}`;

// 		} else if (john.calcBmi() > mark.calcBmi()) {
// 			div.innerText = `${john.name} ${john.lastName}'s BMI is higher than ${mark.name} ${mark.lastName}'s.${john.bmi} vs ${mark.bmi}`;
// 		}
// 		div.classList.add('result-selection')
// 		document.body.appendChild(div);
// 	}
// 	displayAnswer()
// })

// 1ST WAY OF WRITING
// if (mark.calcBmi() > john.calcBmi()) {
// 	console.log(`${mark.name} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.name} ${john.lastName}'s (${john.bmi})`);
// } else if (john.calcBmi() > mark.calcBmi()) {
// 	console.log(`${john.name} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.name} ${mark.lastName}'s (${mark.bmi})`);
// }
//2ND WAY OF WRITING
// if (mark.bmi > john.bmi) {
// 	console.log(`${mark.name} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.name} ${john.lastName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
// 	console.log(`${john.name} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.name} ${mark.lastName}'s (${mark.bmi})`);
// }


// challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i <= bills.length - 1; i++) {
	function calcTip(bill) {
		if (bills[i] >= 50 && bills[i] <= 300) {
			const tip = bills[i] * 0.15;
			totals.push(tip + bills[i])
			tips.push(tip);
		} else {
			const tip = bills[i] * 0.2;
			totals.push(tip + bills[i]);
			tips.push(tip);
		}

	}
	calcTip(bills[i])
}
console.log(bills, tips, totals)
function calcAverage(arr) {
	let sum = 0
	for (let i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}
	sum = sum / arr.length;
	return sum;
}
calcAverage(bills);
