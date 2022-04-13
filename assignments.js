const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`The winner is Dolphins!(${avgDolphins} vs ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`The winner is Koalas! (${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log('No team wins!');
	}
}

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);