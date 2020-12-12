/*Object Destructuring 1

console.log(numPlanets); --> this would return 8
console.log(yearNeptuneDiscovered); --> this would return 1846

Object Destructing 2

console.log(discoveryYears); 
--> this would return the rest of the object which is:
yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

Object Destructing 3

1. Your name is Alejandro and you like purple
2. Your name is Melissa and you like green
3. Your name is undefined and you like green
*/

//ES5 ASSIGNING VARIABLES TO OBJECT PROPERTIES
const {numbers: {a, b}} = obj;
//solution is const {a,b} = obj.numbers

//ES5 ARRAY SWAP
arr[0][1] = arr[1][0]
//solution is [arr[0],arr[1]] = [arr[1],arr[0]];

//raceResults()
const raceResults = ([first, second, third, ...rest]) => {
  return {
    first,
    second,
    third,
    rest
  }
}

