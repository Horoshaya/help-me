module.exports = function count(s, pairs) {
  let str = s.split(''),
			N = 1,
			simple = [],
			count = 0;

	if (str.length > 10) return false; // Заглушка

	for (let i = 0; pairs.length > i; i++) {
		if (pairs[i][1] > 10) return false; // Заглушка
		simple[i] = pairs[i][0];
		N = N * Math.pow(pairs[i][0], pairs[i][1]);
	}
	
	if (N > 10000000000) return false;//Заглушка

	if (s.length == 1) {
		count =  pairs.reduce((k, current) => k * (current[0] - 1), 1);		

		(s == '0') ? count = N - count : count;
		return count % 1000000007;
	}

	let allNumbers = '0';
	for (let i = 1; i <= N; i++) {
		(simple.some(j => i % j == 0)) ? allNumbers += '0': allNumbers += '1';
		
		let index = allNumbers.indexOf(s);
		if (allNumbers.length >= s.length && index >= 0) {
			allNumbers = allNumbers.slice(index + str.length - 1);
			count++;
		}
	}
	return count;
}
