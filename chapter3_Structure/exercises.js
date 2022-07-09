function min(a, b) {
  if (a < b) return a;
  return b;
}

function isEven(number) {
  if (number === 0) return true;
  else if (number === 1) return false;
  else if (number < 0) return isEven(-number);
  else return isEven(number - 2);
}
// console.log(isEven(75));

function countBs(str, letter) {
  count = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === String(letter))
    count += 1;
  }
  return count;
}
console.log(countBs("Bor BekoooooooooBBBBB", "o"));



