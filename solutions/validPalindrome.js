// let string = "A man, a plan, a canal: Panama";
// let string = "race a car";
let string = " ";

var isPalindrome = function(s) {
  let string1 = '';
  let string2 = '';
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).charCodeAt(0)
    if ((47 < char && char < 58) || 
      (64 < char && char < 91) ||  
      (96 < char && char < 123)) {
      let currentLetter = s.slice(i,i + 1);
      let word1 = string1.concat(currentLetter);
      string1 = word1.toLowerCase();
      let word2 = currentLetter.concat(string2);
      string2 = word2.toLowerCase();
    }
  }
  return string1 == string2
};

let x = isPalindrome(string);
console.log(x);
