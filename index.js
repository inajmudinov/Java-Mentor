/*

const getHiddenCard = (num, a, b=8 ) => {
  return(num.slice(-4).padStart(b,'*'));
};

console.log(getHiddenCard('1234567812345678'));
//getHiddenCard('1234567812345678', 2); // '**5678'
//getHiddenCard('1234567812345678', 3); // '***5678'
//getHiddenCard('1234567812345678'); // '****5678'
*/

/*
const getHiddenCard = (num,b= 8 ) => {
  const last4 = num.slice(-4);
  const hiddenNumber = last4.padStart(b, '*');
  return hiddenNumber;
};

console.log(getHiddenCard('1234567812345678', 2));
*/




/*
const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(8, '*');

console.log(maskedNumber);
*/

/*
const normalizeUrl = (sentence) => {
  if (sentence.startsWith('http://')) {
      return sentence;
  } else {
      return `http://${sentence}`;
}

console.log(normalizeUrl('google.com')); // 'https://google.com'
console.log(normalizeUrl('http://ai.fi')); // 'https://ai.fi'

*/

//const str = 'http://ai.fi'

/*
const normalizeUrl = (str) => {
if (str.startsWith('http://')) {
  return sentence;
}

else {
  return `http:// ${str}`;
}

console.log(normalizeUrl('http://'));
*/

/*
const str = 'google.com'

console.log(`http://${str}`);
*/

/*
const word = 'https://';

const word2 = 'ai.fi'

console.log(word + word2.slice(0));
*/
/*
const isEven = number => number % 2 === 0;

console.log(isEven(10));  // true
console.log(!isEven(10)); // false
*/

/*
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
*/

/*
const printNumbers = (firstNumber) => {
  
  let i = firstNumber

  while (i > 0) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
};

printNumbers(4);
*/

/*
const mysubstr = (str, len) => {
  return (str.slice(0,len));
}

const str = 'If I look back I am lost';
//mysubstr(str, 1); // 'I'
mysubstr(str, 7); // 'If I lo'
*/

/*
var str = 'alpha beta beta gamma gamma gamma delta beta beta delta';

console.log(str.split(" "));
*/

const isArgumentsForSubstrCorrect = (str, ind, len ) => {
  for (i=0; i < str.length; i++)

  if (i.length < 0 && ind < 0 || ind > i.length)
      return true;
  return false;
}

const str = 'Sansa Stark';
//isArgumentsForSubstrCorrect(str, -1, 3);  // false

//isArgumentsForSubstrCorrect(str, 4, 100); // false
//isArgumentsForSubstrCorrect(str, 10, 10); // false
//isArgumentsForSubstrCorrect(str, 11, 1);  // false
//isArgumentsForSubstrCorrect(str, 3, 3);   // true
isArgumentsForSubstrCorrect(str, 0, 5);   // true