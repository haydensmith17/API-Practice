const b = [1, 2, 3, 4, 5]
const c = [{name:"hayden"}, {name: "ben"}]

function cat(params) {
  return params.map(e => e)
}

function dog(params) {
  const newarray = [];
 params.forEach(element => {
   newarray.push(element)
  });
  return newarray
}

function bird(params) {
  const newarray = [];
  for (let i = 0; i < params.length; i++) {
    newarray.push(params[i]);
  }
  return newarray;
}

function rat() {
  return c.map(e => e.name)
}

function bull() {
  const arr = [];
  c.forEach(e => {
    if (e.name === "ben") {
      arr.push(e.name)
    }
  });
  return arr
}

console.log(bull())
console.log(rat())

console.log(bird(b));


console.log(dog(b))
console.log(cat(b))

console.log(b[1])
console.log(c[1])

const names = [
    { name: "jake" },
    { name: "josh" },
    { name: "miah" },
    { name: "ben" },
    { name: "joe" },
    { name: "jake" },
    { name: "jake" },
    { name: "jake" },

]

console.log(names[6])


names.forEach(e => {
    if (e.name === "miah") {
        console.log("Found miah:", e);
    }
});


function fiveLine(s) {
    s = s.trim();
    
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
  }

  console.log(fiveLine("  a"))
//   "a\naa\naaa\naaaa\naaaaa");


function blackAndWhite(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
      return "It's a fake array";
    }
    
    // Check if the array contains the number 13
    if (arr.includes(13) && arr.includes(5)) {
      return "It's a black array";
    } else {
      return "It's a white array";
    }
  }

  console.log(blackAndWhite([5,13]));
  console.log(blackAndWhite([13,8,3,7]));
  console.log(blackAndWhite(12,10))



let nums123 = [1,2,3,3,4,2,5];
let val123 = 2;


// function customFilter(arr, fn) {
//   var res = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }


// Number.prototype.times = function (f) {
//   const num = this;
//   for (let i = 0; i < num; i++) {
//     f(i);
//   }
// }



// class Labrador extends Dog {
//   constructor(name, age, gender, master) {
//     super(name, age, gender, "Labrador", "Large", master, true);
//   }
// }


class Car {
  constructor(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  drive(miles) {
    this.mileage = this.mileage + miles
  }
}

const Outback = new Car("Subaru", "Outback", 2019, 104000);

Outback.drive(1500);

console.log(Outback);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study(statement) {
    this.statement = statement;
  }
}

const Jerry = new Student("Jerry", 16, 11);
Jerry.study("I need to study math.");

console.log(Jerry.statement)


class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(addAmount) {
    this.#balance = this.#balance + addAmount;
  }

  withdraw(subtractAmount) {
    if (subtractAmount < this.#balance) {
      this.#balance = this.#balance - subtractAmount;
    }
  }

  getBalance() {
    return this.#balance
  }
}

const John = new BankAccount(1500);

John.deposit(500)

John.withdraw(783)

console.log(John.getBalance())



class MathUtils {

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    if (b !== 0) { 
      return a/b 
    } else { 
      return "cannot divide by 0" 
    }
  }
}

console.log(MathUtils.divide(341, 0))


class Shape {
    area() {
      return 0;
    }    
  }


class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius
  }

  area() {
    return 3.14*(this.radius**2)
  }
}

class Rectangle extends Shape{
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width
  }
}

const myCircle = new Circle(3);

console.log(myCircle.area(3))


function crap() {
  const a = 'dodge';
  return a.length
}


console.log(crap())


const z = [2, 4,-5, 3]

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maxCardCount(n, card) {
    const memo = Array.from({ length: n }, () => Array(n).fill(undefined));
    return dp(0, n, card, 0, memo);
}

function dp(i, n, card, sum, memo) {
    if (i === n) {
        return 1;
    }

    if (memo[i][sum] !== undefined) {
        return memo[i][sum];
    }

    memo[i][sum] = dp(i + 1, n, card, sum, memo) - 1;

    if (sum + card[i] >= 0) {
        memo[i][sum] = Math.max(memo[i][sum], dp(i + 1, n, card, sum + card[i], memo));
    }

    return memo[i][sum];
}

rl.question('', () => {
    const n = parseInt(4, 10);

    rl.question('', (input) => {
        const cards = input.split(' ').map(Number);

        // Initialize the memo array properly
        const memo = z.from({ length: n + 1 }, () => z(n + 1).fill(undefined));

        // Call maxCardCount and display the result
        const result = maxCardCount(n, cards);

        // Print the result
        console.log(result);

        rl.close();
    });
});


// console.log(maxCardCount(4, [2, 4,-5, 3]))



const x1 = 2; 
let y1 = 4; 
function update(arg) { 
  return Math.random() + y * arg;
 } 
 y = 2; 
 
 const result1 = update(x);


 const x = 2;
let y = 4;
function update(arg) {
  return Math.random() + y * arg;
}
y = 2; y += 1;

const result = update(x);
console.log(result)


