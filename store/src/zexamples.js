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



const x = 2; 
let y = 4; 
function update(arg) { 
  return Math.random() + y * arg;
 } 
 y = 2; 
 
 const result = update(x);