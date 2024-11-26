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