function bloodAlcoholContent(drinks, weight, sex, time) {
  const A = drinks.ounces * drinks.abv;
  let r = 0.66;
  if (sex == 'male') {
    r = 0.73;
  }
  var bac = (A * 5.14 / weight * r) - .015 * time
  return bac;
}

console.log(bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, 'female', 1))



function getLength(arr) {
  //return length of arr
  return arr.length
}
console.log(getLength([1, 2, 3]))

function getFirst(arr) {
  //return the first element of arr
  return arr[0]
}
console.log(getFirst([1, 2, 3]))

function getLast(arr) {
  //return the last element of arr
  return +arr.slice(-1)
}
console.log(getLast([1, 2, 3]))

function pushElement(arr) {
  const f = []
  var el = 1;
  //push el to arr
  const m = f.push(...arr, el)
  return f
}
console.log(pushElement([1, 2, 3]).length)

function popElement(arr) {
  //pop an element from arr
  const a = arr.pop()
  return a
}
console.log(popElement([1, 2, 3, 6]))


function firstToLast(str, c) {
  if (c === "d") {
    return str.indexOf(c)
  }
  return str.lastIndexOf(c) - str.search(c)
}

console.log(firstToLast("ababc", "d"))
console.log(firstToLast("ababc", "c"))


const mines = [
  [3, 18, 25],
  [0, -24, 20],
  [20, 0, 20],
  [24, 24, 30]
]

function findClosestMine() {
  let closestMine = {
    mineDistance: 1000,
    mineIndex: null
  }

  mines.forEach((mine, i) => {
    let distance = ((mine[0] ** 2) + (mine[1] ** 2)) ** 0.5
    console.log(distance)
    if (distance < closestMine.mineDistance) {
      closestMine.mineDistance = distance;
      closestMine.mineIndex = i;
    }
  });
  return closestMine.mineIndex;
}

console.log(findClosestMine())


const products = [
  { name: "Product A", price: 30, category: "Electronics", rating: 4.5 },
  { name: "Product B", price: 20, category: "Home", rating: 4.0 },
  { name: "Product C", price: 50, category: "Electronics", rating: 5.0 },
  // ...
];

function ProductFilter() {
  let bestProducts = [];
  products.forEach(p => {
    if (p.rating > 4.0) {
      bestProducts.push(p)
    }
  });
  bestProducts.sort((a,b) => b.price-a.price)
  let a = bestProducts.map(p => ({
    name: p.name, 
    price: p.price}))
  return a
}

console.log(ProductFilter())


const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 28 },
  { name: "Jack", age: 19 }
];

function ageFilter() {
  let ageRange = {
      under20: [],
      twenties: [],
      thirties: [],
  }
  people.forEach(e => {
      if (e.age > 29) {
          ageRange.thirties.push(e.name)
      } else if (e.age > 19) {
          ageRange.twenties.push(e.name)
      } else if (e.age <= 19) {
          ageRange.under20.push(e.name)
      }
  })
  return ageRange
}
 console.log(ageFilter())


 function uniqueItems() {
  const items = [
      { tag: "new" },
      { tag: "featured" },
      { tag: "new" },
      { tag: "sale" },
      { tag: "featured" },
  ];

  let uniques = [];

  items.forEach(e => {
      if (!uniques.find(i => i.tag === e.tag)) {
          uniques.push(e)
      }
  })
  console.log()
  return uniques
}

console.log(uniqueItems())

function noShortWords() {
  const words = ["apple", "is", "fun", "banana", "pie"];

  let longWords = words.filter(i => i.length > 4)

  return longWords
}

console.log(noShortWords())


function firstLetCap() {
  const words = ["hello", "world", "javascript", "rocks"];

  const caps = words.map(e => {
      return e[0].toUpperCase() + e.slice(1)
  })
  return caps
}
console.log(firstLetCap())


function someSum() {
  const numbers = [1, 2, 3, 4, 5, 6];

  let mySum = numbers.reduce((e, i) => {
      return e + i;
  })
  return mySum
}

console.log(someSum())


function noDupes() {
  const fruits = ["apple", "banana", "apple", "orange", "banana"];
  let newFruits = [];

  fruits.forEach(e => {
      if (!newFruits.find(i => i === e)) {
          newFruits.push(e)
      }
  })
  return newFruits
}

console.log(noDupes())


function evenFilter() {
  const numbers = [1, 2, 3, 4, 5, 6];

  let evens = numbers.filter(e => e % 2 == 0)
  return evens
}
console.log(evenFilter())


function moreShortWords() {
  const words = ["apple", "banana", "kiwi", "grape", "watermelon"];

  const shortWords = words.filter(e => e.length <= 5);
  return shortWords
}
console.log(moreShortWords())


function posNums() {
  const numbers = [-3, 0, 2, 5, -1, 8];

  const positives = numbers.filter(e => e > 0)
  return positives
}
console.log(posNums())


function ageFilter() {
  const users = [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 15 },
      { name: "Dave", age: 22 }
  ];

  const youngUsers = users.filter(e => e.age >= 18 )
  return youngUsers
}
console.log(ageFilter())