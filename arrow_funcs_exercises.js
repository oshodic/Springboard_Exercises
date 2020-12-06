// ES2015 ARROW FUNCTIONS SHORTHAND
const double = (arr) => arr.map(val => val * 2);


// REFACTOR USING ARROW FUNCTS

const squareAandFindEvens = (numbers) => {
  let squares = numbers.map(num => num ** 2);
  let evens = squares.filter(square => square % 2 === 0);
  return evens;
}
