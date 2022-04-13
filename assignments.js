// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

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
const bills = [125, 555, 44];
const total = []
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
function calcTip(bill) {
	if (bill >= 50 && bill <= 300) {
		const tip = bill * 0.15;
		total.push(tip + bill)
		return tip;
	} else {
		const tip = bill * 0.2;
		total.push(tip + bill)
		return tip;
	}
}

console.log(bills, tips, total);
