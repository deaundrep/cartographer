/******************
 * YOUR CODE HERE *
 ******************/
const triple = function(num){
  return num * 3;
}

const tripleAll = function(numbers){
  return numbers.map(triple);
}

const getNegativeValue = function(num){
  if (num > 0){
    return num * -1;
  } else {
    return num
  }
}

const negativeValues = function(numbers){
  return numbers.map(getNegativeValue);
}

const makeQuestion = function(str){
  return str +'?'
}

const questionings = function(str){
  return str.map(makeQuestion)
}






/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
