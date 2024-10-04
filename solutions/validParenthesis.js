// const myString = "()";
// const myString = "())[]{}";
// const myString = "(]";
// const myString = "([])";
const myString = "(){}}{";
// const myString1 = '([]())';
// const array = [];

var isValid = function (s) {
  const isInOddPosition = (el1, el2) => {
    console.log(`${el1}, ${el2}`);
    let indexDiff = s.indexOf(el2) - s.indexOf(el1);
    console.log(`indexDiff = ${indexDiff} `);
    if (indexDiff % 2 == 0) {
      console.log('return false')  
      return false;
    }
    return true;
  }
  const hasOpenBracketBeforeClosed = (el1, el2) => {
      if (s.indexOf(el1) > s.indexOf(el2)) {
          return false;
      }
      return true;
  }
  const hasSecondBracketPresent = (el1, el2) => {
      if (!s.includes(el1) && s.includes(el2)) {
          return false;
      }
      if (s.includes(el1) && !s.includes(el2)) {
          return false;
      }
      return true;
  }
  for (let index = 0; index < s.length; index++) {
      let letter = s.charAt(index);
      if (letter == '(' && !isInOddPosition('(', ')')) {
          return false;
      } else if (letter == '[' && !isInOddPosition('[', ']')) {
          return false;
      } else if (letter == '{' && !isInOddPosition('{', '}')) {
          return false;
      } else {
        return false
      }
  }
  console.log('completed odd checks')
  if (!hasOpenBracketBeforeClosed('(', ')') || !hasOpenBracketBeforeClosed('{', '}') || !hasOpenBracketBeforeClosed('[', ']')) {
      return false;
  }
  if (!hasSecondBracketPresent('(', ')') || !hasSecondBracketPresent('[', ']') || !hasSecondBracketPresent('{', '}')) {
      return false;
  }
  return true;
};

console.log(isValid(myString))

