const words = ["hello", "world", "javascript"];
const words1 = words.map(e => e + "!")

console.log(words1)

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(e => e.name)
console.log(names)

const celsiusTemps = [0, 20, 30, 40];

const fTemps = celsiusTemps.map(e => e*1.8 + 32)
console.log(fTemps)

const numbers = [1, 2, 3, 4, 5];
const newnum = numbers.map(e => e**2)
console.log(newnum)

const users1 = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "Dave", age: 22 }
];

const oldUsers = users1.filter(e => e.age >= 18 )
console.log(oldUsers)

const numbers1 = [5, 3, 8, 1, 2];
const num1 = numbers1.sort((a,b) => a-b)
console.log(num1)

const products = [
  { name: "Shirt", price: 25 },
  { name: "Pants", price: 40 },
  { name: "Socks", price: 10 }
];
const sortedProducts = products.sort((a,b) => a.price - b.price)
console.log(sortedProducts)

const words2 = ["banana", "apple", "kiwi", "grape"];
const wordsByLength = words2.sort((a,b) => a.length - b.length)
console.log(wordsByLength)

const words3 = ["banana", "apple", "cherry", "date"];
const sortedWords = words3.sort((a,b) => a.localeCompare(b))
console.log(sortedWords)
const sortedWords1 = words3.sort()
console.log(sortedWords1)

const input = "hello";
const rInput = input.split('').reverse().join('')
console.log(rInput)

const input0 = "hello world";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
input0.split('').forEach(e => {
  if (vowels.includes(e.toLowerCase())) {
    count++
  }
})
console.log(count)

const input3 = "radar"
function palindrome(crap) {
  let reversal = crap.split('').reverse().join('')
  return crap === reversal
}
console.log(palindrome(input3))

const replaced = input0.replaceAll('o', '0')
console.log(replaced)

const newinp = input0.split(' ')
const newinp1 = newinp.map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
console.log(newinp1)

function longestWordFinder() {
  const input4 = "The quick brown elephant springs over the lazy dog";
  const splitInput4 = input4.split(' ')
  let longestWord = ''
  splitInput4.forEach(e => {
    if (e.length > longestWord.length) {
    longestWord = e
    }
})
  return longestWord
}
console.log(longestWordFinder())

const input5 = "programming";
function noDupes(crap) {
  let newString = [];
  crap.split('').forEach(e => {
    if (!newString.includes(e)) {
      newString.push(e)
    };
  });
  return newString.join('');
};
console.log(noDupes(input5))

const array = [1, 2, 3, 4]

function noDupes1(crap) {
  return crap.split('').reduce((newString, e) => {
    return newString.includes(e) ? newString : newString + e;
  })
}
console.log(noDupes1(input5))

const input6 = "tHe qUICK bROWN fOX";
function titleCase(crap) {
  let newCrap = crap.toLowerCase().split(' ')
  let newnewCrap = newCrap.map(e => {
    return e[0].toUpperCase() + e.slice(1)
  })
  return newnewCrap.join(' ')
}
console.log(titleCase(input6))

function StarRating(str) {
  const num = parseFloat(str);
  const whole = Math.floor(num);
  const decimal = Math.round((num - whole) * 100);
  const wholeRat = "full ".repeat(whole).trim();

  let decRat = '';
  if (decimal >= 75) {
    decRat = 'full';
  } else if (decimal >= 25) {
    decRat = 'half';
  } else {
    decRat = '';
  }

  let ratings = wholeRat.split(" ");
  if (decRat) {
    ratings.push(decRat);
  }

  while (ratings.length < 5) {
    ratings.push("empty");
  }

  if (whole == 0) {
    ratings.push("empty")
  }

  return ratings.join(" ").trim();
}

// Test cases
console.log(StarRating(3.5)); // Output: "full full full half empty"
console.log(StarRating(4.8)); // Output: "full full full full full"
console.log(StarRating(2.2)); // Output: "full full half empty empty"
console.log(StarRating(5));   // Output: "full full full full full"
console.log(StarRating(0.7)); // Output: "half empty empty empty empty"
console.log(StarRating(3.5))

// const str = "aa aa odg dog gdo"
function CountingAnagrams(str) { 
  let anagramCount = 0;
  const strings = str.split(' ');
  console.log(strings)
  strings.forEach(e => {
      strings.forEach(i => {
        if (i != e) {
          let letters = i.split('').sort().join()
          let eletters = e.split('').sort().join()
          if (eletters == letters) {
            strings.pop()
            console.log(strings)
            anagramCount++
          }
      }})
  })
  return anagramCount; 
}
console.log(CountingAnagrams("aa aa odg dog gdo"))

var animal={name: 'dog'}
var animal1 = {};
animal1.name='cat'
animal1['name']='frog'
animal1.age = 7
console.log(animal1)

var firstAnimal = {name:"dog",legs:4,color:"white"}
function animalSentence(obj){
  var result = "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
  return result
}
console.log(animalSentence(firstAnimal))

const lanimal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
console.log(lanimal(firstAnimal))

function parse( data ) {
  var output = [];
  var currentValue = 0;

  data.split('').forEach(e => {
    if (e === "i") {
      currentValue++;
    } else if (e === "d") {
      currentValue--;
    } else if (e === "s") {
      currentValue**=2;
    } else if (e === "o")
      output.push(currentValue);
  })

  return output; 
}
console.log(parse("iiisdoso"))