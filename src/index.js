module.exports = function count(s, pairs) {
  let str = s.split('');
  let N = 1;
  let simple = [];
  if (str.length > 10) return false;
  for (let i = 0; pairs.length > i; i++) {
    if (pairs[i][1] > 10) return false;
    let a = pairs[i][0];
    let b = pairs[i][1];
    simple[i] = pairs[i][0];
    N = N * Math.pow(a, b);
  }
//Заглушка
  if (N > 100000000) return false;

  let simpleLength = simple.length;
  let allNumbers = '';

  for (let i = 0; N > i; i++) {
    let ifNotDivides = 0;
    
    for (let j = 0; simpleLength > j; j++) {
      //console.log(i, i % simple[i]);
      if (i % simple[j] != 0) {
        ifNotDivides++;
      } 
    }
    if (ifNotDivides == simpleLength) {
      allNumbers += '1';
    } else {
      allNumbers += '0';
    }
  }

  let count = 0;
  for (let i = 0; N > i; i++) {
      let v = allNumbers.indexOf(s);
      if (allNumbers.length >= s.length && v >= 0) {
        allNumbers = allNumbers.slice(v+str.length);
        count++;
      } else break;     
  }
  return count;
}
