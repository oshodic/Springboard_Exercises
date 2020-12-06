// ES5 FUNCTION THAT TAKES A VARIABLE NUMBER OF ARGUMENTS
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

//FIND MIN
const findMin = (...nums) => Math.min(...nums);
console.log(findMin(1,2,3,4))

//MERGE OBJECTS
function mergeObjects(obj1,obj2) {
  const merged = {...obj1,...obj2};
  return merged;
}
console.log(mergeObjects({a:1, b:2}, {c:3, d:4}));

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr,...args) => {
  const doubledArgs = args.filter(num => num * 2);
  return [...arr,...doubledArgs];
}
console.log(doubleAndReturnArgs([1,2,3,],4,4,))

//SLICE AND DICE
const removeRandom = (items) => {
  const items2 = [items.slice(1)]
  return items2;
}
console.log(removeRandom([1,2,3,4]))

const extend = (array1,array2) => [...array1,...array2];
console.log(extend([1,2,3],[4,5,6]));

//const addKeyVal = (obj, key, val) => {...obj,...key,...val, occupation: 'teacher'}
// ^^this was my solution, but it's wrong.
const addKeyVal = (obj, key, val) => {
  let newObj = {...obj}
  newObj[key] = val;
  return newObj;
}

const removeKey = (obj,key) => {
  let newObj = {...obj}
  delete newObj[key];
  return newObj;
}
// used solution

const combine = (obj1,obj2) => {
  return {...obj1,...obj2};
}

const update = (obj, key, val) {
  let newObj = {...obj}
  newObj[key] = val;
  return newObj;
}