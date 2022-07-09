/* lexical scope */
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
// -> hummus(1);

/* Arrow functions */
const power = (base, exponent) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result *= base;
  }
  return result;
};
// -> console.log(power(2, 10));

/* Call stack */
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}
// console.log(chicken() + "Come first")
// --> RangeError: Maximum call stack size exceeded

/* optional arguments */
function square(x) {
  return x * x;
}
// console.log("hi!", square(3, "hello", true, 4));
// --> 9 /* Only accept first argument */

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
// console.log(minus(10, 5));
// console.log(minus(10));

function powered(base, exponent = 2) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}
// console.log(powered(3));
// console.log(powered(5, 3));

/* Closure */
function wrapValue(n) {
  let local = n;
  const foo = () => local;
  return foo;
}
// console.log(wrapValue(5));

function multiplier(factor) {
  return function (number) {
    console.log(factor);
    console.log(number);
    return (number *= factor);
  };
}

let twice = multiplier(2);
// console.log(twice(3));

/* Recusion */
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current * 3, `(${history} * 3)`) ||
        find(current + 5, `(${history} + 5)`)
      );
    }
  }

  return find(1, "1");
}

console.log(findSolution(36));
