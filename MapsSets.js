/* QUICK QUESTION 1
{1,2,3,4}

QUICK QUESTION 2
"ref"

QUICK QUESTION 3
{
  [1,2,3] => true,
  [1,2,3] => false
}

solution was:
0: {Array(3) => true}
1: {Array(3) => false}

*/

function hasDuplicate(arr) {

   return new Set(arr).size !== arr.length
  
}

//checked solution
function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
