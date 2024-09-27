const b = [1, 2, 3, 4, 5]
const c = [{name:"hayden"}, {name: "ben"}]

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

const nameLoop = names.filter(e => e.name == "jake")

console.log(nameLoop)

const miahLoop = names.map(e => {
    return e.name === "miah"
    return miahLoop
})

const miahLoop1 = names.forEach(e => {
    return e.name === "miah"
})

console.log(miahLoop)

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


  items = []
  const q = {a: "b", c: "d"}
  items.push(q)

  